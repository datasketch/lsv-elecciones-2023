import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../features/candidates/candidates-slice';

function FilterSearch() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      dispatch(filterBySearch(text));
    }
  };

  return (
    <input
      type="text"
      placeholder="Buscar"
      className="border border-dodger-blue text-dodger-blue text-sm placeholder:text-dodger-blue bg-no-repeat pl-8 w-full md:w-auto"
      onChange={(e) => setText(e.target.value)}
      onKeyUp={handleKeyUp}
      value={text}
      style={{
        backgroundImage:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS41OTMiIGhlaWdodD0iMjEuNTkzIiB2aWV3Qm94PSIwIDAgMjEuNTkzIDIxLjU5MyI+CiAgPGcgaWQ9IkdydXBvXzUiIGRhdGEtbmFtZT0iR3J1cG8gNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4Mi42NTYgLTgxMi40NjYpIHJvdGF0ZSg0NSkiPgogICAgPHBhdGggaWQ9IkVsaXBzZV8xIiBkYXRhLW5hbWU9IkVsaXBzZSAxIiBkPSJNNi41LTFBNy41LDcuNSwwLDEsMS0xLDYuNSw3LjUwOCw3LjUwOCwwLDAsMSw2LjUtMVptMCwxM0E1LjUsNS41LDAsMSwwLDEsNi41LDUuNTA2LDUuNTA2LDAsMCwwLDYuNSwxMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5NSAxNTYpIiBmaWxsPSIjMzM4YmZkIi8+CiAgICA8cGF0aCBpZD0iVHJhemFkb18xMiIgZGF0YS1uYW1lPSJUcmF6YWRvIDEyIiBkPSJNMTAxOC4wMzcsMTYzLjVIMTAxMHYtMmg4LjAzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yKSIgZmlsbD0iIzMzOGJmZCIvPgogIDwvZz4KPC9zdmc+Cg==")',
        backgroundSize: '1rem 1rem',
        backgroundPosition: 'left 0.75rem center',
      }}
    />
  );
}

export default FilterSearch;
