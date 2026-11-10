import { useEffect, useRef, useState } from "react";
import { Styled } from "./styled";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("app-theme") === "light" ? "light" : "dark";
        } catch {
            return "dark";
        }
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        try {
            localStorage.setItem("app-theme", theme);
        } catch {
            // Keep the selected theme for this session if storage is unavailable.
        }
    }, [theme]);

    useEffect(() => {
        if (!menuOpen) return undefined;

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        const onResize = () => {
            if (window.innerWidth >= 760) {
                setMenuOpen(false);
                document.querySelector(".quickNav a")?.focus();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("resize", onResize);
        };
    }, [menuOpen]);

    const nextTheme = theme === "light" ? "dark" : "light";

    const closeMenu = (event) => {
        setMenuOpen(false);
        const targetId = event.currentTarget.getAttribute("href")?.slice(1);
        document.getElementById(targetId)?.focus({ preventScroll: true });
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
                                alt=""
                                onLoad={() => setLogoLoaded(true)}
                                onError={() => setLogoLoaded(true)}
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

                    <nav id="quick-navigation" className={`quickNav ${menuOpen ? "open" : ""}`} aria-label="Quick navigation">
                        <a href="#about-html" onClick={closeMenu}>Overview</a>
                        <a href="#topic-map" onClick={closeMenu}>Topics</a>
                        <a href="#foundation" onClick={closeMenu}>Foundation</a>
                        <a href="#text-content" onClick={closeMenu}>Text</a>
                        <a href="#forms" onClick={closeMenu}>Forms</a>
                        <a href="#advanced" onClick={closeMenu}>Advanced</a>
                    </nav>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="menuToggleBtn"
                        onClick={() => setMenuOpen((value) => !value)}
                        aria-expanded={menuOpen}
                        aria-controls="quick-navigation"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        title={menuOpen ? "Close navigation" : "Open navigation"}
                    >
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </button>

                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={() => setTheme(nextTheme)}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
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
