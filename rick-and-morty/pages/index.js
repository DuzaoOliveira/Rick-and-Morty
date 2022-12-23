import Head from "next/head";
import axios from "axios";
import * as S from "../styles/Home";
import React, { useEffect, useState } from "react";
import Characters from "../components/Characters";
import Paginas from "../components/Paginas";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const primeiraUrl = `https://rickandmortyapi.com/api/character?page=${page}`;

  const getCharacters = () => {
    axios.get(primeiraUrl).then((res) => {
      setCharacters(res.data.results);
      setInfo(res?.data.info);
    });
  };
  useEffect(() => {
    getCharacters(primeiraUrl);
  }, [page]);

  return (
    <S.container>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Imagem src="rick.png" />

      <S.Inp
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Procure aqui um personagem"
      />

      <div>
        <Paginas
          prev={info?.prev}
          next={info?.next}
          setPage={setPage}
          page={page}
        />

        <Characters characters={characters} name={name} />
        <Paginas
          prev={info?.prev}
          next={info?.next}
          setPage={setPage}
          page={page}
        />
      </div>
    </S.container>
  );
}

export default Home;
