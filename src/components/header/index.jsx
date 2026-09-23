// Header.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [menuOpen, setMenuOpen] = useState(false);

    // Initialize theme from localStorage or default
    useEffect(() => {
        const storedTheme = localStorage.getItem("app-theme");
        const initialTheme = storedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    // Apply theme + persist
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem("app-theme", theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="logoNameThemeToggleWrapper">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}
                            <img
                                src={`${import.meta.env.BASE_URL}logo.png`}
                                alt="html-core-notes"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">html-core-notes</div>
                            <div className="subTitle">
                                At-a-glance HTML revision
                            </div>
                        </div>
                    </div>

                    <nav className={`quickNav ${menuOpen ? "open" : ""}`} aria-label="Quick navigation">
                        <a href="#about-html" onClick={() => setMenuOpen(false)}>Overview</a>
                        <a href="#foundation" onClick={() => setMenuOpen(false)}>Foundation</a>
                        <a href="#text-content" onClick={() => setMenuOpen(false)}>Text</a>
                        <a href="#forms" onClick={() => setMenuOpen(false)}>Forms</a>
                        <a href="#advanced" onClick={() => setMenuOpen(false)}>Advanced</a>
                    </nav>

                    <button
                        type="button"
                        className="menuToggleBtn"
                        onClick={() => setMenuOpen((value) => !value)}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        title={menuOpen ? "Close navigation" : "Open navigation"}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
