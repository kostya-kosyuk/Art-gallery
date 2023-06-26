import { Link } from "react-router-dom";
import header from './Header.module.scss';
import { useState } from "react";
import MobileMenu from "./innerComponents/MobileMenu";
import Search from "./innerComponents/Search";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    const handleOpenMenu = () => {
        setMenuOpen(true);
    };

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
                            <Link
                                to="/artworks"
                                className={`${header.link}`}
                            >Artworks</Link>
                        </li>
                        <li className={`${header.desktop}`}>
                            <Link
                                to="/artists"
                                className={`${header.link}`}
                            >Artists</Link>
                        </li>
                        <li className={`${header.desktop}`}>
                            <Link
                                to="/auctions"
                                className={`${header.link}`}
                            >Auctions</Link>
                        </li>
                        <li className={`${header.desktop}`}>
                            <Link
                                to="/news"
                                className={`${header.link}`}
                            >News</Link>
                        </li>
                        <li className={`${header.search_container}`}>
                            <Search />
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
                                    <img src="/searchIcon.svg" alt="search" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button
                        className={`${header.menuButton} ${isMenuOpen ? 'open' : ''}`}
                        onClick={handleOpenMenu}
                    >
                        <img src="/menuIcon.svg" alt="menu" />
                    </button>
                </div>
            </div>
            <MobileMenu isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu}/>
        </header>
    );
};

export default Header;