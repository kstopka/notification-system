/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "../../api/API";
import { AxiosResponse } from "axios";
import { UseLawsProps, ResponseLawsProps } from "./types";
import { BasicSingeLawData } from "../../types/standard";

export const useLaws: UseLawsProps = () => {
  const [laws, setLaws] = useState<BasicSingeLawData[]>([]);

  const getLaws = async () => {
    try {
      const result: AxiosResponse<any, ResponseLawsProps> = await Api.getLaws();
      setLaws(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getLaws();
  }, []);

  return {
    laws,
    getLaws,
  };
};
