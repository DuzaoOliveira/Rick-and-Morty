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
        {/* {prev ? ( */}
          <li>
            <button onClick={() => handlePrevious()}>previus</button>
          </li>
        {/* // ) : null} */}

        {/* {next ? ( */}
          <li>
            <button onClick={() => handleNext}>next</button>
          </li>
        {/* // ) : null} */}
      </ul>
    </nav>
  );
};

export default Paginas;
