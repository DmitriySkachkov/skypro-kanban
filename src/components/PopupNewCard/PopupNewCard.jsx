import { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
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
  Calendar,
  CalendarTitle,
  CalendarText,
  CalendarBlock,
  CalendarMonth,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarNav,
  CalendarPeriod,
  NavActions,
  NavAction,
  ErrorMessage
} from './PopupNewCard.styled';

function PopupNewCard({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Research');
  const [selectedStatus, setSelectedStatus] = useState('Без статуса');
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  const { addTask, isLoading } = useTasks();

  // Генерация календаря
  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Пн=0, Вс=6
    
    const days = [];
    
    // Пустые дни до начала месяца
    for (let i = 0; i < startingDay; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }
    
    // Дни месяца
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isToday = 
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
      
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      
      days.push({
        day: i,
        date,
        isCurrentMonth: true,
        isToday,
        isSelected
      });
    }
    
    return days;
  };

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
  if (!date) return new Date().toISOString();
  return date.toISOString();
};

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
      date: selectedDate ? formatDate(selectedDate) : formatDate(new Date()),
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
    setSelectedDate(null);
    setError('');
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  if (!isOpen) return null;

  const calendarDays = generateCalendar();

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
            
            <Calendar>
              <CalendarTitle>
                <CalendarText>
                  <Subtitle>Дата</Subtitle>
                </CalendarText>
              </CalendarTitle>
              
              <CalendarBlock>
                <CalendarNav>
                  <CalendarPeriod>
                    <CalendarMonth>
                      {monthNames[currentMonth]} {currentYear}
                    </CalendarMonth>
                  </CalendarPeriod>
                  <NavActions>
                    <NavAction onClick={handlePrevMonth}>←</NavAction>
                    <NavAction onClick={handleNextMonth}>→</NavAction>
                  </NavActions>
                </CalendarNav>
                
                <CalendarContent>
                  <CalendarDaysNames>
                    {dayNames.map((day, index) => (
                      <CalendarDayName key={index}>{day}</CalendarDayName>
                    ))}
                  </CalendarDaysNames>
                  
                  <CalendarCells>
                    {calendarDays.map((dayInfo, index) => (
                      <CalendarCell 
                        key={index}
                        $otherMonth={!dayInfo.isCurrentMonth}
                        $isDay={dayInfo.isCurrentMonth}
                        $current={dayInfo.isToday}
                        $active={dayInfo.isSelected}
                        onClick={() => dayInfo.isCurrentMonth && handleDateSelect(dayInfo.date)}
                      >
                        {dayInfo.day || ''}
                      </CalendarCell>
                    ))}
                  </CalendarCells>
                </CalendarContent>
                
                <CalendarText>
                  {selectedDate 
                    ? `Выбрана дата: ${selectedDate.toLocaleDateString('ru-RU')}`
                    : 'Выберите срок исполнения.'}
                </CalendarText>
              </CalendarBlock>
            </Calendar>
          </PopupNewCardWrap>
          
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