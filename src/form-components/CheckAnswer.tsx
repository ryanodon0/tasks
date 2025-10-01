//import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="userAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <h3>Check Answer</h3>
            {answer === expectedAnswer ?
                <span>✔️</span>
            :   <span>❌</span>}
        </div>
    );
}
