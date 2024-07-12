interface StartDialogProps {
  isOpen: boolean;
}

function StartDialog({ isOpen }: StartDialogProps) {
  if (isOpen) {
    return (
      <dialog
        open
        className="w-64 h-64 z-10 align-middle p-8 grid justify-center border-4 border-white"
        style={{ backgroundColor: "#a5d9c8" }}
      >
        <h2 className="text-white text-3xl">Starting simulation</h2>
        <p className="text-white">Please stand by...</p>
      </dialog>
    );
  }
  return <></>;
}

export default StartDialog;
