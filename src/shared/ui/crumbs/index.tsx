import { FC, ReactNode } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames"

type TBread = {
  data: { to: string; label: string }[];
  separator?: ReactNode | any;
};

// сепаратор
const BreadcrumbSeparator = ({ children, isLast }: { children: string, isLast: boolean }) => (
  <li className={cn("breadcrumb__separator", isLast && 'breadcrumb__separator_last')}>{children}</li>
);

// стрелки
const Arrow = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#96999C" />
</svg>


const TestCrumbCopy: FC<TBread> = ({ separator = <Arrow />, data }) => {
  // сам элеменет
  const children = data.map((child, index) => {
    return (
      <li key={`breadcrumb_item${index}`} className="breadcrumb__item">
        {child.to !== "" ? (
          <NavLink to={child.to}>{child.label}</NavLink>
        ) : (
          child.label
        )}
      </li>
    );
  });

  // последний индекс
  const lastIndex = children.length - 1;

  // с помощью редьюса создаем массив из jsx элементов 
  const res = children.reduce((acc, child, index) => {
    // проверяем является ли элемент последним
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        // в массив пушим элемеент и спеаратор
        child,
        <BreadcrumbSeparator isLast={index === lastIndex - 1} key={`breadcrumb_sep${index}`}>
          {separator}
        </BreadcrumbSeparator>
      );
    } else {
      // если последний, то просто элемент
      acc.push(child);
    }
    return acc;
  }, [] as JSX.Element[]);

  return <ul className="breadcrumb">{res}</ul>;
};

export default memo(TestCrumbCopy);
