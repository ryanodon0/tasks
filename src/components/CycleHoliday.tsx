import React, { useState } from "react";
import { Button } from "react-bootstrap";

/* 
"❤️";  Valentines
"🎃";  Halloween
"🎉";  My birthday (Maybe you don't count this as a holiday, but I celebrate it, so it counts for me. Also yes I understand 
other poeple will have birthdays which would throw off the order. I'm not thinking about this part THAT hard, despite me mentioning it)
"🍗";  Thanksgiving (I couldn't find a turkey leg, this is good enough)
"🎄";  Christmas
*/

const changeByAlphabet: Record<string, string> = {
    "🎉": "🎄",
    "🎄": "🎃",
    "🎃": "🍗",
    "🍗": "❤️",
    "❤️": "🎉",
};

const changeByOrder: Record<string, string> = {
    "❤️": "🎉",
    "🎉": "🎃",
    "🎃": "🍗",
    "🍗": "🎄",
    "🎄": "❤️",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("❤️");

    function orderChange(): void {
        setHoliday(changeByOrder[holiday]);
    }
    function alphabetChange(): void {
        setHoliday(changeByAlphabet[holiday]);
    }

    return (
        <div>
            <div>
                <Button onClick={orderChange}>Change by Year</Button>
                <Button onClick={alphabetChange}>
                    Change by Alphabetical Order
                </Button>
            </div>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
