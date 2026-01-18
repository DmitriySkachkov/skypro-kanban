import { useState } from 'react';
import { useTasks } from '../../useTasks';
import {
  PopupBrowseOverlay,
  PopupBrowseBlock,
  PopupBrowseContent,
  PopupBrowseTopBlock,
  PopupBrowseTitle,
  PopupBrowseWrap,
  PopupBrowseForm,
  FormBrowseBlock,
  FormBrowseArea,
  Subtitle,
  Categories,
  CategoriesText,
  CategoriesThemes,
  CategoriesTheme,
  Status,
  StatusText,
  StatusThemes,
  StatusTheme,
  PopupBrowseButtons,
  ErrorMessage
} from './PopupBrowse.styled';

function PopupBrowse({ isOpen, onClose, cardData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');
  const [error, setError] = useState('');
  
  const { editTask, removeTask, isLoading } = useTasks();

  if (!isOpen) return null;

  const cardTitle = cardData?.title || 'Название задачи';
  const cardTopic = cardData?.topic || 'Web Design';
  const cardDescription = cardData?.description || '';
  const cardId = cardData?._id || cardData?.id;
  const currentDescription = isEditing ? editedDescription : cardDescription;

  const getThemeColor = (topic) => {
    switch (topic) {
      case 'Web Design': return 'orange';
      case 'Research': return 'green';
      case 'Copywriting': return 'purple';
      default: return 'orange';
    }
  };

  const themeColor = getThemeColor(cardTopic);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedDescription(cardDescription);
  };

  const handleSaveClick = async () => {
    if (!cardId) return;
    
    try {
      const result = await editTask(cardId, {
        ...cardData,
        description: editedDescription
      });
      
      if (result.success) {
        setIsEditing(false);
        setError('');
      } else {
        setError(result.error);
      }
    } catch {
      setError('Не удалось сохранить изменения');
    }
  };

  const handleDeleteClick = async () => {
    if (!cardId) return;
    
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      try {
        const result = await removeTask(cardId);
        if (result.success) {
          onClose();
        } else {
          setError(result.error);
        }
      } catch {
        setError('Не удалось удалить задачу');
      }
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedDescription('');
    setError('');
  };

  return (
    <PopupBrowseOverlay className="pop-browse" $isOpen={isOpen}>
      <PopupBrowseBlock>
        <PopupBrowseContent>
          <PopupBrowseTopBlock>
            <PopupBrowseTitle>{cardTitle}</PopupBrowseTitle>
            <CategoriesTheme className="theme-top" $color={themeColor} $active>
              <p>{cardTopic}</p>
            </CategoriesTheme>
          </PopupBrowseTopBlock>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <Status>
            <StatusText>
              <Subtitle>Статус: {cardData?.status || 'Без статуса'}</Subtitle>
            </StatusText>
          </Status>
          
          <PopupBrowseWrap>
            <PopupBrowseForm id="formBrowseCard">
              <FormBrowseBlock>
                <Subtitle>Описание задачи</Subtitle>
                <FormBrowseArea 
                  name="text" 
                  id="textArea01" 
                  readOnly={!isEditing}
                  placeholder="Введите описание задачи..."
                  value={currentDescription}
                  onChange={(e) => isEditing && setEditedDescription(e.target.value)}
                  disabled={isLoading}
                />
              </FormBrowseBlock>
            </PopupBrowseForm>
          </PopupBrowseWrap>
          
          <Categories className="theme-down">
            <CategoriesText>
              <Subtitle>Категория</Subtitle>
            </CategoriesText>
            <CategoriesThemes>
              <CategoriesTheme $color={themeColor} $active>
                <p>{cardTopic}</p>
              </CategoriesTheme>
            </CategoriesThemes>
          </Categories>
          
          <PopupBrowseButtons className="pop-browse__btn-browse">
            <div className="btn-group">
              {isEditing ? (
                <>
                  <button className="_btn-bg _hover01" onClick={handleSaveClick} disabled={isLoading}>
                    Сохранить
                  </button>
                  <button className="_btn-bor _hover03" onClick={handleCancelClick} disabled={isLoading}>
                    Отмена
                  </button>
                </>
              ) : (
                <>
                  <button className="_btn-bor _hover03" onClick={handleEditClick} disabled={isLoading}>
                    Редактировать задачу
                  </button>
                  <button className="_btn-bor _hover03" onClick={handleDeleteClick} disabled={isLoading}>
                    Удалить задачу
                  </button>
                </>
              )}
            </div>
            <button className="_btn-bg _hover01" onClick={onClose} disabled={isLoading}>
              Закрыть
            </button>
          </PopupBrowseButtons>
        </PopupBrowseContent>
      </PopupBrowseBlock>
    </PopupBrowseOverlay>
  );
}

export default PopupBrowse;