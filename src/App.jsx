// import { useState } from 'react';
// // import Square from './Components/Square/';
import Board from './Components/Board';
// import './App.css';
import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './Components/StatusMessage';

function App() {
  //   const [counter, setCounter] = useState(1);

  //   // let counter = 1;
  //   console.log('hello');

  //   const onBtnClick = () => {
  //     setCounter(currentCounter => {
  //       return currentCounter + 1;
  //     });
  //   };

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  // console.log(winner);

  //position is clickedPosition

  const handleSquareClick = position => {
    if (squares[position] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, pos) => {
        if (position === pos) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    // <div className="card">
    //   {<h1>Title</h1>

    //   <Square value="lalit" />
    //   <Square value="5" />
    //   <Square value="lkm">
    //     <div>lalit kumar</div>
    //   </Square> }
    // </div>

    <div className="app">
      <StatusMessage winner={winner} isNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>

    // <div className="app">
    //   <div>
    //     <button
    //       onClick={event => {
    //         console.log('hello', event);
    //       }}
    //     >
    //       click me
    //     </button>
    //   </div>
    // </div>

    //   <div className="app">
    //     <div>
    //       <button onClick={onBtnClick}>click me</button>
    //       <div>{counter}</div>
    //     </div>
    //   </div>
  );
}

export default App;
