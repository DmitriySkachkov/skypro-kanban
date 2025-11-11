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

function PopupNewCard() {
  return (
    <PopupNewCardOverlay className="pop-new-card" id="popNewCard" $isOpen={false}>
      <PopupNewCardBlock>
        <PopupNewCardContent>
          <PopupNewCardTitle>Создание задачи</PopupNewCardTitle>
          <PopupNewCardClose href="#">✖</PopupNewCardClose>
          <PopupNewCardWrap>
            <PopupNewCardForm id="formNewCard" action="#">
              <FormNewBlock>
                <Subtitle>Название задачи</Subtitle>
                <FormNewInput 
                  type="text" 
                  name="name" 
                  id="formTitle" 
                  placeholder="Введите название задачи..." 
                  autoComplete="off" 
                />
              </FormNewBlock>
              <FormNewBlock>
                <Subtitle>Описание задачи</Subtitle>
                <FormNewArea 
                  name="text" 
                  id="textArea" 
                  placeholder="Введите описание задачи..."
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
                    <NavAction data-action="prev">‹</NavAction>
                    <NavAction data-action="next">›</NavAction>
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
                    {/* Пример календарных ячеек */}
                    <CalendarCell $otherMonth>28</CalendarCell>
                    <CalendarCell $otherMonth>29</CalendarCell>
                    <CalendarCell $otherMonth>30</CalendarCell>
                    <CalendarCell $isDay>1</CalendarCell>
                    <CalendarCell $isDay $current>2</CalendarCell>
                    <CalendarCell $isDay>3</CalendarCell>
                    {/* ... остальные дни */}
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
              <CategoriesTheme $color="orange" $active>
                <p>Web Design</p>
              </CategoriesTheme>
              <CategoriesTheme $color="green">
                <p>Research</p>
              </CategoriesTheme>
              <CategoriesTheme $color="purple">
                <p>Copywriting</p>
              </CategoriesTheme>
            </CategoriesThemes>
          </Categories>
          <FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
        </PopupNewCardContent>
      </PopupNewCardBlock>
    </PopupNewCardOverlay>
  );
}

export default PopupNewCard;