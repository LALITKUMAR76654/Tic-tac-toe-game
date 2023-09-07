// const Square = ({ value, children }) => {
//   //   console.log(props.value);
//   console.log(children);
//   return (
//     <div>
//       {value}
//       <h5>children will be</h5>
//       <div>{children}</div>
//     </div>
//   );
// };

const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      // className={`square ${value === 'X' ? 'text-green' : 'text-orange'} ${
      //   isWinningSquare ? 'winning' : ''
      // }`}

      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
