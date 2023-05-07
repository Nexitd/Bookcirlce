import { ReactNode, useEffect, useRef, useState } from "react";
import cn from "classnames";

type CollapseTypeProps = {
    title: string;
    img?: string;
    isImage?: boolean;
    children: ReactNode;
    arrow: ReactNode;
    className?: string;
}

const Collapse = ({ title = '', isImage = false, img = '', arrow, className = '', children }: CollapseTypeProps) => {
    // флаг, который проверяет открыт коллапс или нет
    const [isOpen, setIsOpen] = useState<boolean>(false)
    // высота коллапса
    const [height, setHeight] = useState<number | undefined>(0)
    // ссылка на тело коллапса
    const collapseBodyRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        // елси нет высоты или коллапс закрыт или нет элемента возвращаем undefiend
        if (!height || !isOpen || !collapseBodyRef.current) return undefined;

        // создаем обзервер функцию, которая следит за изменениями размера высоты нашего коллапса
        // и после этого записывает эту высоту в стейт
        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });

        // вешаем обзервер и передаем в него элеменет
        resizeObserver.observe(collapseBodyRef.current);
        // при анмаунте компонента снимаем наблюдатель
        return () => {
            resizeObserver.disconnect();
        };
    }, [isOpen])

    useEffect(() => {
        // если отрыто ставим высоту
        if (isOpen) setHeight(collapseBodyRef.current?.getBoundingClientRect().height);
        // иначе высота 0
        else setHeight(0);
    }, [isOpen]);

    return (
        <div className={cn("collapse", className, isOpen && 'collapse-active')}>
            <div className="collapse__head">
                {isImage ?
                    <div className="collapse__head_item">
                        <img src={img} alt="image" />
                        <span className="collapse__head_title">{title}</span>
                    </div>
                    :
                    <span className="collapse__head_title">{title}</span>
                }
                <button className="collapse__head_btn" onClick={() => setIsOpen(prev => !prev)}>{arrow}</button>
            </div>
            <div className="collapse__body" style={{ height }}>
                <div ref={collapseBodyRef}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Collapse