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

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};
export default Square;
