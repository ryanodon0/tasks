import React from "react";
import "./App.css";
import "./me_when_cat.png";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>This is header text</h1>
            <header className="App-header" style={{ backgroundColor: "red" }}>
                UD CISC275 with React Hooks and TypeScript by Ryan ODonnell
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img src="{me_when_cat.png}" alt="its a car" />
            <ul>
                <li>car</li>
                <li>god</li>
                <li>neither</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
