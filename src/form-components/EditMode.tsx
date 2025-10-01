import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface User {
    name: string;
    isStudent: boolean;
}

export function EditMode(): React.JSX.Element {
    // Will set to Edit Mode when true, view mode when false
    const [mode, setMode] = useState<boolean>(false);
    const [id, setId] = useState<User>({ name: "Your Name", isStudent: true });

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="mode-switch"
                label="mode"
                checked={mode}
                onChange={updateMode}
            />
            <h3>Edit Mode</h3>
            {mode ?
                <div>
                    <Form.Group controlId="userName">
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control
                            value={id.name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setId({ ...id, name: event.target.value });
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={id.isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setId({ ...id, isStudent: event.target.checked });
                        }}
                    />
                </div>
            :   <div>
                    {id.isStudent ?
                        <span>{id.name} is a student</span>
                    :   <span>{id.name} is not a student</span>}
                </div>
            }
        </div>
    );
}
