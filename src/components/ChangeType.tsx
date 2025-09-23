import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";
import { makeBlankQuestion } from "../objects";

const typeChange: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question",
};

export function ChangeType(): React.JSX.Element {
    let phQuestion: Question = makeBlankQuestion(
        1,
        "Placeholder",
        "short_answer_question",
    );
    const [type, setType] = useState<QuestionType>(phQuestion.type);

    function invertType(): void {
        setType(typeChange[type]);
    }

    return (
        <div>
            <Button onClick={invertType}>Change Type</Button>
            {type === "short_answer_question" ?
                <span>Short Answer</span>
            :   <span>Multiple Choice</span>}
        </div>
    );
}
