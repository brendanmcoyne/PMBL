import { useEffect, useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";

type StatRow = Record<string, string>;

const TablesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin: 2rem auto;
    max-width: 1200px;
`;

const TableWrapper = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    padding: 1rem;
    flex: 1 1 500px;
    min-width: 300px;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
`;

const TableTitle = styled.h3`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
    }
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 1.2rem;

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

export default function UpdatedStandings() {
    const [batting, setBatting] = useState<StatRow[]>([]);
    const [pitching, setPitching] = useState<StatRow[]>([]);

    const battingUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQo5-YjKdGLo6sZbyHyQInzOoHO0mkLSgUFr67Wpp5SBgpeme6Y3F2Z6HI9cJrE4onG3r-qBv4qtwoA/pub?gid=0&single=true&output=csv";
    const pitchingUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQo5-YjKdGLo6sZbyHyQInzOoHO0mkLSgUFr67Wpp5SBgpeme6Y3F2Z6HI9cJrE4onG3r-qBv4qtwoA/pub?gid=303745750&single=true&output=csv";

    useEffect(() => {
        const fetchSheet = (url: string, setData: (data: StatRow[]) => void) => {
            Papa.parse<StatRow>(url, {
                download: true,
                header: true,
                complete: (results) => {
                    const rows = results.data.filter((row) =>
                        Object.values(row).some((cell) => cell?.trim() !== "")
                    );
                    setData(rows);
                },
            });
        };

        const fetchAll = () => {
            fetchSheet(battingUrl, setBatting);
            fetchSheet(pitchingUrl, setPitching);
        };

        fetchAll();
        const interval = setInterval(fetchAll, 10000);
        return () => clearInterval(interval);
    }, []);

    const renderTable = (title: string, data: StatRow[]) => {
        if (data.length === 0) return null;
        return (
            <TableWrapper>
                <TableTitle>{title}</TableTitle>
                <StyledTable>
                    <thead>
                    <tr>
                        {Object.keys(data[0]).map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            {Object.values(row).map((cell, i) => {
                                let display = cell;
                                if (display === "#DIV/0!") {
                                    display = "0";
                                }
                                return <td key={i}>{display}</td>;
                            })}
                        </tr>
                    ))}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        );
    };

    return (
        <TablesContainer>
            {renderTable("Batting Stats", batting)}
            {renderTable("Pitching Stats", pitching)}
        </TablesContainer>
    );
}
