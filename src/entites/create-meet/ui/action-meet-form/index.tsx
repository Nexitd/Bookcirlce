import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik"
import { SlickSlider } from "widgets/slider";
import { BookCard } from "entites/books";
import { useAppSelector } from "shared/api";
import { Button, Modal } from "shared/ui";

export const ActionMeetForm = () => {
    // роут
    const { pathname } = useLocation();
    // функция редиректа
    const navigate = useNavigate();

    // тип встречи
    const [meetingType, setMeetingType] = useState<string>('');
    // флаг для отсылки уведомлений
    const [isNotes, setIsNotes] = useState<boolean>(false);
    // флаг для модалки
    const [isModalShown, setIsModalShown] = useState<boolean>(false);
    // название книги
    const [searchedBooks, setSearchedBooks] = useState<string>('');
    // карточки с книгами
    const { book_cards } = useAppSelector(state => state.book);

    return <>
        <Formik initialValues={{}} onSubmit={() => { }}>
            <Form>
                <div className="create__club_form create__meet_form">
                    <div className="club__form_item">
                        <div className="create__club_blocks">
                            <label htmlFor="title" className="create__club_title">Название встречи</label>
                            <Field id="title" name="title" />
                        </div>

                        <div className="create__club_blocks">
                            <label htmlFor="description" className="create__club_title">Описание встречи</label>
                            <Field as="textarea" name="description" col={3} rows={5} id="description" className="create__club_description" />
                        </div>
                        <div className="create__club_blocks">
                            <label htmlFor="date">Дата</label>
                            <Field id="date" name="date" type="date" />
                            <p className="create__club_subtext">
                                Дата проведения встречи в  формате ДД/ММ/ГГ
                            </p>
                        </div>
                        <div className="create__club_blocks">
                            <label htmlFor="time">Время</label>
                            <Field id="time" name="time" type="time" />
                            <p className="create__club_subtext">
                                Время проведения встречи в формате ЧЧ/ММ
                            </p>
                        </div>
                        <div className="create__club_blocks">
                            <label htmlFor="categories" className="create__club_title">{pathname.includes('book') ? "Поиск книг" : "Добавить книгу"}</label>
                            <div className="create__club_inp-block">
                                <Field
                                    name='categories'
                                    id="categories"
                                    value={searchedBooks}
                                    onChange={(e: any) => setSearchedBooks(e.target.value)}
                                />
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.93858 13 9.26801 12.5327 10.3448 11.7415L10.3439 11.7422C10.3734 11.7822 10.4062 11.8204 10.4424 11.8566L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.8566 10.4424C11.8204 10.4062 11.7822 10.3734 11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z" fill="#222222" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="club__form_item">
                        <div className="create__club_blocks">
                            <label htmlFor="meeting_type" className="create__club_title" id="checkbox-group">Тип клуба</label>
                            <div role="group" aria-labelledby="checkbox-group" className="create__club_checks" defaultValue={meetingType}>
                                <label>
                                    <Field type="radio" onChange={() => setMeetingType('online')} name="meeting_type" id="meeting_type" checked={meetingType === 'online'} />
                                    Онлайн встреча
                                </label>
                                <label>
                                    <Field type="radio" onChange={() => setMeetingType('offline')} name="meeting_type" id="meeting_type" checked={meetingType === 'offline'} />
                                    Оффлайн встреча
                                </label>
                            </div>
                        </div>

                        {/* еесли тип встречи оффлайн, рендерим это */}
                        {meetingType === "offline" &&
                            <>

                                <div className="create__club_blocks">
                                    <Field as="select" name="country" defaultValue="Россия">
                                        <option value="Россия">Россия</option>
                                    </Field>
                                    <p className="create__club_subtext">Страна</p>
                                </div>
                                <div className="create__club_blocks">
                                    <Field as="select" name="address" >
                                        <option value="Санкт-Петербург">Санкт-Петербург</option>
                                        <option value="Москва">Москва</option>
                                    </Field>
                                    <p className="create__club_subtext">Город</p>
                                </div>
                                <div className="create__club_blocks">
                                    <Field name="address" />
                                    <p className="create__club_subtext">Адрес встречи</p>
                                </div>
                            </>
                        }
                    </div>
                </div>

                <div className="create__club_blocks">
                    <SlickSlider slidesToShow={2}>
                        {/* если пользователь что-то ввел, то рендерим те книги, у которых
                        title содержит тот текст, что ввел юзер */}
                        {searchedBooks !== '' ? book_cards.map(el => {
                            if (el.title.toLowerCase().includes(searchedBooks.toLowerCase()) && searchedBooks.trim() !== '') {
                                return <BookCard onClick={() => navigate(`/books/${el.id}`)} isBtn={true} key={el.id} data={el} />
                            }
                        }) : null}
                    </SlickSlider>
                </div>
                <div className="create__club_blocks">
                    <label htmlFor="note" className="create__club_title">Уведомление участников</label>
                    <div role="group" aria-labelledby="checkbox-group" className="create__club_checks">
                        <label>
                            <Field type="checkbox" onChange={() => setIsNotes(prev => !prev)} name="note" id="note" checked={isNotes} />
                            Отправить уведомления всем участникам клуба
                        </label>
                    </div>
                </div>
                <div className="create__club_form-controls">
                    {/* если это страница редактирования рендерим эту кнопку */}
                    {pathname.includes('edit') &&
                        <div className="control__item">
                            <Button type="button" onClick={() => setIsModalShown(prev => !prev)} text="Удалить встречу" className="control__item_btn-ghost control__item_btn" />
                        </div>
                    }
                    <div className="control__item create__meet_btns">
                        <Button type="button" text=" Отменить" onClick={() => navigate(-1)} className="control__item_btn-ghost control__item_btn" />
                        <Button type="submit" text={pathname.includes('edit') ? "Сохранить" : "Создать встречу"} className="control__item_btn" />
                    </div>
                </div>
            </Form>
        </Formik>

        <Modal title="Подтвердите действие" isOpen={isModalShown} onClick={() => setIsModalShown(prev => !prev)}>
            <div className="modal__body">
                <p className="modal__text">Вы действительно хотите удалить встречу?</p>
            </div>

            <div className="modal__footer">
                <Button className="modal__footer_btn create__club-modal-ghost" text="Отмена" onClick={() => setIsModalShown(prev => !prev)} />
                <Button className="modal__footer_btn" text="Продолжить" />
            </div>
        </Modal>
    </>
}