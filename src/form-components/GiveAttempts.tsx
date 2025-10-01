import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [giveAttempts, setGiveAttempts] = useState<string>("0");
    const defaultAttempts = parseInt(giveAttempts) || 0;

    function updateAttemptsBox(event: React.ChangeEvent<HTMLInputElement>) {
        setGiveAttempts(event.target.value);
    }

    return (
        <div>
            <div>
                <Form.Group controlId="userAttempts">
                    <Form.Label>Add Attempts: </Form.Label>
                    <Form.Control
                        type="number"
                        value={giveAttempts}
                        onChange={updateAttemptsBox}
                    />
                </Form.Group>
                <h3>Give Attempts</h3>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                    disabled={attempts === 0}
                >
                    Use
                </Button>
                <Button
                    onClick={() => {
                        setAttempts(attempts + defaultAttempts);
                    }}
                >
                    Gain
                </Button>
                Number of attempts left: {attempts}
            </div>
        </div>
    );
}
