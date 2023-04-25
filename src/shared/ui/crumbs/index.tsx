import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ path }: { path: string }) => {
    const crumbs = path.split('/').filter((x: string) => x !== '');

    const { state } = useLocation();
    console.log(state);

    return (
        <ul className="breadcrumbs">
            {crumbs.map((crumb: string, index: number) => {
                const link = `/${crumbs.slice(0, index + 1).join('/')}`;
                const text = crumb.charAt(0).toUpperCase() + crumb.slice(1);

                return (
                    <li key={index}>
                        <Link to={link}>{text}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default memo(Breadcrumbs);
