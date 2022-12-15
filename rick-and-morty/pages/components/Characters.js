import React from "react";
import * as S from "./Styled";

const Characters = ({ characters = [] }) => {
  return (
    <S.linhas>
      {characters.map((item, index) => (
        <S.coluna key={index}>
          <S.img>
            <img src="{item.image}" alt="" />
          </S.img>
        </S.coluna>
      ))}
    </S.linhas>
  );
};

export default Characters;
