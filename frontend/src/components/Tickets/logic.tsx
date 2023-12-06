import URL_PATHS from "../../constants/routes";
import { getDate } from "../../utils";
import { SingleTicket } from "./types";
import { useNavigate } from "react-router-dom";

export const useDefaultColumns = () => {
  const navigate = useNavigate();
  return {
    columns: [
      {
        // Header: () => {
        //   return <div className="TableHeader">Nazwa</div>;
        // },
        Header: "ID",
        id: "ticket_id",
        accessor: "ticket_id",
        name: "ticket_id",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Użytkownik",
        accessor: "user_name",
        name: "user_name",
        Cell: (e: { value: string }) => `${e.value}`,
        // tickets.find(({ idMaterial }) => idMaterial === Number(e.value))
        //     ?.nameMaterial,
      },
      {
        Header: "Tytuł",
        accessor: "subject",
        name: "subject",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Piorytet",
        accessor: "priority",
        name: "priority",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Status",
        accessor: "status",
        name: "status",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Właściciel",
        accessor: "owner_name",
        name: "owner_name",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Data utworzenia",
        accessor: "created_at",
        name: "created_at",
        Cell: (e: { value: string }) => `${getDate(e.value)}`,
      },
      {
        accessor: "ticket_id",
        id: "openTicket",
        Cell: (e: { value: string }) => (
          <button
            onClick={() => navigate(`${URL_PATHS.ticket.slug}?id=${e.value}`)}
          >
            otwórz
          </button>
        ),
      },
    ],
  };
};
