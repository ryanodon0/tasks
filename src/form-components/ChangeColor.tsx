import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    let colors: string[] = [
        "Red",
        "Blue",
        "Green",
        "Orange",
        "Pink",
        "Yellow",
        "Grey",
        "Purple",
    ];
    return (
        <div>
            <div>
                <h3>Change Color</h3>
                {colors.map((colorValue: string) => (
                    <Form.Check
                        inline
                        key={colorValue.toLowerCase()}
                        name={colorValue.toLowerCase()}
                        type="radio"
                        label={colorValue}
                        onChange={() => {
                            setColor(colorValue);
                        }}
                        value={colorValue}
                        checked={color === colorValue}
                        style={{ backgroundColor: colorValue }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "80px",
                    height: "30px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                }}
            >
                {color}
            </div>
        </div>
    );
}
