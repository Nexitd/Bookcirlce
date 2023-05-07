import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik"
import { Button } from "shared/ui";

export const ActionPolsForm = () => {
    // отправка уведомлений флаг
    const [isNotes, setIsNotes] = useState<boolean>(false);

    // получение роута
    const { pathname } = useLocation();
    // редирект функция
    const navigate = useNavigate();

    // массив с вариантами ответов
    const [variants, setVariants] = useState([
        {
            id: 1,
            title: ''
        }
    ]);

    // создание нового варианта ответов
    const addVariant = () => {
        setVariants(prev => [...prev, { id: prev[prev.length - 1].id + 1, title: '' }])
    }

    return <Formik initialValues={{}} onSubmit={() => { }}>
        <Form>
            <div className="create__club_form">
                <div className="club__form_item">
                    <div className="create__club_blocks">
                        <label htmlFor="title" className="create__club_title">Название опроса</label>
                        <Field id="title" name="title" />
                    </div>
                    <div className="create__club_blocks">
                        <label htmlFor="description" className="create__club_title">Текст опроса</label>
                        <Field as="textarea" name="description" col={3} rows={5} id="description" className="create__club_description" />
                    </div>
                    <div className="create__club_blocks">
                        <label htmlFor="date" className="create__club_title">Дата завершения опроса</label>
                        <Field id="date" name="date" type="date" />
                        <p className="create__club_subtext">
                            Дата завершения опроса в  формате ДД/ММ/ГГ
                        </p>
                    </div>
                    <div className="create__club_blocks">
                        <label htmlFor="time" className="create__club_title">Время</label>
                        <Field id="time" name="time" type="time" />
                        <p className="create__club_subtext">
                            Время завершения опроса в формате ЧЧ/ММ
                        </p>
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
                </div>
                <div className="club__form_item">
                    {variants.map(el => {
                        return <div className="create__club_blocks" key={el.id}>
                            <label className="create__club_title">Вариант ответа</label>
                            <Field name={`title-${el.id}`} onChange={(e: any) => setVariants(variants.map(elem => {
                                if (el.id === elem.id) {
                                    elem.title = e.target.value;
                                }

                                return elem;
                            }))} />
                        </div>

                    })}

                    <Button onClick={addVariant} text="+ Добавить" className="create__pol_btn" />
                </div>
            </div>
            <div className="create__club_form-controls">
                <div className="control__item create__meet_btns">
                    <Button type="button" text=" Отменить" onClick={() => navigate(-1)} className="control__item_btn-ghost control__item_btn" />
                    <Button type="submit" text={pathname.includes('edit') ? "Сохранить" : "Создать опрос"} className="control__item_btn" />
                </div>
            </div>
        </Form>
    </Formik>
}