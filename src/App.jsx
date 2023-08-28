import { useState } from 'react';
// import Square from './Components/Square/';
import Board from './Components/Board';
// import './App.css';
import './styles.scss';

function App() {
  const [counter, setCounter] = useState(1);

  // let counter = 1;
  console.log('hello');

  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
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

    // <div className="app">
    //   <Board />
    //   </div>

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

    <div className="app">
      <div>
        <button onClick={onBtnClick}>click me</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
