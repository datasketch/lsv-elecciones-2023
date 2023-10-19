function AppHeader() {
  return (
    <>
      <div className="max-w-md mx-auto pt-6 text-center">
        <picture>
          <source
            srcSet="/logo-elecciones-2023-desktop.svg"
            media="(min-width: 1024px)"
          />
          <img
            src="/logo-elecciones-2023.svg"
            alt="logo eleciones 2023"
          />
        </picture>
        <p className="mt-4 ">
          Escoja su región y encuentre su candidato a Alcaldía, Gobernación o Concejo.
        </p>
      </div>
      <div className="border-t-2 border-jet mt-6" />
    </>
  );
}

export default AppHeader;
