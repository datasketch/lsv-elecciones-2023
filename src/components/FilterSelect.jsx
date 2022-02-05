function FilterSelect({ id, label, options, onChange }) {
  return (
    <label htmlFor={id}>
      <p className="uppercase text-xxs">{label}</p>
      <select
        className="border border-dodger-blue text-dodger-blue text-sm"
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
