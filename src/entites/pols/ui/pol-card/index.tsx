import { memo } from "react";
import moment from "moment";
import { ACCOUNT_TYPE, PolType } from "shared/types";
import { Button, ColorableTag } from "shared/ui";
import { Field, Form, Formik } from "formik";
import { useAppSelector } from "shared/api";
import { useNavigate, useParams } from "react-router-dom";

type PolCardPropsType = {
    data: PolType;
}

export const PolCard = memo(({ data }: PolCardPropsType) => {
    // текущий юзер
    const { currentUser } = useAppSelector(state => state.auth);
    // редирект
    const navigate = useNavigate()
    // id клуба
    const { id } = useParams()

    return <div className="pol__card">
        <h2 className="pol__card_title">{data.title}</h2>

        <div className="pol__card_tags">
            <ColorableTag className="pol__card_tag" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 0C3.77614 0 4 0.223858 4 0.5V1H12V0.5C12 0.223858 12.2239 0 12.5 0C12.7761 0 13 0.223858 13 0.5V1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V3C0 1.89543 0.895431 1 2 1H3V0.5C3 0.223858 3.22386 0 3.5 0ZM1 4V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V4H1Z" fill="#222222" />
            </svg>
            } text={moment(data.date).format("DD.MM.YYYY HH:mm")} />

            <ColorableTag className="pol__card_tag" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7Z" fill="#222222" />
                <path d="M11 8C12.6569 8 14 6.65685 14 5C14 3.34315 12.6569 2 11 2C9.34315 2 8 3.34315 8 5C8 6.65685 9.34315 8 11 8Z" fill="#222222" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.21636 14C5.07556 13.7159 5 13.3791 5 13C5 11.6445 5.67905 10.2506 6.93593 9.27997C6.3861 9.10409 5.7451 9 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.21636Z" fill="#222222" />
                <path d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z" fill="#222222" />
            </svg>
            } text={`Проголосовали: ${data.votes_count.toString()}`} />
        </div>

        <p className="pol__card_text">{data.description}</p>

        <div className="pol__card_votes">
            {/* если опрос завершен рендерим это */}
            {data.isFinished ?
                <>
                    {data.vote_variants.map(el => (
                        <div key={el.id} className="vote__item">
                            <p className="vote__text">{el.title}</p>
                            <div className="vote__container">
                                <div className="vote__line">
                                    <div className="vote__line_item" style={{ width: el.vote_percent + "%" }}></div>
                                </div>
                                <span className="vote__container_text">{el.vote_percent} %</span>
                            </div>
                        </div>
                    ))}
                </> : <>
                    {/* иначе это */}
                    {ACCOUNT_TYPE[currentUser.role] !== 'moder' ?
                        <Formik initialValues={{
                            title: ''
                        }} onSubmit={() => {

                        }}>
                            <Form>
                                <div id="pol__container_votes">
                                    <div role="group" aria-labelledby="pol__container_votes">
                                        {data.vote_variants.map(el => (
                                            <div key={el.id} className="vote__item_inp vote__item">
                                                <label className="vote__text-label vote__text">
                                                    <Field type="radio" value={el.title} name={`title`} />
                                                    {el.title}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button text="Проголосовать" />
                            </Form>
                        </Formik>
                        :
                        <>
                            {data.vote_variants.map(el => (
                                <div key={el.id} className="vote__item">
                                    <p className="vote__text">{el.title}</p>
                                    <div className="vote__container">
                                        <div className="vote__line">
                                            <div className="vote__line_item" style={{ width: el.vote_percent + "%" }}></div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </>}
                </>
            }

            {ACCOUNT_TYPE[currentUser.role] === 'moder' && <Button text='Редактировать' onClick={() => navigate(`/club/edit-pol?club_id=${id}`)} />}
        </div>
    </div>
})