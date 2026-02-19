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
            margin-bottom: 8px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            line-height: 1.6;
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
            margin-bottom: 10px;
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-top: 8px;

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

        .table {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            overflow: hidden;
        }

        .row {
            display: grid;
            grid-template-columns: 140px 1fr 220px;

            @media (width < 900px) {
                grid-template-columns: 120px 1fr;
            }
        }

        .row.head {
            background: var(--color-surface-2);

            .cell {
                color: var(--color-text-primary);
                font-weight: 800;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.8px;
            }
        }

        .cell {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            line-height: 1.5;
        }

        .row:last-child .cell {
            border-bottom: 0;
        }

        .row .cell:nth-child(1) {
            background: rgba(255, 255, 255, 0.02);
        }

        @media (width < 900px) {
            .row .cell:nth-child(3) {
                display: none;
            }
        }

        .pre {
            margin-top: 12px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
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
