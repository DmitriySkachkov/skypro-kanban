import PopupExit from '../PopupExit/PopupExit';
import PopupNewCard from '../PopupNewCard/PopupNewCard';
import PopupBrowse from '../PopupBrowse/PopupBrowse';

function Popup() {
  return (
    <div className="pop-wrap">
      <PopupExit />
      <PopupNewCard />
      <PopupBrowse />
    </div>
  );
}

export default Popup;