import { useState } from 'react';
import { createTask } from '../../services/tasks-api';
import {
  // ... все импорты стилей
} from './PopupNewCard.styled';

function PopupNewCard({ isOpen, onClose, onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Research');
  const [selectedStatus, setSelectedStatus] = useState('Без статуса');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!title.trim()) {
      setError('Введите название задачи');
      return;
    }

    setIsLoading(true);

    try {
      const taskData = {
        title: title.trim(),
        topic: selectedCategory,
        status: selectedStatus,
        description: description.trim(),
        date: selectedDate,
      };

      const result = await createTask(taskData);
      
      if (onTaskCreated) {
        onTaskCreated(result.tasks);
      }
      
      resetForm();
      onClose();
    } catch (error) {
      setError(error.message || 'Не удалось создать задачу');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSelectedCategory('Research');
    setSelectedStatus('Без статуса');
    setSelectedDate(new Date().toISOString());
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
          <PopupNewCardClose href="#" onClick={(e) => { e.preventDefault(); onClose(); resetForm(); }}>
            ✖
          </PopupNewCardClose>
          
          {error && (
            <ErrorMessage>{error}</ErrorMessage>
          )}
          
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
              
              <FormNewBlock>
                <Subtitle>Статус</Subtitle>
                <StatusThemes>
                  {['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'].map((status) => (
                    <StatusTheme 
                      key={status}
                      $active={selectedStatus === status}
                      onClick={() => !isLoading && handleStatusClick(status)}
                    >
                      {status}
                    </StatusTheme>
                  ))}
                </StatusThemes>
              </FormNewBlock>
            </PopupNewCardForm>
            
            {/* Календарь и категории остаются без изменений */}
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