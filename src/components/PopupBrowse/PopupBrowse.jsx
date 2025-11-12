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

function PopupBrowse({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <PopupBrowseOverlay className="pop-browse" $isOpen={isOpen}>
      <PopupBrowseBlock>
        <PopupBrowseContent>
          <PopupBrowseTopBlock>
            <PopupBrowseTitle>Название задачи</PopupBrowseTitle>
            <CategoriesTheme className="theme-top" $color="orange" $active>
              <div>Web Design</div>
            </CategoriesTheme>
          </PopupBrowseTopBlock>
          
          <Status>
            <StatusText>
              <Subtitle>Статус</Subtitle>
            </StatusText>
            <StatusThemes>
              <StatusTheme $hide>
                <div>Без статуса</div>
              </StatusTheme>
              <StatusTheme $gray>
                <div>Нужно сделать</div>
              </StatusTheme>
              <StatusTheme $hide>
                <div>В работе</div>
              </StatusTheme>
              <StatusTheme $hide>
                <div>Тестирование</div>
              </StatusTheme>
              <StatusTheme $hide>
                <div>Готово</div>
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
                  value="Краткое описание задачи. Здесь будет отображаться текст описания выбранной карточки."
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
              <CategoriesTheme $color="orange" $active>
                <div>Web Design</div>
              </CategoriesTheme>
            </CategoriesThemes>
          </Categories>
          
          <PopupBrowseButtons className="pop-browse__btn-browse">
            <div className="btn-group">
              <button className="_btn-bor _hover03">
                Редактировать задачу
              </button>
              <button className="_btn-bor _hover03">
                Удалить задачу
              </button>
            </div>
            <button className="_btn-bg _hover01" onClick={onClose}>
              Закрыть
            </button>
          </PopupBrowseButtons>
        </PopupBrowseContent>
      </PopupBrowseBlock>
    </PopupBrowseOverlay>
  );
}

export default PopupBrowse;