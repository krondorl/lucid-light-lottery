interface WinningNumbersProps {
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
}

function WinningNumbers({
  number1,
  number2,
  number3,
  number4,
  number5,
}: Readonly<WinningNumbersProps>) {
  return (
    <div className="mt-8 container grid grid-cols-3">
      <span className="md:text-xl">Winning numbers:</span>
      <div className="col-span-2">
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green  shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          onChange={() => {}}
          value={number1}
          readOnly={true}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green  shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          onChange={() => {}}
          value={number2}
          readOnly={true}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green  shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          onChange={() => {}}
          value={number3}
          readOnly={true}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green  shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          onChange={() => {}}
          value={number4}
          readOnly={true}
        />
        <input
          className="w-8 leading-9 border mr-2 md:mr-4 border-brand-green  shadow"
          type="number"
          name=""
          id=""
          min="1"
          max="90"
          onChange={() => {}}
          value={number5}
          readOnly={true}
        />
      </div>
    </div>
  );
}

export default WinningNumbers;
