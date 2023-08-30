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

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
