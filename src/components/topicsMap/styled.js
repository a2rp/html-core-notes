// styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 34px 18px;

        .container {
            width: 100%;
            max-width: 1200px;
        }

        .top {
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 22px;
            box-shadow: 0 12px 30px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 14px;
        }

        .title {
            font-size: 28px;
            letter-spacing: 0.2px;
            margin: 0;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            justify-content: flex-end;
        }

        .chip {
            font-size: 12px;
            color: var(--color-text-secondary);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
        }

        .sub {
            margin-top: 10px;
            max-width: 900px;
        }

        .controls {
            margin-top: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            flex-wrap: wrap;
        }

        .search {
            flex: 1;
            min-width: 260px;
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .searchIcon {
            display: grid;
            place-items: center;
            color: var(--color-text-muted);
            font-size: 18px;
        }

        .search input {
            width: 100%;
            border: 0;
            outline: none;
            padding: 0;
            background: transparent;
            color: var(--color-text-primary);
        }

        .clearBtn {
            display: grid;
            place-items: center;
            width: 34px;
            height: 34px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
        }

        .clearBtn:hover {
            background: var(--color-surface-2);
        }

        .btnRow {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .btn {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .btn:hover {
            background: var(--color-surface);
        }

        .list {
            margin-top: 16px;
            display: grid;
            gap: 12px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-surface);
            box-shadow: 0 10px 26px var(--color-shadow);
        }

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .sectionHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 26px;
            height: 26px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .secIcon {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-bg);
            font-size: 18px;
            color: var(--color-text-secondary);
        }

        .secTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .secMeta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
        }

        .sectionBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 240ms ease;
            border-top: 1px solid var(--color-border);
        }

        .sectionBody.open {
            max-height: 2400px;
        }

        .topic {
            padding: 14px 14px 6px 14px;
        }

        .topic + .topic {
            border-top: 1px dashed var(--color-border-light);
        }

        .topicTitle {
            font-weight: 900;
            letter-spacing: 0.15px;
            margin-bottom: 10px;
        }

        .bullets {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding-bottom: 10px;
        }

        .bullet {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.2;
        }

        .empty {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 22px;
        }

        .emptyTitle {
            font-weight: 900;
            font-size: 18px;
            margin-bottom: 8px;
        }

        .emptySub {
            color: var(--color-text-secondary);
        }

        @media (max-width: 720px) {
            .titleRow {
                flex-direction: column;
                align-items: flex-start;
            }

            .chips {
                justify-content: flex-start;
            }

            .btn {
                padding: 10px 10px;
            }
        }
    `,
};
