function FilterSelect({ id, label, options, onChange, className }) {
  return (
    <label htmlFor={id} className={className}>
      <p className="uppercase text-xxs">{label}</p>
      <select
        className="border border-dodger-blue text-dodger-blue text-sm w-full"
        onChange={onChange}
        id={id}
      >
        <option value="">Todos</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FilterSelect;
