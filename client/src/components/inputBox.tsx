import React, { useState } from "react";

const InputBox = ({onInputChange, placeHolder, defaultValue} : {onInputChange:any, placeHolder:string, defaultValue:string}) => {
    const [inputValue, setInputValue] = useState(defaultValue || "");

    const handleInputChange = (e:any) => {
        const value = e.target.value;
        setInputValue(value);
        onInputChange(value); // Calls the callback function with input value
    };
    return (
        <input
            type="text"
            placeholder={placeHolder}
            style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc", // Added border
                outline: "none",
                backgroundColor: "#fff", // Changed background color to white
                color: "#333",
                fontSize: "16px",
                width: "295px",
            }}
            value={inputValue} // Set input value from state
            onChange={handleInputChange} 
        />
    )
}

export default InputBox