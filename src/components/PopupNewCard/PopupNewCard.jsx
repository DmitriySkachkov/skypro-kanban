import { useState } from 'react';
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
  Categories,
  CategoriesText,
  CategoriesThemes,
  CategoriesTheme
} from './PopupNewCard.styled';

function PopupNewCard({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('orange');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Создана новая карточка:', { title, description, category: selectedCategory });
    onClose();
    setTitle('');
    setDescription('');
    setSelectedCategory('orange');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (!isOpen) return null;

  return (
    <PopupNewCardOverlay className="pop-new-card" $isOpen={isOpen}>
      <PopupNewCardBlock>
        <PopupNewCardContent>
          <PopupNewCardTitle>Создание задачи</PopupNewCardTitle>
          <PopupNewCardClose href="#" onClick={(e) => { e.preventDefault(); onClose(); }}>
            ✖
          </PopupNewCardClose>
          <PopupNewCardWrap>
            <PopupNewCardForm id="formNewCard" onSubmit={handleSubmit}>
              <FormNewBlock>
                <Subtitle>Название задачи</Subtitle>
                <FormNewInput 
                  type="text" 
                  name="name" 
                  id="formTitle" 
                  placeholder="Введите название задачи..." 
                  autoComplete="off"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                />
              </FormNewBlock>
            </PopupNewCardForm>
            <Calendar>
              <CalendarTitle>
                <Subtitle>Даты</Subtitle>
              </CalendarTitle>
              <CalendarBlock>
                <CalendarNav>
                  <CalendarMonth>Сентябрь 2023</CalendarMonth>
                  <NavActions>
                    <NavAction>‹</NavAction>
                    <NavAction>›</NavAction>
                  </NavActions>
                </CalendarNav>
                <CalendarContent>
                  <CalendarDaysNames>
                    <CalendarDayName>пн</CalendarDayName>
                    <CalendarDayName>вт</CalendarDayName>
                    <CalendarDayName>ср</CalendarDayName>
                    <CalendarDayName>чт</CalendarDayName>
                    <CalendarDayName>пт</CalendarDayName>
                    <CalendarDayName>сб</CalendarDayName>
                    <CalendarDayName>вс</CalendarDayName>
                  </CalendarDaysNames>
                  <CalendarCells>
                    <CalendarCell $otherMonth>28</CalendarCell>
                    <CalendarCell $otherMonth>29</CalendarCell>
                    <CalendarCell $otherMonth>30</CalendarCell>
                    <CalendarCell $isDay>1</CalendarCell>
                    <CalendarCell $isDay $current>2</CalendarCell>
                    <CalendarCell $isDay>3</CalendarCell>
                    <CalendarCell $isDay>4</CalendarCell>
                    <CalendarCell $isDay>5</CalendarCell>
                    <CalendarCell $isDay>6</CalendarCell>
                    <CalendarCell $isDay>7</CalendarCell>
                    <CalendarCell $isDay>8</CalendarCell>
                    <CalendarCell $isDay>9</CalendarCell>
                    <CalendarCell $isDay>10</CalendarCell>
                    <CalendarCell $isDay>11</CalendarCell>
                    <CalendarCell $isDay>12</CalendarCell>
                    <CalendarCell $isDay>13</CalendarCell>
                    <CalendarCell $isDay>14</CalendarCell>
                    <CalendarCell $isDay>15</CalendarCell>
                    <CalendarCell $isDay>16</CalendarCell>
                    <CalendarCell $isDay>17</CalendarCell>
                    <CalendarCell $isDay>18</CalendarCell>
                    <CalendarCell $isDay>19</CalendarCell>
                    <CalendarCell $isDay>20</CalendarCell>
                    <CalendarCell $isDay>21</CalendarCell>
                    <CalendarCell $isDay>22</CalendarCell>
                    <CalendarCell $isDay>23</CalendarCell>
                    <CalendarCell $isDay>24</CalendarCell>
                    <CalendarCell $isDay>25</CalendarCell>
                    <CalendarCell $isDay>26</CalendarCell>
                    <CalendarCell $isDay>27</CalendarCell>
                    <CalendarCell $isDay>28</CalendarCell>
                    <CalendarCell $isDay>29</CalendarCell>
                    <CalendarCell $isDay>30</CalendarCell>
                  </CalendarCells>
                </CalendarContent>
                <CalendarPeriod>
                  <CalendarText>
                    Выберите срок исполнения <span className="date-control"></span>.
                  </CalendarText>
                </CalendarPeriod>
              </CalendarBlock>
            </Calendar>
          </PopupNewCardWrap>
          <Categories>
            <CategoriesText>
              <Subtitle>Категория</Subtitle>
            </CategoriesText>
            <CategoriesThemes>
              <CategoriesTheme 
                $color="orange" 
                $active={selectedCategory === 'orange'}
                onClick={() => handleCategoryClick('orange')}
              >
                <p>Web Design</p>
              </CategoriesTheme>
              <CategoriesTheme 
                $color="green"
                $active={selectedCategory === 'green'}
                onClick={() => handleCategoryClick('green')}
              >
                <p>Research</p>
              </CategoriesTheme>
              <CategoriesTheme 
                $color="purple"
                $active={selectedCategory === 'purple'}
                onClick={() => handleCategoryClick('purple')}
              >
                <p>Copywriting</p>
              </CategoriesTheme>
            </CategoriesThemes>
          </Categories>
          <FormNewCreate id="btnCreate" onClick={handleSubmit}>
            Создать задачу
          </FormNewCreate>
        </PopupNewCardContent>
      </PopupNewCardBlock>
    </PopupNewCardOverlay>
  );
}

export default PopupNewCard;