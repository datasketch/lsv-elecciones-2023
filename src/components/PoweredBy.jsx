function PoweredBy({ large = false }) {
  return (
    <div className="grid grid-cols-2 max-w-sm mx-auto md:ml-auto md:mr-0">
      <div className='border-r border-r-jet pr-4 md:pr-6'>
        <img className='max-w-full' src="/bancolombia.png" alt="" />
      </div>
      <div className='pl-4 md:pl-6'>
        <a
          href="https://www.datasketch.co"
          className="inline-block align-middle w-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className='w-36'
            src="/powered-by.svg"
            alt=""
          />
        </a>
      </div>
      <p className='text-xs text-center pr-4 md:pr-6'>Bancolombia apoyó esta herramienta educativa con fines pedagógicos para que los ciudadanos voten informados. Ésta no representa una posición institucional.</p>
    </div>
  );
}

export default PoweredBy;
