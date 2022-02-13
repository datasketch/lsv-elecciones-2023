function CoalitionHeader({ label, onClick = () => {} }) {
  return (
      <button
        className="flex items-center space-x-1 justify-center mx-auto"
        onClick={onClick}
      >
        <span className="uppercase text-jet font-martin text-2xl">{label}</span>
        <span className="w-4 h-4 text-white rounded-full bg-dodger-blue">
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
        </span>
      </button>

  );
}

export default CoalitionHeader;
