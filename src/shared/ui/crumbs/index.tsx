import { FC } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

type TBread = {
  data: { to: string; label: string }[];
  separator?: string;
};

const BreadcrumbSeparator = ({ children }: { children: string }) => (
  <li className="breadcrumb__separator">{children}</li>
);


const TestCrumbCopy: FC<TBread> = ({ separator = ">", data }) => {
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

  const lastIndex = children.length - 1;

  const res = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
          {separator}
        </BreadcrumbSeparator>
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, [] as JSX.Element[]);

  return <ul className="breadcrumb">{res}</ul>;
};

export default memo(TestCrumbCopy);
