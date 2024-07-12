interface WrongNumbersDialogProps {
  isOpen: boolean;
  onWrongNumbersDialogCallback: (value: boolean) => void;
}

function WrongNumbersDialog({
  isOpen,
  onWrongNumbersDialogCallback,
}: WrongNumbersDialogProps) {
  const handleClose = () => {
    onWrongNumbersDialogCallback(false);
  };

  if (isOpen) {
    return (
      <dialog
        open
        className="w-64 h-64 z-10 align-middle p-8 grid justify-center border-4 border-white"
        style={{ backgroundColor: "#a5d9c8" }}
      >
        <h2 className="text-white text-3xl">❗Wrong numbers</h2>
        <p className="text-white">
          Numbers should be between 1-90 and each should be different.
        </p>
        <button
          className="mt-4 accent-white text-color text-2xl border border-white shadow"
          onClick={handleClose}
          style={{ backgroundColor: "#ffffff" }}
        >
          Close
        </button>
      </dialog>
    );
  }
  return <></>;
}

export default WrongNumbersDialog;
