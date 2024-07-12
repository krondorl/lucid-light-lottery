/*!
 * Lucid Light Lottery
 *
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

import { ChangeEvent, useState } from "react";

interface ChildProps {
  onInputChange: (data: ChildData) => void;
  readOnly: boolean;
}

interface ChildData {
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
}

function YourNumbers({ onInputChange, readOnly }: ChildProps) {
  const [inputs, setInputs] = useState<ChildData>({
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
    number5: 5,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (readOnly) {
      return; // Do not update inputs if in read-only mode
    }

    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    onInputChange(inputs);
  };

  return (
    <div className="mt-8 container grid grid-cols-3">
      <span className="md:text-xl">Your numbers:</span>
      <div className="col-span-2">
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          value={inputs.number1}
          readOnly={readOnly}
          onChange={handleChange}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          value={inputs.number2}
          readOnly={readOnly}
          onChange={handleChange}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          value={inputs.number3}
          readOnly={readOnly}
          onChange={handleChange}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          value={inputs.number4}
          readOnly={readOnly}
          onChange={handleChange}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          value={inputs.number5}
          readOnly={readOnly}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default YourNumbers;
