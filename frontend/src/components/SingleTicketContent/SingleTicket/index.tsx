import { useEffect, useState } from "react";
import { useContextState, AuthCtx, UsersCtx } from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";
import { getStringDate } from "../../../utils";
import * as S from "./styles";
import { SingleTicketProps } from "./types";
import Select from "../../atoms/Select";
import { priorityArray, statusArray } from "./utils";
import { IUsersState } from "../../../contexted/Users/types";
import Api from "../../../api/API";

const SingleTicket: React.FC<SingleTicketProps> = ({
  created_at,
  user_name,
  description,
  priority: priorityTicket,
  status: statusTicket,
  subject,
  owner_name,
  owner_id,
  ticket_id,
}) => {
  const { loggedIn, permissions, id } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
    "id",
  ]);
  const { admins } = useContextState<IUsersState>(UsersCtx, ["admins"]);

  const [selectedOwner, setSelectedOwner] = useState(owner_id);
  const [status, setStatus] = useState(statusTicket);
  const [priority, setPriority] = useState(priorityTicket);
  const [transformedAdmins, setTransformedAdmins] = useState<
    { value: string | number; label: string }[]
  >([]);

  const handleOwnerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOwner(Number(e.target.value));
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  useEffect(() => {
    Api.updateSingleTicket({
      ticket_id,
      priority,
      status,
      owner_id: selectedOwner,
    });
  }, [selectedOwner, status, priority, ticket_id]);

  useEffect(() => {
    setTransformedAdmins(
      admins.map(({ user_id, name }) => ({
        value: user_id,
        label: name,
      }))
    );
  }, [admins]);

  return (
    <S.TicketWrapper>
      <div>{subject}</div>
      <S.Header>
        <S.WrapperLabel>{user_name}</S.WrapperLabel>
        <div>
          <S.Label>Priorytet:</S.Label>
          {permissions === "admin" ? (
            <Select
              name={"priorityTicket"}
              initialValue={priority}
              options={priorityArray}
              handleChange={handlePriorityChange}
            />
          ) : (
            <div>{priorityTicket}</div>
          )}
        </div>
        <div>
          <S.Label>Status:</S.Label>
          {permissions === "admin" ? (
            <Select
              name={"statusTicket"}
              initialValue={status}
              options={statusArray}
              handleChange={handleStatusChange}
            />
          ) : (
            <span>{statusTicket}</span>
          )}
        </div>
        <div>
          <S.Label>Właściciel:</S.Label>
          {permissions === "admin" ? (
            <Select
              name={"ownerTicket"}
              initialValue={selectedOwner}
              options={transformedAdmins}
              handleChange={handleOwnerChange}
            />
          ) : (
            <div>{owner_name}</div>
          )}
        </div>

        <S.WrapperLabel>{getStringDate(created_at)}</S.WrapperLabel>
      </S.Header>
      <S.Content>{description}</S.Content>
    </S.TicketWrapper>
  );
};

export default SingleTicket;
