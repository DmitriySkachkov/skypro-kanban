import { useState } from 'react';
import { useTasks } from '../../useTasks';
import {
  PopupNewCardOverlay,
  PopupNewCardBlock,
  PopupNewCardContent,
  PopupNewCardTitle,
  PopupNewCardClose,
  PopupNewCardWrap,
  PopupNewCardForm,
  FormNewBlock,
  FormNewInput,
  FormNewArea,
  FormNewCreate,
  Subtitle,
  Categories,
  CategoriesText,
  CategoriesThemes,
  CategoriesTheme,
  Status,
  StatusText,
  StatusThemes,
  StatusTheme,
  ErrorMessage
} from './PopupNewCard.styled';

function PopupNewCard({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Research');
  const [selectedStatus, setSelectedStatus] = useState('Без статуса');
  const [error, setError] = useState('');
  
  const { addTask, isLoading } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!title.trim()) {
      setError('Введите название задачи');
      return;
    }

    const taskData = {
      title: title.trim(),
      topic: selectedCategory,
      status: selectedStatus,
      description: description.trim(),
      date: new Date().toISOString(),
    };

    const result = await addTask(taskData);
    
    if (result.success) {
      resetForm();
      onClose();
    } else {
      setError(result.error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSelectedCategory('Research');
    setSelectedStatus('Без статуса');
    setError('');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  if (!isOpen) return null;

  return (
    <PopupNewCardOverlay className="pop-new-card" $isOpen={isOpen}>
      <PopupNewCardBlock>
        <PopupNewCardContent>
          <PopupNewCardTitle>Создание задачи</PopupNewCardTitle>
          <PopupNewCardClose href="#" onClick={(e) => { 
            e.preventDefault(); 
            onClose(); 
            resetForm(); 
          }}>
            ✖
          </PopupNewCardClose>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <PopupNewCardWrap>
            <PopupNewCardForm id="formNewCard" onSubmit={handleSubmit}>
              <FormNewBlock>
                <Subtitle>Название задачи *</Subtitle>
                <FormNewInput 
                  type="text" 
                  name="name" 
                  id="formTitle" 
                  placeholder="Введите название задачи..." 
                  autoComplete="off"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setError('');
                  }}
                  disabled={isLoading}
                  required
                />
              </FormNewBlock>
              
              <FormNewBlock>
                <Subtitle>Описание задачи</Subtitle>
                <FormNewArea 
                  name="text" 
                  id="textArea" 
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={isLoading}
                />
              </FormNewBlock>
            </PopupNewCardForm>
            
            <Status>
              <StatusText>
                <Subtitle>Статус</Subtitle>
              </StatusText>
              <StatusThemes>
                {['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'].map((status) => (
                  <StatusTheme 
                    key={status}
                    $active={selectedStatus === status}
                    onClick={() => !isLoading && handleStatusClick(status)}
                  >
                    <div>{status}</div>
                  </StatusTheme>
                ))}
              </StatusThemes>
            </Status>
          </PopupNewCardWrap>
          
          <Categories>
            <CategoriesText>
              <Subtitle>Категория</Subtitle>
            </CategoriesText>
            <CategoriesThemes>
              {['Research', 'Web Design', 'Copywriting'].map((category) => (
                <CategoriesTheme 
                  key={category}
                  $color={category === 'Web Design' ? 'orange' : category === 'Research' ? 'green' : 'purple'}
                  $active={selectedCategory === category}
                  onClick={() => !isLoading && handleCategoryClick(category)}
                >
                  <div>{category}</div>
                </CategoriesTheme>
              ))}
            </CategoriesThemes>
          </Categories>
          
          <FormNewCreate 
            id="btnCreate" 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Создание...' : 'Создать задачу'}
          </FormNewCreate>
        </PopupNewCardContent>
      </PopupNewCardBlock>
    </PopupNewCardOverlay>
  );
}

export default PopupNewCard;