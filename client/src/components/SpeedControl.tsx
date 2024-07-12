import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SpeedControlProps {
  onRangeChange: (value: number) => void;
}

function SpeedControl({ onRangeChange }: SpeedControlProps) {
  const [rangeValue, setRangeValue] = useState(500);

  // Debounce callback
  const debounced = useDebouncedCallback(
    (rangeValue) => {
      setRangeValue(rangeValue);
      onRangeChange(rangeValue);
    },
    // delay in ms
    200
  );

  return (
    <div className="mt-4">
      <span className="md:text-xl">Speed</span>
      <div className="speed-container">
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          className="w-full h-2 cursor-pointer dark:bg-red-700"
          id="myRange"
          onChange={(e) => debounced(e.target.value)}
          value={rangeValue}
        />
      </div>
    </div>
  );
}

export default SpeedControl;
