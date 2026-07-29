import styled from "styled-components";

export const PageContainer =
    styled.main`
        width: min(
            1200px,
            calc(100% - 2rem)
        );
        margin: 2rem auto;
        color: white;
        font-family:
            "Bebas Neue",
            sans-serif;
    `;

export const Controls =
    styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
    `;

export const ButtonGroup =
    styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem;
    `;

export const ControlButton =
    styled.button<{
        $active: boolean;
    }>`
        padding: 0.65rem 1.4rem;

        border: 2px solid
            ${({ $active }) =>
        $active
            ? "gold"
            : "#666"};

        border-radius: 8px;

        background-color:
            ${({ $active }) =>
        $active
            ? "#555"
            : "#333"};

        color:
            ${({ $active }) =>
        $active
            ? "gold"
            : "white"};

        font-family:
            "Bebas Neue",
            sans-serif;

        font-size: 1.25rem;
        cursor: pointer;

        transition:
            background-color 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;

        &:hover {
            background-color: #666;
            border-color: gold;
        }
    `;

export const TableTitle =
    styled.h2`
        margin: 0 0 1rem;
        text-align: center;
        font-size: 2.5rem;
        color: #f9f9f9;

        @media screen and
            (max-width: 500px) {
            font-size: 1.8rem;
        }
    `;

export const TableWrapper =
    styled.div`
        width: 100%;
        padding: 1.5rem;
        overflow-x: auto;
        box-sizing: border-box;
        background-color: #2e2e2e;
        border-radius: 12px;

        box-shadow:
            0 4px 12px
            rgba(0, 0, 0, 0.5);

        @media screen and
            (max-width: 600px) {
            padding: 0.75rem;
        }
    `;

export const StyledTable =
    styled.table`
        width: 100%;
        min-width: max-content;
        border-collapse: collapse;
        font-size: 1.2rem;

        th,
        td {
            padding: 0.75rem 0.5rem;
            text-align: center;
            white-space: nowrap;
        }

        th {
            background-color: #555;
            color: white;
            font-size: 1.3rem;
            cursor: pointer;
            user-select: none;
        }

        th:hover {
            background-color: #666;
        }

        tbody
            tr:nth-child(even) {
            background-color: #383838;
        }

        tbody tr:hover {
            background-color: #484848;
        }

        td {
            border-bottom:
                1px solid #444;
        }
    `;

export const StatusMessage =
    styled.p`
        margin: 3rem 0;
        text-align: center;
        font-size: 1.6rem;
        color: #ddd;
    `;