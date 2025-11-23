import { useState } from 'react';
import { GlobalStyles } from './GlobalStyles.styled';
import { StyledWrapper } from './Wrapper.styled';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Popup/Popup';

function App() {
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
      <GlobalStyles />
      <StyledWrapper className="wrapper">
        <Header onOpenPopup={openPopup} />
        <Main onOpenPopup={openPopup} />
        <Popup 
          activePopup={activePopup} 
          onClosePopup={closePopup}
          selectedCard={selectedCard}
        />
      </StyledWrapper>
    </>
  );
}

export default App;