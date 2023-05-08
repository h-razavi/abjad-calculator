import React, { useState } from "react";
import letterValues from "../helpers/AbjadValues";

type Props = {};

function Calculator({}: Props) {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState(0);

  //Get abjad value of a character based on values defined in AbjadValues file
  const getLetterValue = (letter: string): number => {
    return letterValues[letter] || 0;
  };

  //Check to see if the entered characters match the criteria
  function isFarsiOrArabicLetter(char: string): boolean {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= 0x0600 && charCode <= 0x06ff) ||
      (charCode >= 0x0750 && charCode <= 0x077f) ||
      charCode === 0x0020
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
        className="w-[80vw] md:w-[60vw] h-16 rounded-2xl px-6 py-4 text-black text-xl focus:outline outline-cyan-500 outline-8 placeholder:text-xs md:placeholder:text-xl"
        placeholder="لطفاً **فقط** از حروف فارسی یا عربی استفاده کنید"
      />
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 animate-pulse"
        >
          <path
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-8 text-8xl text-emerald-600 p-4">
          {sum}
        </p>
      </div>
    </div>
  );
}

export default Calculator;
