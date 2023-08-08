function CandidateCardModalDataDesktop(/* { candidate } */) {
  return (
    <>
      <p>Ficha de candidato</p>
      {/*
      blocks.map(([label, field, conf = {}], index) => {
        let fieldText = field && candidate[field] ? <p>{candidate[field]}</p> : null;
        let showTitle = true;
        if (conf.title) {
          showTitle = (conf.conditions || []).reduce((result, $field) => (
            result && !!candidate[$field]
          ), true);
        }
        if (conf.separator && fieldText) {
          fieldText = candidate[field].split(conf.separator).map((text) => (
            <p key={text}>{text}</p>
          ));
        }
        if (fieldText && !conf.separator && conf.readMore && conf.inline) {
          fieldText = <p>
            <a
              href={candidate[conf.readMore]}
              className="text-dodger-blue" target="_blank" rel="noopener noreferrer"
            >
              {candidate[field]}
            </a>
          </p>;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {conf.title && showTitle && (
            <h3
              className="font-martin text-2xl uppercase text-jet border-l-2 border-jet pl-2 leading-none mt-4"
            >
              {label}
            </h3>
            )}
            {!conf.title && fieldText && (
            <p className={classNames('text-dim-gray', {
              'mt-4': index > 0,
            })}
            >
              {label}
            </p>
            )}
            {fieldText}
            {conf.embed && candidate[conf.embed] && (
            <div
              className="mt-4 flex items-center justify-center"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: candidate[conf.embed],
              }}
            />
            )}
            {conf.readMore && candidate[conf.readMore] && !conf.inline && <p className="mt-2"><a href={candidate[conf.readMore]} className="text-dodger-blue" target="_blank" rel="noopener noreferrer">Saber más</a></p>}
          </React.Fragment>
        );
      })
      */}
    </>
  );
}

export default CandidateCardModalDataDesktop;
