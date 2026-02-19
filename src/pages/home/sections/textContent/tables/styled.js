// src/pages/textContent/tables/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--color-border);
        }

        .title {
            font-size: 26px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            box-shadow: 0 10px 22px var(--color-shadow);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-left: 16px;
            list-style: disc;

            li {
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .pre {
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            border-radius: 10px;
            padding: 12px;
            overflow: auto;
            font-size: 13px;
            line-height: 1.55;
        }

        .note {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 10px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .noteTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text-muted);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.55;

            .mono {
                margin-left: 6px;
            }
        }

        .miniTableWrap {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 10px;
            padding: 10px;
        }

        .tableScroll {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
        }

        .demoTable {
            width: 820px;
            border-collapse: collapse;
            border-spacing: 0;
            background: var(--color-bg);
            color: var(--color-text-primary);
        }

        .demoTable th,
        .demoTable td {
            border-bottom: 1px solid var(--color-border);
            padding: 10px 10px;
            text-align: left;
            font-size: 13px;
            white-space: nowrap;
        }

        .demoTable thead th {
            position: sticky;
            top: 0;
            background: var(--color-surface);
            z-index: 1;
            font-weight: 900;
        }

        .demoTable tbody tr:hover td {
            background: var(--color-surface);
        }

        .visuallyHidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .endLine {
            padding: 10px 12px;
            border: 1px dashed var(--color-border);
            border-radius: 12px;
            color: var(--color-text-muted);
            background: var(--color-bg);
        }
    `,
};
