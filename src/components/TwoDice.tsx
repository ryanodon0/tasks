//import { check } from "prettier";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(0);
    const [rightDie, setRightDie] = useState<number>(1);

    function rerollLeft(): void {
        setLeftDie(d6());
    }
    function rerollRight(): void {
        setRightDie(d6());
    }
    function checking(): boolean | null {
        if (leftDie == 1 && rightDie == 1) {
            return false;
        } else if (leftDie == rightDie) {
            return true;
        } else {
            return null;
        }
    }

    return (
        <div>
            <div>
                <Button onClick={rerollLeft}>Reroll Left</Button>
                <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                <Button onClick={rerollRight}>Reroll Right</Button>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            {checking() == true && <div>Win</div>}
            {checking() == false && <div>Lose</div>}
        </div>
    );
}
