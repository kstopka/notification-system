/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "../../api/API";
import { AxiosResponse } from "axios";
import { ResponseTicketsProps, SingleTicket, UseNewsProps } from "./types";
import TicketsApi from "../../api/TicketsApi";

export const useTickets: UseNewsProps = () => {
  const [tickets, setTickets] = useState<SingleTicket[]>([]);

  const getTickets = async () => {
    try {
      const result: AxiosResponse<any, ResponseTicketsProps> =
        await TicketsApi.getTickets();
      setTickets(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    console.log("tickets", tickets);
  }, [tickets]);

  return {
    tickets,
    getTickets,
  };
};
