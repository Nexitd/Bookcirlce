import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Field, Form, Formik } from "formik"
import { SlickSlider } from "widgets/slider";
import { BookCard } from "entites/books";
import { useAppSelector } from "shared/api";
import { Button } from "shared/ui";

export const CreateBookForm = () => {
    // роут
    const { pathname } = useLocation();
    // редирект функция
    const navigate = useNavigate()
    // объекты карточки книги
    const { book_cards } = useAppSelector(state => state.book);
    // название книги
    const [searchedBooks, setSearchedBooks] = useState<string>('');
    // отсылать уведомления всем юзерам или нет
    const [isNotes, setIsNotes] = useState<boolean>(false);

    return <Formik initialValues={{}} onSubmit={() => { }}>
        <Form>
            <div className="club__form create__book_form">
                <div className="club__form_item">
                    {/* если роут с книгой рендерм эти поля */}
                    {pathname.includes("book") ?
                        <>
                            <div className="create__club_blocks">
                                <label htmlFor="book_filter" className="create__club_title" id="checkbox-group">Категория</label>
                                <div role="group" aria-labelledby="checkbox-group" className="create__club_checks" >
                                    <label>
                                        <Field type="checkbox" name="book_filter" id="book_filter" value="present" />
                                        Читаем сейчас
                                    </label>
                                    <label>
                                        <Field type="checkbox" name="book_filter" id="book_filter" value="future" />
                                        Планируем читать
                                    </label>
                                </div>
                            </div>

                            <div className="create__club_blocks">
                                <label htmlFor="birth_date" className="create__club_title">Дата</label>
                                <Field id="birth_date" name="birth_date" type="date" />
                                <p className="settings__form_subtext">
                                    Месяц в котором вы читаете книгу в формате ММ/ГГ
                                </p>
                            </div>
                        </>
                        // иначе эти
                        : <>
                            <div className="create__club_blocks">
                                <label htmlFor="title" className="create__club_title" id="title">Название обсуждения</label>
                                <Field id="title" name="title" />
                            </div>

                            <div className="create__club_blocks">
                                <label htmlFor="description" className="create__club_title" id="description">Описание обсуждения</label>
                                <Field id="description" name="description" />
                            </div>
                        </>
                    }

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
                    <div className="control__item">
                        <Button type="button" text=" Отменить" onClick={() => navigate(-1)} className="control__item_btn-ghost control__item_btn" />
                        <Button type="submit" text="Сохранить" className="control__item_btn" />
                    </div>
                </div>
            </div>
        </Form>
    </Formik>
}