import { NavLink } from "react-router-dom";

const Footer = () => {
    return <footer className="footer">
        <div className="footer__container wrapper__container">
            <ul className="footer__list">
                <li className="footer__list_item">
                    <NavLink to="" className='footer__list_link font-text-noto'>О сервисе</NavLink>
                </li>
                <li className="footer__list_item">
                    <NavLink to="" className='footer__list_link font-text-noto'>Пользовательское соглашение</NavLink>
                </li>
                <li className="footer__list_item">
                    <NavLink to="" className='footer__list_link font-title'>bookcircle <sub className="font-text-noto">©2023</sub></NavLink>
                </li>
                <li className="footer__list_item">
                    <NavLink to="" className='footer__list_link font-text-noto'>Политика обработки персональных данных</NavLink>
                </li>
            </ul>
        </div>
    </footer>
}

export default Footer;