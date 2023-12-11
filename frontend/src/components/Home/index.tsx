import { useState } from "react";
import * as S from "./styles";
import { HomeContentProps } from "./types";

const HomeContent: React.FC<HomeContentProps> = () => {
  return (
    <S.HomeWrapper>
      <h1>Home</h1>
      <button className="secondary">HOME</button>
    </S.HomeWrapper>
  );
};

export default HomeContent;
