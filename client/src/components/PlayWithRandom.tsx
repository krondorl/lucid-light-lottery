/*!
 * Lucid Light Lottery
 *
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

import { ChangeEvent, useState } from "react";

interface ChildComponentProps {
  onCheckboxChange: (isChecked: boolean) => void;
}

function PlayWithRandom({ onCheckboxChange }: ChildComponentProps) {
  const [isCheckedLocal, setIsCheckedLocal] = useState(false);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onCheckboxChange(isChecked);
    setIsCheckedLocal(true);
  };
  return (
    <div className="mt-6 container grid grid-cols-2">
      <span className="md:text-xl">Play with random numbers:</span>
      <div>
        <input
          className="ml-6 accent-white w-8 h-8 text-2xl border border-brand-indigo shadow"
          type="checkbox"
          name=""
          id=""
          onChange={handleCheckboxChange}
          disabled={isCheckedLocal}
        />
      </div>
    </div>
  );
}

export default PlayWithRandom;
