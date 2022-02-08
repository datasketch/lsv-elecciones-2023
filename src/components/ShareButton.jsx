import AppButton from './AppButton';
import Tippy from '@tippyjs/react/headless';
import ShareSocialNetworks from './ShareSocialNetworks';

function ShareButton() {
  return (
    <div>
      <Tippy
        render={(attrs) => <ShareSocialNetworks {...attrs} />}
        trigger="click"
        interactive
        placement="top"
      >
        <AppButton label="Compartir" inverse />
      </Tippy>
    </div>
  );
}

export default ShareButton;
