import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollRoot = document.getElementById("notes-main");
        if (!scrollRoot) return undefined;
        const onScroll = () => setVisible(scrollRoot.scrollTop > 220);
        onScroll();
        scrollRoot.addEventListener("scroll", onScroll, { passive: true });
        return () => scrollRoot.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <TopButton
            type="button"
            data-visible={visible}
            aria-label="Scroll to top"
            aria-hidden={!visible}
            disabled={!visible}
            tabIndex={visible ? 0 : -1}
            onClick={() => document.getElementById("notes-main")?.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            })}
        >
            <FiArrowUp aria-hidden="true" />
        </TopButton>
    );
}

const TopButton = styled.button`
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 100;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid var(--color-border-light);
    border-radius: 999px;
    color: var(--color-text-primary);
    background: var(--color-surface-2);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

    &[data-visible="true"] { opacity: 1; pointer-events: auto; }
    &:disabled { opacity: 0; }
    &:hover, &:focus-visible { border-color: var(--color-text-primary); box-shadow: 0 0 0 4px var(--color-border); outline: none; }
`;
