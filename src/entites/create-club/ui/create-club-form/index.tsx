import { useState } from "react"
import { Field, Form, Formik } from "formik"
import { BookClubCategoriesTypeDefinition } from "shared/types";
import { Button, ColorableTag } from "shared/ui";

export const CreateClubForm = () => {
    const [fileName, setFileName] = useState<string>("");
    const [clubCategories, setClubCategories] = useState<string[]>([]);
    const [searchedCategory, setSearchedCategory] = useState<string>('')
    const [isCategoriesShown, setIsCategoriesShown] = useState(false)

    const addCategory = (text: any) => {
        if (Object.values(BookClubCategoriesTypeDefinition).includes(text) && !clubCategories.includes(text)) {
            setClubCategories(prev => [...prev, text]);
        }
    }

    return <Formik initialValues={{
        title: "",
        description: "",
        categories: [],
        image: "",
        club_type: "",
        country: "",
        city: "",
        invite_link: ""
    }} onSubmit={() => { }}>
        <Form className="create__club_form">
            <div className="club__form_item">
                <div className="create__club_blocks">
                    <label htmlFor="title" className="create__club_title">Название клуба</label>
                    <Field id="title" name="title" />
                </div>

                <div className="create__club_blocks">
                    <label htmlFor="description" className="create__club_title">Описание клуба</label>
                    <Field as="textarea" name="description" col={3} rows={5} id="description" className="create__club_description" />
                </div>

                <div className="create__club_blocks">
                    <label htmlFor="categories" className="create__club_title">Категории</label>
                    <div className="create__club_inp-block">
                        <Field
                            name='categories'
                            id="categories"
                            value={searchedCategory}
                            onChange={(e: any) => setSearchedCategory(e.target.value)}
                            onKeyPress={(e: any) => {
                                if (e.key === "Enter") {
                                    addCategory(searchedCategory);
                                }
                            }}
                        />
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.93858 13 9.26801 12.5327 10.3448 11.7415L10.3439 11.7422C10.3734 11.7822 10.4062 11.8204 10.4424 11.8566L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.8566 10.4424C11.8204 10.4062 11.7822 10.3734 11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z" fill="#222222" />
                            </svg>
                        </span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        {searchedCategory && <div className="create__club_inp-popup">
                            <ul className="create__club_list">
                                {Object.values(BookClubCategoriesTypeDefinition).map((el, index) => {
                                    if (searchedCategory.trim() !== '' && el.toLocaleLowerCase().includes(searchedCategory.toLocaleLowerCase())) {
                                        return <li className="list__item" key={index} onClick={() => {
                                            addCategory(el);
                                            setSearchedCategory('')
                                        }}>
                                            <span>{el}</span>
                                        </li>
                                    }
                                })}
                            </ul>
                        </div>
                        }

                        <div className="create__club_inp-results">
                            {clubCategories.map(el => (
                                <div key={el} onClick={() => setClubCategories(clubCategories.filter(elem => elem !== el))}>
                                    <ColorableTag icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645Z" fill="#222222" />
                                    </svg>
                                    } text={el} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="club__form_item">
                <div className="create__club_blocks">
                    <label className="create__club_title">Изображение профиля</label>

                    <label className="settings__form_blocks-file" htmlFor="image">
                        <div className="settings__form_blocks-fileinp">
                            <span>Выбрать файл</span>
                        </div>
                        <div className="settings__form_blocks-filename">
                            {fileName}
                        </div>
                        <Field
                            id="image"
                            name="image"
                            type="file"
                            onChange={(e: any) => setFileName(e.target.files[0].name)}
                        />
                    </label>
                </div>
                <div className="create__club_blocks">
                    <label htmlFor="club_type" className="create__club_title" id="checkbox-group">Тип клуба</label>
                    <div role="group" aria-labelledby="checkbox-group" className="create__club_checks">
                        <label>
                            <Field type="checkbox" name="club_type" value="online" />
                            Онлайн клуб
                        </label>
                        <label>
                            <Field type="checkbox" name="club_type" value="offline" />
                            Оффлайн клуб
                        </label>
                    </div>
                </div>
                <div className="create__club_blocks">
                    <Field as="select" name="country" defaultValue="Россия">
                        <option value="Россия">Россия</option>
                    </Field>
                    <p className="create__club_subtext">Страна</p>
                </div>
                <div className="create__club_blocks">
                    <Field as="select" name="city" defaultValue="Санкт-Петербург">
                        <option value="Санкт-Петербург">Санкт-Петербург</option>
                        <option value="Москва">Москва</option>
                    </Field>
                    <p className="create__club_subtext">Город</p>
                </div>
                <div className="create__club_blocks">
                    <label htmlFor="invite_link" className="create__club_title">Ссылка для приглашения</label>
                    <div className="create__club_inp-block">
                        <Field id="invite_link" name="invite_link" />
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0H6C4.89543 0 4 0.89543 4 2C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H11C12.1046 16 13 15.1046 13 14C14.1046 14 15 13.1046 15 12V2C15 0.89543 14.1046 0 13 0ZM13 13V4C13 2.89543 12.1046 2 11 2H5C5 1.44772 5.44772 1 6 1H13C13.5523 1 14 1.44772 14 2V12C14 12.5523 13.5523 13 13 13ZM3 4C3 3.44772 3.44772 3 4 3H11C11.5523 3 12 3.44772 12 4V14C12 14.5523 11.5523 15 11 15H4C3.44772 15 3 14.5523 3 14V4Z" fill="#222222" />
                            </svg>
                        </span>
                    </div>
                    <p className="create__club_subtext">Скопируйте и отправьте ссылку друзьям для приглашения в клуб</p>
                </div>

                <div className="create__club_btns">
                    <Button type="submit" text="Создать клуб" className="create__club_btn" />
                </div>
            </div>
        </Form>
    </Formik>
}