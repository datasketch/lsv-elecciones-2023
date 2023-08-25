// eslint-disable-next-line import/no-extraneous-dependencies
import slugify from 'slugify';

function FilterCheckbox({ label, options, name }) {
  return (
    <>
      <p className="text-dodger-blue text-xxs font-bold leading-tight">{label}</p>
      <div className="flex flex-col items-start text-xs space-y-1 mt-2">
        {options.map((option) => (
          <label
            htmlFor={`${slugify(label)}-${slugify(option)}`}
            key={option}
            className="flex items-center space-x-2"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              id={`${slugify(label)}-${slugify(option)}`}
              className="bg-bone border-none text-dodger-blue focus:ring-offset-0 focus:ring-dodger-blue"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </>
  );
}

export default FilterCheckbox;
