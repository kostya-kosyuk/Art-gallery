import { Link } from "react-router-dom";
import header from './Header.module.scss';

const Header = () => {
    return (
        <header className={`${header.header} container`}>
            <div className={`${header.header_inHeader}`}>
                <div className={`${header.logo}`}>
                    <Link
                        to={'/'}
                        className={`${header.logo__link}`}
                    >
                        <img
                            className={`${header.logo__link__image}`}
                            src="https://onlinegallery.art/_webblocks/images/logo.svg"
                            alt="logo"
                        />
                    </Link>
                </div>
                <nav className={`${header.nav_container}`}>
                    <ul className={`${header.nav_container__list}`}>
                        <li className={`${header.desktop}`}>
                            <a
                                href="/artworks"
                                className={`${header.link}`}
                            >Artworks</a>
                        </li>
                        <li className={`${header.desktop}`}>
                            <a
                                href="/artists"
                                className={`${header.link}`}
                            >Artists</a>
                        </li>
                        <li className={`${header.desktop}`}>
                            <a
                                href="/auctions"
                                className={`${header.link}`}
                            >Auctions</a>
                        </li>
                        <li className={`${header.desktop}`}>
                            <a
                                href="/news"
                                className={`${header.link}`}
                            >News</a>
                        </li>
                        <li className={`${header.search_container}`}>
                            <form action="" className={`${header.search}`}>
                                <button
                                    className={`${header.search__button}`}
                                    type="submit"
                                >
                                    <img src="./searchIconGrey.svg" alt="search" />
                                </button>
                                <input
                                    className={`${header.search__input}`}
                                    type="search"
                                    placeholder="Search..."
                                />
                            </form>
                        </li>
                    </ul>
                </nav>
                <div className={`${header.menu_container}`}>
                    <nav className={`${header.nav_container}`}>
                        <ul className={`${header.nav_container__list}`}>
                            <li>
                                <a
                                    href="/pricing"
                                    className={`${header.link}`}
                                >Pricing</a>
                            </li>
                            <li>
                                <a
                                    href="/sell"
                                    className={`${header.link}`}
                                >Sell</a>
                            </li>
                            <li>
                                <a
                                    href="/register"
                                    className={`${header.button}`}
                                >Register</a>
                            </li>
                            <li>
                                <a
                                    href="/login"
                                    className={`${header.link}`}
                                >Login</a>
                            </li>
                            <li className={`${header.searchButton_container}`}>
                                <a
                                    href="/"
                                    className={`${header.searchButton}`}
                                >
                                    <img src="./searchIcon.svg" alt="search" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href="/" className={`${header.menuButton}`}>
                        <img src="./menuIcon.svg" alt="menu" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;