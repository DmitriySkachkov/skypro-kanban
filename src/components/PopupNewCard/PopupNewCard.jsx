function PopupNewCard() {
  return (
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
                      <button className="nav__action" data-action="prev">‹</button>
                      <div className="calendar__month">Сентябрь 2023</div>
                      <button className="nav__action" data-action="next">›</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupNewCard