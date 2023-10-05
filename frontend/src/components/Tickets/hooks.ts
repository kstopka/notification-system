/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "../../api/API";
import { AxiosResponse } from "axios";
import { ResponseNewsProps, UseNewsProps } from "./types";

export const useTickets: UseNewsProps = () => {
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    try {
      const result: AxiosResponse<any, any> = await Api.getTickets();
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
