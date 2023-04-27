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
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number | undefined>(0)
    const collapseBodyRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (!height || !isOpen || !collapseBodyRef.current) return undefined;

        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });

        resizeObserver.observe(collapseBodyRef.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [isOpen])

    useEffect(() => {
        if (isOpen) setHeight(collapseBodyRef.current?.getBoundingClientRect().height);
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