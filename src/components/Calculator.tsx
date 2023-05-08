import React, { useState } from "react";
import letterValues from "../helpers/AbjadValues";

type Props = {};

function Calculator({}: Props) {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState(0);

  //Get abjad value of a character based on values defined in AbjadValues
  const getLetterValue = (letter: string): number => {
    return letterValues[letter] || 0;
  };

  //Check to see if the entered characters match the criteria
  function isFarsiOrArabicLetter(char: string): boolean {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= 0x0600 && charCode <= 0x06ff) ||
      (charCode >= 0x0750 && charCode <= 0x077f) ||
      (charCode === 0x0020)
    );
  }

  //Control the input behavior of the calculator.  If the entered characters match the criteria, the sum is incremented.  Otherwise, the sum the key down action will not be recorded

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isFarsiOrArabicLetter(event.key) && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  const calculateSum = (input: string): number => {
    let sum = 0;
    for (const char of input) {
      sum += getLetterValue(char);
    }
    return sum;
  };

  //Get the input value and put it into Sum state.

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setSum(calculateSum(inputValue));
  };



  return (
    <div className="flex flex-col items-center" dir="rtl">
      <input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className="w-[80vw] md:w-[60vw] h-16 rounded-2xl px-6 py-4 text-black text-xl focus:outline outline-cyan-500 outline-8"
        placeholder="لطفاً **فقط** از حروف فارسی یا عربی استفاده کنید"
      />
      <p className="outline outline-green-300 text-green-300 rounded-full w-36 h-36 text-center m-8 text-8xl flex items-center ">
        {sum}
      </p>
    </div>
  );
}

export default Calculator;
