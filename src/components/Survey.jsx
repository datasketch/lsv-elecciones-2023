function Survey() {
  return (
    <>
      <iframe src="https://flo.uri.sh/story/1505796/embed" title="Interactive or visual content" className="flourish-embed-iframe" frameBorder="0" scrolling="no" style={{ width: '100%', height: '600px' }} sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" />
      <div style={{ width: '100%!', marginTop: '4px!important', textAlign: 'right!important' }}>
        <a className="flourish-credit" href="https://public.flourish.studio/story/1505796/?utm_source=embed&utm_campaign=story/1505796" target="_top" style={{ textDecoration: 'none!important' }}>
          <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style={{
              width: '105px!important', height: '16px!important', border: 'none!important', margin: '0!important',
            }}
          />
          {' '}
        </a>
      </div>
      <div className="mt-6 space-y-6 px-4 py-4 max-w-4xl mx-auto">
        <p>
          El Ponderador de encuestas de La Silla Vacía utiliza como base el puntaje del
          {' '}
          <a href="https://www.lasillavacia.com/historias/silla-nacional/el-semaforo-de-las-encuestadoras-actualizado-de-cara-a-primera-vuelta/" target="_blank" rel="noreferrer">Semáforo de encuestadoras</a>
          ,
          {' '}
          que califica de 0 a 10 las casas encuestadoras según su metodología y
          {' '}
          capacidad de acercarse a los resultados electorales(
          <a href="https://docs.google.com/spreadsheets/d/17Ss1gOGErFasLRXoD7hzrMozq3NothrLjX-Z5NhUotE/edit" target="_blank" rel="noreferrer">acá</a>
          {' '}
          puede revisar
          {' '}
          la base de datos con todas las encuestas).
        </p>
        <img className="max-w-full mx-auto" src="/semaforo.png" alt="" />
        <p>
          Este Ponderador reúne las encuestas publicadas después de las consultas
          {' '}
          por cercanía temporal, en etapas u olas, bajo la lógica de que cada
          {' '}
          encuesta es una foto de la opinión en un momento, y busca construir
          {' '}
          cada momento con dos o más mediciones. Luego hace un promedio, dándole
          {' '}
          a cada medición un peso relativo igual a la valoración que obtuvo la
          {' '}
          encuestadora en el Semáforo.
        </p>
        <p>
          Para dar un ejemplo, el ponderador agrupa en el momento &ldquo;mediados de
          {' '}
          abril&rdquo; a dos mediciones, una de Celag y otra del Centro Nacional de
          {' '}
          Consultoría. Celag obtuvo 5 puntos sobre 10 en nuestro semáforo y el
          {' '}
          CNC sacó 8,6. Así, promediamos las dos dándole a Celag un peso de 5 y
          {' '}
          al CNC uno de 8,6.
        </p>
        <p>Como promedio ponderado, este ejercicio no es un pronóstico electoral.</p>
      </div>
    </>
  );
}

export default Survey;
