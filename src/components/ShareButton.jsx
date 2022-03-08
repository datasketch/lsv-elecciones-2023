import Tippy from '@tippyjs/react/headless';
import AppButton from './AppButton';
import ShareSocialNetworks from './ShareSocialNetworks';

function ShareButton() {
  return (
    <div>
      <Tippy
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={(attrs) => <ShareSocialNetworks {...attrs} />}
        trigger="click"
        interactive
        placement="top"
      >
        <AppButton label="Compartir" inverse full />
      </Tippy>
    </div>
  );
}

export default ShareButton;
