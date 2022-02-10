import { useEffect } from 'react';
import { useState } from 'react';

function ReadMore({ text, limit = 300 }) {
  const [canReadMore, setCanReadMore] = useState(false);
  const [textWithinLimit, setTextWithinLimit] = useState(false);
  const [textTrimmed, setTextTrimmed] = useState('');

  useEffect(() => {
    setTextWithinLimit(text.length <= limit);
    setCanReadMore(text.length > limit);
    if (!textWithinLimit) {
      const trimmed = text.slice(0, limit);
      setTextTrimmed(
        trimmed.slice(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))
      );
    }
  }, [text, limit, textWithinLimit]);

  return (
    <>
      <p>{textWithinLimit ? text : canReadMore ? `${textTrimmed}...` : text}</p>
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
