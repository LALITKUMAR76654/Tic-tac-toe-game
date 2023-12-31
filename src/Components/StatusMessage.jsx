import React from 'react';

const StatusMessage = ({ winner, gamingBoard /*isNext, squares*/ }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O';
  // const statusMessage = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${nextPlayer}`;

  const renderStatusMessage = () => {
    if (winner) {
      return (
        //short syntex is     <></> ===  <React.Fragment></React.Fragment>   for react fragment
        <>
          <span>
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
            </span>
          </span>
          <br />
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <>
          <span>
            <span className="text-orange">O</span> and
            <span className="text-green"> X </span>
            tied
          </span>
          <br />
        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          <span>
            Next player is{' '}
            <span className={isXNext ? 'text-green' : 'text-orange'}>
              {nextPlayer}
            </span>
          </span>
          <br />
        </>
      );
    }

    return null;
  };

  //return (
  // <React.Fragment>
  //   {winner && <React.Fragment>Winner is ${winner}</React.Fragment>}
  //   {!winner && noMovesLeft && <React.Fragment>hello</React.Fragment>}
  // </React.Fragment>
  // );

  return (
    <React.Fragment className="status-message">
      {renderStatusMessage()}
    </React.Fragment>
  );
};

export default StatusMessage;
