import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
                <Form.Group controlId="userAnswer">
                    <Form.Label>Select Answer</Form.Label>
                    <Form.Select
                        value={answer}
                        onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>,
                        ) => {
                            setAnswer(event.target.value);
                        }}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>
                {answer === expectedAnswer ?
                    <span>✔️</span>
                :   <span>❌</span>}
            </div>
        </div>
    );
}
