import { useEffect, useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";

// Adjust this type to match the exact headers in your Google Sheet
type StatRow = {
    Player: string;
    Hits: string;
    Runs: string;
};

const TableWrapper = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    padding: 1rem;
    width: 1000px;
    margin: 2rem auto;
    color: white;
    font-family: 'Bebas Neue', sans-serif;

    @media screen and (max-width: 1050px) {
        width: 95%;
    }
`;

const TableTitle = styled.h3`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
    }
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 1.5rem;

    th, td {
        border: 1px solid #444;
        padding: 0.5rem;
        text-align: center;
    }

    th {
        background-color: #444;
    }

    tr:nth-child(even) {
        background-color: #383838;
    }
`;

const UpdatedStandings = () => {
    const [data, setData] = useState<StatRow[]>([]);
    const sheetUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI9f3DvikuiVGwybMAzw-RWIrETSb1TXze3TVmYDvjdfUb_usdve9KnRkuXxmZNmIW3DLapKjmNg9F/pub?output=csv";

    useEffect(() => {
        const fetchData = () => {
            Papa.parse<StatRow>(sheetUrl, {
                download: true,
                header: true,
                complete: (results) => {
                    const rows = results.data.filter((row) =>
                        Object.values(row).some((cell) => cell !== null && cell !== "")
                    );
                    setData(rows);
                },
            });
        };

        fetchData();
        const interval = setInterval(fetchData, 5000); // Refresh every 5s
        return () => clearInterval(interval);
    }, []);

    if (data.length === 0) return null;

    return (
        <TableWrapper>
            <TableTitle>Live Stat Feed</TableTitle>
            <StyledTable>
                <thead>
                <tr>
                    {Object.keys(data[0] ?? {}).map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {Object.values(row).map((cell, i) => (
                            <td key={i}>{cell}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default UpdatedStandings;
