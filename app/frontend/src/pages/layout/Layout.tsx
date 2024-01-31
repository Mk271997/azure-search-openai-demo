import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Mazars Agent</h3>
                        <a href="https://www.mazars.co.uk/" target={"_blank"} title="Mazars Webiste">
                            <img src="https://i.ibb.co/Bjb7hxZ/favicon.png" alt="Mazars logo" width="50px" height="50px" />
                        </a>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                ┃    Ask a question
                                </NavLink>
                            </li>
                            {/* <li className={styles.headerNavLeftMargin}>
              
                            </li> */}
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Powered by Innovation UK</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
