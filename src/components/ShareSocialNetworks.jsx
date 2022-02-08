import { useSelector } from 'react-redux';
import { selectMainCandidate } from '../features/modal/modal-slice';

function ShareSocialNetworks() {
  const candidate = useSelector(selectMainCandidate);
  const link = encodeURI(
    `${process.env.REACT_APP_PARENT_DOMAIN}/${candidate.id}`
  );
  const text = `Visita el perfil de ${candidate.fullname}`;

  return (
    <div className="border border-dodger-blue bg-dodger-blue py-2 px-4 grid grid-cols-5 gap-1">
      <a
        href={`https://facebook.com/sharer/sharer.php?u=${link}`}
        className="w-5 h-5 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="mx-auto max-w-full" src="/icono-facebook.svg" alt="" />
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${text}%20${link}`}
        className="w-5 h-5 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="mx-auto max-w-full" src="/icono-whatsapp.svg" alt="" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet/?text=${text}&url=${link}`}
        className="w-5 h-5 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="mx-auto max-w-full" src="/icono-twitter.svg" alt="" />
      </a>
      <a
        href={`https://telegram.me/share/url?text=${text}&url=${link}`}
        className="w-5 h-5 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="mx-auto max-w-full" src="/icono-telegram.svg" alt="" />
      </a>
      <a
        href="https://www.example.com"
        className="w-5 h-5 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="mx-auto max-w-full" src="/icono-descarga.svg" alt="" />
      </a>
    </div>
  );
}

/**
 * `https://facebook.com/sharer/sharer.php?u=${link}`
 * https://twitter.com/intent/tweet/?text=${text}&url=${link}
 * https://api.whatsapp.com/send?text=${text}%20${link}
 * https://telegram.me/share/url?text=${text}&url=${link}
 */

export default ShareSocialNetworks;
