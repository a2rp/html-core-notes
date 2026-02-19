import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        .top {
            margin-bottom: 14px;
        }

        .title {
            font-size: 28px;
            line-height: 1.15;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 880px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 12px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 12px;
        }

        .h3 {
            font-size: 16px;
            letter-spacing: 0.2px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        .pillRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pill {
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            line-height: 1;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        .note {
            margin-top: 12px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .noteTitle {
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 6px;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `,
};
