import { useSelector } from 'react-redux';
import { selectMainCandidate } from '../features/modal/modal-slice';

function ShareSocialNetworks() {
  const candidate = useSelector(selectMainCandidate);
  const link = encodeURI(
    `${process.env.REACT_APP_PARENT_DOMAIN}/${candidate.id}`
  );
  const text = `Visita el perfil de ${candidate.fullname}`;

  return (
    <div className="grid grid-cols-5">
      <a
        href={`https://twitter.com/intent/tweet/?text=${text}&url=${link}`}
        className="w-7 h-7 inline-block p-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: '#00ACEE' }}
      >
        <img className="mx-auto max-w-full" src="/icono-twitter.svg" alt="" />
      </a>
      <a
        href={`https://facebook.com/sharer/sharer.php?u=${link}`}
        className="w-7 h-7 inline-block p-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: '#3B5998' }}
      >
        <img className="mx-auto max-w-full" src="/icono-facebook.svg" alt="" />
      </a>
      <a
        href={`https://telegram.me/share/url?text=${text}&url=${link}`}
        className="w-7 h-7 inline-block p-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: '#0088CC' }}
      >
        <img className="mx-auto max-w-full" src="/icono-telegram.svg" alt="" />
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${text}%20${link}`}
        className="w-7 h-7 inline-block p-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: '#25D366' }}
      >
        <img className="mx-auto max-w-full" src="/icono-whatsapp.svg" alt="" />
      </a>      
      <a
        href="https://www.example.com"
        className="w-7 h-7 bg-dodger-blue p-1"
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
