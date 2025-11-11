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
  CategoriesTheme,
  Status,
  StatusText,
  StatusThemes,
  StatusTheme,
  PopupBrowseButtons
} from './PopupBrowse.styled';

function PopupBrowse() {
  return (
    <PopupBrowseOverlay className="pop-browse" id="popBrowse" $isOpen={false}>
      <PopupBrowseBlock>
        <PopupBrowseContent>
          <PopupBrowseTopBlock>
            <PopupBrowseTitle>Название задачи</PopupBrowseTitle>
            <CategoriesTheme className="theme-top" $color="orange" $active>
              <p>Web Design</p>
            </CategoriesTheme>
          </PopupBrowseTopBlock>
          
          <Status>
            <StatusText>
              <Subtitle>Статус</Subtitle>
            </StatusText>
            <StatusThemes>
              <StatusTheme $hide>
                <p>Без статуса</p>
              </StatusTheme>
              <StatusTheme $gray>
                <p>Нужно сделать</p>
              </StatusTheme>
              <StatusTheme $hide>
                <p>В работе</p>
              </StatusTheme>
              <StatusTheme $hide>
                <p>Тестирование</p>
              </StatusTheme>
              <StatusTheme $hide>
                <p>Готово</p>
              </StatusTheme>
            </StatusThemes>
          </Status>
          
          <PopupBrowseWrap>
            <PopupBrowseForm id="formBrowseCard" action="#">
              <FormBrowseBlock>
                <Subtitle>Описание задачи</Subtitle>
                <FormBrowseArea 
                  name="text" 
                  id="textArea01" 
                  readOnly 
                  placeholder="Введите описание задачи..."
                />
              </FormBrowseBlock>
            </PopupBrowseForm>
            
            <Calendar>
              <CalendarTitle>
                <Subtitle>Даты</Subtitle>
              </CalendarTitle>
              <CalendarBlock>
                <CalendarNav>
                  <CalendarPeriod>
                    <CalendarText>
                      Срок исполнения: <span className="date-control">09.09.23</span>
                    </CalendarText>
                  </CalendarPeriod>
                  <NavActions>
                    <NavAction data-action="prev">‹</NavAction>
                    <CalendarMonth>Сентябрь 2023</CalendarMonth>
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
                    <CalendarCell $isDay $active>3</CalendarCell>
                    {/* ... остальные дни */}
                  </CalendarCells>
                </CalendarContent>
              </CalendarBlock>
            </Calendar>
          </PopupBrowseWrap>
          
          <Categories className="theme-down">
            <CategoriesText>
              <Subtitle>Категория</Subtitle>
            </CategoriesText>
            <CategoriesThemes>
              <CategoriesTheme $color="orange" $active>
                <p>Web Design</p>
              </CategoriesTheme>
            </CategoriesThemes>
          </Categories>
          
          <PopupBrowseButtons className="pop-browse__btn-browse">
            <div className="btn-group">
              <button className="_btn-bor _hover03">
                <a href="#">Редактировать задачу</a>
              </button>
              <button className="_btn-bor _hover03">
                <a href="#">Удалить задачу</a>
              </button>
            </div>
            <button className="_btn-bg _hover01">
              <a href="#">Закрыть</a>
            </button>
          </PopupBrowseButtons>
        </PopupBrowseContent>
      </PopupBrowseBlock>
    </PopupBrowseOverlay>
  );
}

export default PopupBrowse;