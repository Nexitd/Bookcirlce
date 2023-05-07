import classnames from 'classnames';
import { usePagination, DOTS } from './lig';

type PaginationPropsType = {
    onPageChange: (currentPage: number) => void;
    totalCount: number;
    siblingCount?: number;
    pageSize: number;
    currentPage: number;
    className?: string;
}

const Pagination = ({ onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className = '' }: PaginationPropsType) => {

    const paginationRange: any = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // если условие выполнилось пагинации нет
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    // стрелочка вперед логика
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    // стрелочка назад логика
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            <button
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                disabled={currentPage === 1}
                onClick={onPrevious}
            >
                <div className="arrow left">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z" fill="#222222" />
                    </svg>

                </div>
            </button>
            {
                paginationRange.map((pageNumber: any) => {
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots" key={pageNumber}>&#8230;</li>;
                    }

                    return (
                        <li
                            key={pageNumber}
                            className={classnames('pagination-item', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })
            }
            <button
                className={
                    classnames('pagination-item', {
                        disabled: currentPage === lastPage
                    })}
                disabled={currentPage === lastPage}
                onClick={onNext}
            >
                <div className="arrow right">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#222222" />
                    </svg>
                </div>
            </button>
        </ul >
    );
};

export default Pagination;