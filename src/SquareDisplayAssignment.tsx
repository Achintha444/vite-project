import { useCallback, useState } from "react";

function Square({index, color, onSquareClick} : {index: number, color: string, onSquareClick: (color: string, index: number) => void}) {
  console.log("123");
  return (
    <div style={{width: '100px', height: '100px', backgroundColor: color}} onClick={() => onSquareClick(color,index)} />
  )
}

export default function SquareDisplayAssignment({colorList} : {colorList: string[]}) {

  const [localColorList, setLocalColorList] = useState<string[]>(colorList);
  const [history, setHistory] = useState<string[]>([]);

  const greenOnClick = useCallback((index: number) => {
    const newLocalColorList = [...localColorList];
    newLocalColorList[index] = "red";

    newLocalColorList.push("green");

    setLocalColorList(newLocalColorList);
  }, [localColorList]);

  const redOnClick = useCallback((index: number) => {
    const newLocalColorList = [...localColorList];
    newLocalColorList.splice(index, 1);

    setLocalColorList(newLocalColorList);
  }, [localColorList]);

  // we can also add debouncing here as well
  const onSquareClick = useCallback((color: string, index: number) => {
    setHistory([...history, `User clicked ${color}`]);
    switch(color) {
      case "green":
        greenOnClick(index);
        break;
      case "red":
        redOnClick(index);
        break;
    }
  }, [greenOnClick, redOnClick, setHistory, history])

  const onReset = () => {
    setLocalColorList(colorList);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", flexDirection: "column", gap: "1rem"}}>
      {
        localColorList.map((color, index) => <Square key={index} index={index} color={color} onSquareClick={onSquareClick} />)
      }
      <button onClick={onReset}> Reset </button> 
      {
        history.map((item, index) => <div key={index}>{item}</div>)
      }
    </div>
  )
}
