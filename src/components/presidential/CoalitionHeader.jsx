function CoalitionHeader({ label, onClick = () => {} }) {
  return (
    <p className="uppercase text-jet font-martin text-2xl flex items-center space-x-1 justify-center">
      <span>{label}</span>
      <button
        className="bg-dodger-blue rounded-full w-4 h-4 text-white"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </p>
  );
}

export default CoalitionHeader;
