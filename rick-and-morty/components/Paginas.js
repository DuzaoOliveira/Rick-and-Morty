import React from "react";

const Paginas = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul>
        {prev ? (
          <li>
            <button onClick={handlePrevious}>anterio</button>
          </li>
        ) : null}

        {next ? (
          <li>
            <button onClick={handleNext}>próximo</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Paginas;
