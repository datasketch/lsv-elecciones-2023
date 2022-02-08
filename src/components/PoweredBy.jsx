import classNames from 'classnames';

function PoweredBy({ large = false }) {
  return (
    <div className="border-r pr-2 border-dodger-blue text-right">
      <a
        href="https://www.datasketch.co"
        className="inline-block align-middle w-"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={classNames({ 'w-32': large })}
          src="/powered-by.svg"
          alt=""
        />
      </a>
    </div>
  );
}

export default PoweredBy;
