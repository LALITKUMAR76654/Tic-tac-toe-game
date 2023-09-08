// import { useState } from 'react';
// // import Square from './Components/Square/';
import Board from './Components/Board';
// import './App.css';
import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './Components/StatusMessage';
import History from './Components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  //   const [counter, setCounter] = useState(1);

  //   // let counter = 1;
  //   console.log('hello');

  //   const onBtnClick = () => {
  //     setCounter(currentCounter => {
  //       return currentCounter + 1;
  //     });
  //   };

  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);

  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);

  // console.log({ historyLength: history.length, currentMove });

  // console.log(winner);

  //position is clickedPosition

  const handleSquareClick = position => {
    if (gamingBoard.squares[position] || winner) {
      return;
    }

    setHistory(currentHistory => {
      // return currentSquares.map((squareValue, pos) => {
      //   if (position === pos) {
      //     return isXNext ? 'X' : 'O';
      //   }
      //   return squareValue;
      // });
      const isTraversing = currentMove + 1 !== currentHistory.length;
      // console.log(isTraversing);

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, pos) => {
          if (position === pos) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    // setIsXNext(currentIsXNext => !currentIsXNext);
    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
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
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage
        winner={winner}
        gamingBoard={gamingBoard} /*isNext={isXNext} squares={squares}*/
      />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />

      <button
        type="buttton"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        {' '}
        Start new game
      </button>

      <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>

      <History history={history} moveTo={moveTo} currentMove={currentMove} />

      <div className="bg-balls"></div>
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
