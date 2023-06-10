import CustomNavButton from "./components/NavButton";
import { Link } from "react-router-dom";
import header from './Header.module.scss';

const Header = () => {
    return (
        <header className={header.header}>
            <div className={header.logo}>
                <Link
                    to={'/'}
                    className={header.logo__link}
                >
                    <img
                        className={header.logo__link__image}
                        src="https://onlinegallery.art/_webblocks/images/logo.svg"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className={header.menu_container}>
                <nav className={header.nav_container}>
                    <ul className={header.nav_container__list}>
                        <li>
                            <a
                                href="#/"
                                className={header.button}
                            >Register</a>
                        </li>
                        <li>
                            <a
                                href="#/"
                                className={header.searchButton}
                            >
                                <img
                                    className={header.searchButton__img}
                                    src="./searchIcon.svg"
                                    alt="search"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    menu
                </div>
            </div>
        </header>
    );
};

export default Header;