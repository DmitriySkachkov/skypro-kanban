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

function PopupBrowse({ isOpen, onClose, cardData }) {
  if (!isOpen) return null;

  const cardTitle = cardData?.title || 'Название задачи';
  const cardTopic = cardData?.topic || 'Web Design';
  const cardDescription = cardData?.description || 'Описание задачи. Здесь будет отображаться текст описания выбранной карточки.';
  const cardDate = cardData?.date || '30.10.23';

  const getThemeColor = (topic) => {
    switch (topic) {
      case 'Web Design': return 'orange';
      case 'Research': return 'green';
      case 'Copywriting': return 'purple';
      default: return 'orange';
    }
  };

  const themeColor = getThemeColor(cardTopic);

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
                  value={cardDescription}
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
                      Срок исполнения: <span className="date-control">{cardDate}</span>
                    </CalendarText>
                  </CalendarPeriod>
                  <NavActions>
                    <NavAction>‹</NavAction>
                    <CalendarMonth>Сентябрь 2023</CalendarMonth>
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
                    <CalendarCell $isDay $active>3</CalendarCell>
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
              </CalendarBlock>
            </Calendar>
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
              <button className="_btn-bor _hover03">
                <a href="#">Редактировать задачу</a>
              </button>
              <button className="_btn-bor _hover03">
                <a href="#">Удалить задачу</a>
              </button>
            </div>
            <button className="_btn-bg _hover01" onClick={onClose}>
              <a href="#">Закрыть</a>
            </button>
          </PopupBrowseButtons>
        </PopupBrowseContent>
      </PopupBrowseBlock>
    </PopupBrowseOverlay>
  );
}

export default PopupBrowse;