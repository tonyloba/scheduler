import { useState } from "react";



export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if(replace && history.length !== 1){
      setHistory(prev => ([...prev.slice(0, prev.length - 1), newMode]))
   } else {
     setHistory(prev => ([...prev, newMode]));
   }

  }
  
  function back() {
    if (history.length !== 1) {
      history.pop();
      setMode(history[history.length - 1])
    }
  }

  return { mode, transition, back }
}









// const useVisualMode = (FIRST) => {
//   const [mode, setMode] = useState(FIRST);
//   const [history, setHistory] = useState([FIRST]);

//   const transition = (SECOND, replace=false) => {
//     setMode(SECOND);
//     if(replace && history.length !== 1){
//       setHistory(prev => ([...prev.slice(0, prev.length - 1), SECOND]))
//    } else {
//      setHistory(prev => ([...prev, SECOND]));
//    }

//   };

//   const back = () => {
//     if (history.length !== 1) {
//       history.pop();
//       setMode(history[history.length - 1])
//     }
//   };

//   return { 
//     mode,
//     transition,
//     back
//   };
// };

// export { useVisualMode }
