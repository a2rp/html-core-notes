// App.styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,

    Header: styled.div`
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
    `,

    Main: styled.div`
        height: calc(100vh - 60px);
        display: flex;
        width: 100%;
        overflow: hidden;

        .sidePanelWrapper {
            width: 300px;
            flex: 0 0 300px;
            border-right: 1px solid var(--color-border);
            background: var(--color-bg);

            position: sticky;
            top: 60px;
            height: calc(100vh - 60px);

            overflow: hidden;
        }

        .sideInner {
            height: 100%;
            overflow-y: auto;
            padding: 14px;
            scroll-behavior: smooth;
        }

        .sideNav {
            display: flex;
            flex-direction: column;
            gap: 18px;
            font-size: 14px;
        }

        .navSection {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--color-border);
        }

        .navSection:last-child {
            border-bottom: 0;
            padding-bottom: 0;
        }

        .navTitle {
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 4px;
        }

        .sideNav a {
            display: block;
            width: 100%;
            color: var(--color-text-secondary);
            padding: 8px 10px;
            border-radius: 8px;
            line-height: 1.25;
            text-decoration: none; /* underline removed */
            transition:
                background 0.15s ease,
                color 0.15s ease,
                transform 0.15s ease;
        }

        .sideNav a:hover {
            background: var(--color-surface);
            color: var(--color-text-primary);
            transform: translateX(1px);
            text-decoration: none;
        }

        .sideNav a:focus-visible {
            outline: 2px solid var(--color-text-primary);
            outline-offset: 2px;
        }

        .sideNav a.isActive {
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            box-shadow: inset 0 0 0 1px var(--color-border);
        }

        .contentFooterWrapper {
            flex: 1;
            min-width: 0;
            height: 100%;
            overflow-y: auto;
            background: var(--color-bg);
            scroll-behavior: smooth;
            scroll-padding-top: 14px;
        }

        .contentWrapper {
            min-height: calc(100vh - 60px);
            padding: 18px;
        }

        .footerWrapper {
            border-top: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 12px 18px;
        }

        @media (width < 900px) {
            flex-direction: column;

            .sidePanelWrapper {
                width: 100%;
                flex: 0 0 auto;
                height: auto;
                position: relative;
                top: 0;
                border-right: 0;
                border-bottom: 1px solid var(--color-border);
            }

            .sideInner {
                max-height: 240px;
            }

            .contentFooterWrapper {
                flex: 1;
                min-width: 0;
                height: 100%;
                overflow-y: auto;
                background: var(--color-bg);
                scroll-behavior: smooth;
                scroll-padding-top: 14px;
            }
        }
    `,

    Footer: styled.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,
};
