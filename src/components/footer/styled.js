import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 14px 24px;
        padding: 18px 15px 22px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        @media (width < 700px) { grid-template-columns: 1fr; }
    `,
    Brand: styled.strong`
        display: inline-flex;
        align-items: center;
        gap: 9px;
        color: var(--color-text-primary);

        img { width: 32px; height: 32px; object-fit: contain; border: 1px solid var(--color-border); border-radius: 8px; }
    `,
    SocialLinks: styled.nav`
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 7px;

        a {
            width: 35px;
            height: 35px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            color: var(--color-text-muted);
            transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        a:hover,
        a:focus-visible {
            color: var(--color-text-primary);
            border-color: var(--color-border-light);
            box-shadow: 0 0 0 3px var(--color-border);
            outline: none;
        }

        @media (width < 700px) { justify-content: flex-start; }
    `,
    Copyright: styled.p`
        grid-column: 1 / -1;
        margin: 0;
        padding-top: 12px;
        border-top: 1px solid var(--color-border);

        a { color: var(--color-text-secondary); font-weight: 700; }
        a:hover { color: var(--color-text-primary); }
    `,
};
