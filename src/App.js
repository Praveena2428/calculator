import "./App.css";
import { useState } from "react";
import Calhead from "./Components/Calhead";

import Button from "./Components/Button";
import * as math from "mathjs";

function App() {  
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const addText = (val) => {
    setText((text) => [...text, val]);
  };
  const textDelete = () => {
    const numbers = text.slice(0, text.length - 1);
    setText(numbers);
  };
  const clear = () => {
    setText("");
    setResult("");
  };
  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };
  return (
    <div>
       <div className="app-info">
        <div className="cal-wraper">
          <Calhead text={text} result={result} />
          <div className="button-wraper">
            <Button symbol={"AC"} handleClick={clear} />
            <Button symbol={"DEL"} handleClick={textDelete}/>
            <Button symbol={"%"}  handleClick={addText} />
            <Button symbol={"/"}  handleClick={addText}  />
          </div>
          <div className="button-wraper">
            <Button symbol={"7"} handleClick={addText} />
            <Button symbol={"8"} handleClick={addText}/>
            <Button symbol={"9"} handleClick={addText}/>
            <Button symbol={"*"} handleClick={addText} />
          </div>
          <div className="button-wraper">
            <Button symbol={"4"} handleClick={addText} />
            <Button symbol={"5"} handleClick={addText}/>
            <Button symbol={"6"} handleClick={addText} />
            <Button symbol={"-"} handleClick={addText}  />
          </div>
          <div className="button-wraper">
            <Button symbol={"1"} handleClick={addText}/>
            <Button symbol={"2"} handleClick={addText} />
            <Button symbol={"3"} handleClick={addText}/>
            <Button symbol={"+"} handleClick={addText}  />
          </div>
          <div className="button-wraper">
            <Button symbol={""} />
            <Button symbol={"0"} handleClick={addText} />
            <Button symbol={"."} handleClick={addText}/>
            <Button symbol={"="} handleClick={calculateResult}/>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
