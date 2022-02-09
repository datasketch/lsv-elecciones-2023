import { useEffect } from 'react';
import { useState } from 'react';

function ReadMore({ text, limit = 300 }) {
  const [canReadMore, setCanReadMore] = useState(false);
  const [textWithinLimit, setTextWithinLimit] = useState(false);

  useEffect(() => {
    setTextWithinLimit(text.length <= limit);
    setCanReadMore(text.length > limit);
  }, [text, limit]);

  return (
    <>
      <p>
        {textWithinLimit
          ? text
          : canReadMore
          ? `${text.slice(0, limit)}...`
          : text}
      </p>
      {!textWithinLimit && (
        <button
          className="text-dodger-blue underline mt-2"
          onClick={() => setCanReadMore(!canReadMore)}
        >
          {canReadMore ? 'Leer más' : 'Leer menos'}
        </button>
      )}
    </>
  );
}

export default ReadMore;
