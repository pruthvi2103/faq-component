import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Faq } from "@faq-component/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    { title: "Hello", content: "World" },
    { title: "Hello", content: "World" },
  ];
  return (
    <div className="App">
      <h1>hello world</h1>
      <Faq data={data} />
    </div>
  );
}

export default App;
