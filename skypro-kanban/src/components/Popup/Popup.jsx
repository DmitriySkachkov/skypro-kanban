import './Popup.css'

function Popup() {
  return (
    <div className="pop-wrap">
      {/* Попап выхода */}
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes">
                  Да, выйти
                </button>
                <button className="pop-exit__exit-no _hover01" id="exitNo">
                  Нет, остаться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Попап создания новой карточки */}
      <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
          <div className="pop-new-card__block">
            <div className="pop-new-card__content">
              <h3 className="pop-new-card__ttl">Создание задачи</h3>
              <a href="#" className="pop-new-card__close">✖</a>
              <div className="pop-new-card__wrap">
                <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                  <div className="form-new__block">
                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                    <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoComplete="off" />
                  </div>
                  <div className="form-new__block">
                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                    <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></textarea>
                  </div>
                </form>
                <div className="pop-new-card__calendar calendar">
                  <div className="calendar__ttl subttl">Даты</div>
                  <div className="calendar__block">
                    <div className="calendar__nav">
                      <div className="calendar__period">
                        <p className="calendar__p date-end">Срок исполнения: <span className="date-control">20.10.23</span></p>
                      </div>
                      <div className="nav__actions">
                        <button className="nav__action nav__action-prev" id="btnPrev">&#10094;</button>
                        <p className="calendar__month">Сентябрь 2023</p>
                        <button className="nav__action nav__action-next" id="btnNext">&#10095;</button>
                      </div>
                    </div>
                    <div className="calendar__content">
                      <div className="calendar__days-names">
                        <div className="calendar__day-name">пн</div>
                        <div className="calendar__day-name">вт</div>
                        <div className="calendar__day-name">ср</div>
                        <div className="calendar__day-name">чт</div>
                        <div className="calendar__day-name">пт</div>
                        <div className="calendar__day-name">сб</div>
                        <div className="calendar__day-name">вс</div>
                      </div>
                      <div className="calendar__cells" id="cells"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div className="categories__theme _orange _active-category">
                    <p>Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p>Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p>Copywriting</p>
                  </div>
                </div>
              </div>
              <button className="form-new__create _btn-bg" id="btnCreate">Создать задачу</button>
              <button className="form-new__create _btn-bor" id="btnClose">Отменить</button>
            </div>
          </div>
        </div>
      </div>

      {/* Попап просмотра карточки */}
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">Название задачи</h3>
                <div className="categories__theme _orange _active-category theme-top">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div className="pop-browse__wrap">
                <div className="pop-browse__form">
                  <div className="pop-browse__form-browse form-browse">
                    <div className="form-browse__block">
                      <label htmlFor="textArea" className="subttl">Описание задачи</label>
                      <textarea className="form-browse__area" name="text" id="textArea" readOnly placeholder="Введите описание задачи..."></textarea>
                    </div>
                  </div>
                </div>
                <div className="pop-browse__calendar calendar">
                  <div className="calendar__ttl subttl">Даты</div>
                  <div className="calendar__block">
                    <div className="calendar__nav">
                      <div className="calendar__period">
                        <p className="calendar__p date-end">Срок исполнения: <span className="date-control">20.10.23</span></p>
                      </div>
                      <div className="nav__actions">
                        <button className="nav__action nav__action-prev" id="btnPrev">&#10094;</button>
                        <p className="calendar__month">Сентябрь 2023</p>
                        <button className="nav__action nav__action-next" id="btnNext">&#10095;</button>
                      </div>
                    </div>
                    <div className="calendar__content">
                      <div className="calendar__days-names">
                        <div className="calendar__day-name">пн</div>
                        <div className="calendar__day-name">вт</div>
                        <div className="calendar__day-name">ср</div>
                        <div className="calendar__day-name">чт</div>
                        <div className="calendar__day-name">пт</div>
                        <div className="calendar__day-name">сб</div>
                        <div className="calendar__day-name">вс</div>
                      </div>
                      <div className="calendar__cells" id="cells"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div className="categories__theme _orange _active-category">
                    <p>Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p>Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p>Copywriting</p>
                  </div>
                </div>
              </div>
              <div className="status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div className="status__theme _gray">
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme">
                    <p>Нужно сделать</p>
                  </div>
                  <div className="status__theme">
                    <p>В работе</p>
                  </div>
                  <div className="status__theme">
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme">
                    <p>Готово</p>
                  </div>
                </div>
              </div>
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button className="btn-edit _btn-bor _hover03" id="btnEdit">
                    Редактировать
                  </button>
                  <button className="btn-delete _btn-bor _hover03" id="btnDelete">
                    Удалить
                  </button>
                </div>
                <button className="btn-close _btn-bg _hover03" id="btnClose">
                  Закрыть
                </button>
              </div>
              <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <button className="btn-save _btn-bg _hover03" id="btnSave">
                    Сохранить
                  </button>
                  <button className="btn-cancel _btn-bor _hover03" id="btnCancel">
                    Отменить
                  </button>
                </div>
                <button className="btn-close _btn-bg _hover03" id="btnClose">
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup