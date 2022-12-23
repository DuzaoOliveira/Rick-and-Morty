import React from "react";
import * as S from "./Styled"

const Paginas = ({ prev, next, setPage, page }) => {

  return (
    <nav>
      <ul>
        {prev && (
          <li>
            <S.But onClick={() => setPage(page - 1)}>previus</S.But>
          </li>
        )}

        {next && (
          <li>
            <S.But onClick={() => setPage(page + 1)}>next</S.But>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginas;
