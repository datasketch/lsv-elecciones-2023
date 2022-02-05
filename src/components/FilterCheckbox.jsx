import slugify from 'slugify';

function FilterCheckbox({ label, options, name }) {
  return (
    <>
      <span className="text-dodger-blue text-xxs">{label}</span>
      <div className="flex flex-col items-start text-xs space-y-1 mt-2">
        {options.map((option) => (
          <label
            htmlFor={slugify(option)}
            key={option}
            className="flex items-center space-x-2"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              id={slugify(option)}
              className="bg-bone border-none text-dodger-blue focus:ring-offset-0 focus:ring-dodger-blue"
            />
            <span className="whitespace-nowrap">{option}</span>
          </label>
        ))}
      </div>
    </>
  );
}

export default FilterCheckbox;
