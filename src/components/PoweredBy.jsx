function PoweredBy() {
  return (
    <div className="grid grid-cols-2 w-full max-w-sm mx-auto md:ml-auto md:mr-0 gap-y-2">
      <div className="border-r border-r-jet pr-4 md:pr-6">
        <img
          className="max-w-full align-middle"
          src="/bancolombia.png"
          alt=""
        />
      </div>
      <div className="pl-4 md:pl-6">
        <a
          href="https://www.datasketch.co?utm_source=la-silla-vacia&utm_medium=elecciones-2022-app&utm_campaign=la-silla-vacia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-36" src="/powered-by.svg" alt="" />
        </a>
      </div>
      <p className="text-xxs text-center pr-4 md:pr-6 col-span-2">
        Escogimos a todas las cabezas de lista, los repitentes y a los que,
        de acuerdo con entrevistas a políticos y periodistas locales,
        tienen una revelancia especial por su trayectoria o su origen político.
      </p>
    </div>
  );
}

export default PoweredBy;
