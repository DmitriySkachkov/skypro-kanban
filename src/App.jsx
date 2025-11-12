import { useState } from 'react';
import { GlobalStyles } from './сommon/GlobalStyles.styled';
import { StyledWrapper } from './сommon/Wrapper.styled';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Popup/Popup';

function App() {
  const [activePopup, setActivePopup] = useState('browse'); 

  return (
    <>
      <GlobalStyles />
      <StyledWrapper className="wrapper">
        <Header onOpenPopup={setActivePopup} />
        <Main />
        <Popup activePopup={activePopup} onClosePopup={() => setActivePopup(null)} />
      </StyledWrapper>
    </>
  );
}

export default App;