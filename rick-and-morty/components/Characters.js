import React from "react";
import * as S from "./Styled";

const Characters = ({ characters = [] }) => {
  console.log(characters, "caract");

  return (
    <S.Container>
      {characters?.map((item, index) => {
        console.log(item.image, "item");

        return (
          
            <S.Card key={index}>
              <S.Imagens>
                <img src={item.image} alt="" width={'100px'} height={'110px'}></img>
                <S.Caracteristicas>
              <S.Nomes>{item.name}</S.Nomes>
              <S.Lista>Gender:{item.gender}</S.Lista>
              <S.Lista>Status:{item.status}</S.Lista>
              <S.Lista>Species:{item.species}</S.Lista>
              </S.Caracteristicas>
              </S.Imagens>

             
            </S.Card> 
        );
      })}
    </S.Container>
  );
};

export default Characters;
