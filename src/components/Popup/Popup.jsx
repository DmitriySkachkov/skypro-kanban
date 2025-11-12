import PopupExit from '../PopupExit/PopupExit';
import PopupNewCard from '../PopupNewCard/PopupNewCard';
import PopupBrowse from '../PopupBrowse/PopupBrowse';

function Popup({ activePopup, onClosePopup }) {
  return (
    <div className="pop-wrap">
      <PopupExit 
        isOpen={activePopup === 'exit'} 
        onClose={onClosePopup} 
      />
      <PopupNewCard 
        isOpen={activePopup === 'newCard'} 
        onClose={onClosePopup} 
      />
      <PopupBrowse 
        isOpen={activePopup === 'browse'} 
        onClose={onClosePopup} 
      />
    </div>
  );
}

export default Popup;