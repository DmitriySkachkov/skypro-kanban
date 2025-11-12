import { LoadingContainer, LoadingText } from './Loading.styled';

function Loading() {
  return (
    <LoadingContainer className="loading">
      <LoadingText>Данные загружаются...</LoadingText>
    </LoadingContainer>
  );
}

export default Loading;