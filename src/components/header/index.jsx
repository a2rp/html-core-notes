// Header.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import transparentLogo from "/images/transparentLogo.png";
import { FiMoon, FiSun } from "react-icons/fi";

/*
Props
- theme: "dark" | "light"
- onThemeChange: (nextTheme) => void
*/
const Header = ({ theme = "dark", onThemeChange }) => {
    const [logoLoaded, setLogoLoaded] = useState(false);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        if (typeof onThemeChange === "function") {
            onThemeChange(nextTheme);
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="logoNameThemeToggleWrapper">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}
                            <img
                                src={transparentLogo}
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
