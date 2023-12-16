/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "../../api/API";
import { AxiosResponse } from "axios";
import { ResponseNewsProps, UseVoteLawProps } from "./types";
import { BasicPostData } from "../../types/standard";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import PostsApi from "../../api/PostsApi";

export const useVoteLaw: UseVoteLawProps = () => {
  const { id } = useContextState<IAuthState>(AuthCtx, ["id"]);

  const [voteLaw, setVoteLaw] = useState<BasicPostData[]>([]);

  const getVoteLaw = async () => {
    try {
      const result: AxiosResponse<any, ResponseNewsProps> =
        await PostsApi.getVoteLaw(id);
      console.log("result.data", result.data);
      setVoteLaw(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getVoteLaw();
  }, []);

  useEffect(() => {
    console.log("voteLaw", voteLaw);
  }, [voteLaw]);

  return {
    voteLaw,
    getVoteLaw,
  };
};
