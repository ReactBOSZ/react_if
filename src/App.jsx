import './App.css'
import {useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
    const [clicked, setClicked] = useState(false);

    const codeString = `import './App.css'
import { useState } from "react";

function App() {
    const [clicked, setClicked] = useState(false);
    
  return (
    <>
        <button onClick={() => setClicked(!clicked)}>
            {clicked ? "Button clicked" : "Click me"}
        </button>
    </>
  )
}

export default App
`;

    const codeStringUseState = `const [clicked, setClicked] = useState(false);`;
    const codeStringCondition = `{clicked ? "Button clicked" : "Click me"}`;

    return (
        <>
            <h2>example: </h2>
            <section>
                <SyntaxHighlighter language="jsx" style={atomOneDark}>
                    {codeString}
                </SyntaxHighlighter>
                <button onClick={() => setClicked(!clicked)}>
                    {clicked ? "Button clicked" : "Click me"}
                </button>
            </section>

            <h2>useState: </h2>
            <section>
                <SyntaxHighlighter language="javascript" style={atomOneDark}>
                    {codeStringUseState}
                </SyntaxHighlighter>
                <span className="des"> <span className="cod"> clicked </span> - access to value</span>
                <span className="des"> <span className="cod"> setClicked </span> - setter</span>
                <span className="des"> <span className="cod"> false </span> - init value</span>
            </section>

            <h2>condition: </h2>
            <section>
                <SyntaxHighlighter language="javascript" style={atomOneDark}>
                    {codeStringCondition}
                </SyntaxHighlighter>
                <span className="des"> <span className="cod"> clicked </span> - bool value</span>
                <span className="des"> <span className="cod"> "Button clicked" </span> - returns when true</span>
                <span className="des"> <span className="cod"> "Click me" </span> - returns when false</span>
            </section>
        </>
    )
}

export default App
