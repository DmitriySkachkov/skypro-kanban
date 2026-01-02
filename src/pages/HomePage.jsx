import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Popup from '../components/Popup/Popup';
import { useState } from 'react';

function HomePage() {
  const [activePopup, setActivePopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (popupName, cardData = null) => {
    setActivePopup(popupName);
    setSelectedCard(cardData);
  };

  const closePopup = () => {
    setActivePopup(null);
    setSelectedCard(null);
  };

  return (
    <>
      <Header onOpenPopup={openPopup} /> {}
      <Main onOpenPopup={openPopup} />
      <Popup 
        activePopup={activePopup} 
        onClosePopup={closePopup}
        selectedCard={selectedCard}
      />
    </>
  );
}

export default HomePage;