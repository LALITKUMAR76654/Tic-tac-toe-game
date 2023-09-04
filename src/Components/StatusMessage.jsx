import React from 'react';

const StatusMessage = ({ winner, isNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isNext ? 'X' : 'O';
  // const statusMessage = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${nextPlayer}`;

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        //short syntex is <> </> for react fragment
        <React.Fragment>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X </span>
          tied
        </React.Fragment>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <React.Fragment>
          Next player is{' '}
          <span className={isNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </React.Fragment>
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
