import { GlobalStyles } from './styles/GlobalStyles.styled';
import { StyledWrapper } from './components/Wrapper/Wrapper.styled';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Popup from './components/Popup/Popup'; // Временно закомментировать

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledWrapper className="wrapper">
        <Header />
        <Main />
        {/* <Popup /> */} {/* Временно закомментировать */}
      </StyledWrapper>
    </>
  );
}

export default App;