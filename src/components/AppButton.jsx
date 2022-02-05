function AppButton({ label, onClick = () => {} }) {
  return (
    <button
      className="uppercase bg-dodger-blue px-3 py-1 text-soft-white text-sm"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default AppButton;
