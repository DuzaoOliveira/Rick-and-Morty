import React from "react";
import * as S from "./Styled";

const Characters = ({ characters = [] }) => {
  console.log(characters, "caract");

  return (
    <S.Container>
      {characters?.map((item, index) => {
        console.log(item.image, "item");

        return (
            <S.Coluna key={index}>
              <S.ContainerImg>
                <img src={item.image} alt="" />
              </S.ContainerImg>
              <S.Nomes>{item.name}</S.Nomes>
            </S.Coluna> 
        );
      })}
    </S.Container>
  );
};

export default Characters;
