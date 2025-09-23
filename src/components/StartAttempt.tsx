import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function addOneAttempt(): void {
        setAttempts(attempts + 1);
    }
    function removeOneAttempt(): void {
        setAttempts(attempts - 1);
    }
    function invertInProgress(): void {
        if (!inProgress) {
            removeOneAttempt();
        }
        setInProgress(!inProgress);
    }

    return (
        <div>
            <Button onClick={addOneAttempt} disabled={inProgress}>
                Mulligan
            </Button>
            Number of Attempts: <span>{attempts}</span>
            <div>
                <Button
                    onClick={invertInProgress}
                    disabled={inProgress || attempts == 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={invertInProgress} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                {inProgress ?
                    <span>Quiz In Progress</span>
                :   <span>Quiz Not In Progress</span>}
            </div>
        </div>
    );
}
