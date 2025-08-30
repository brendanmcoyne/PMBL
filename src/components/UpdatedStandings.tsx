import { useEffect, useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";

type StatRow = Record<string, string>;

const TablesContainer = styled.div`
    display: flex;
    flex-direction: column;  
    gap: 2rem;
    align-items: center;    
    margin: 2rem auto;
    max-width: 1000px;        
    width: 100%;
`;

const TableWrapper = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    padding: 1.5rem;
    width: 110%;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    overflow-x: auto;  
`;


const TableTitle = styled.h3`
    font-size: 2.5rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0;
    color: #f9f9f9;

    @media screen and (max-width: 500px) {
        font-size: 1.6rem;
    }
`;

const StyledTable = styled.table`
    width: 100%;
    font-size: 1.2rem;
    border-collapse: collapse;

    th, td {
        padding: 0.75rem 0.5rem;
        text-align: center;
        white-space: nowrap;
    }

    th {
        background-color: #555;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
    }

    tr:nth-child(even) {
        background-color: #383838;
    }

    td {
        border-bottom: 1px solid #444;
    }
`;

const ToggleButton = styled.button`
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: #444;
    color: white;
    margin-bottom: 1.5rem;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #666;
    }
`;

export default function UpdatedStandings() {
    const [batting, setBatting] = useState<StatRow[]>([]);
    const [pitching, setPitching] = useState<StatRow[]>([]);
    const [view, setView] = useState<"batting" | "pitching">("batting");
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);

    const battingUrl =
        "https://docs.google.com/spreadsheets/d/10-yEizVL_OOBVuxvH3oMUg0p9Pkx8YXX7zsXwVlsZYw/export?format=csv&gid=0";

    const pitchingUrl =
        "https://docs.google.com/spreadsheets/d/10-yEizVL_OOBVuxvH3oMUg0p9Pkx8YXX7zsXwVlsZYw/export?format=csv&gid=303745750";

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

    const sortedData = (data: StatRow[]) => {
        if (!sortConfig) return data;
        const { key, direction } = sortConfig;

        return [...data].sort((a, b) => {
            const aValue = parseFloat(a[key]) || 0;
            const bValue = parseFloat(b[key]) || 0;

            if (aValue < bValue) return direction === "asc" ? -1 : 1;
            if (aValue > bValue) return direction === "asc" ? 1 : -1;
            return 0;
        });
    };

    const renderTable = (title: string, data: StatRow[]) => {
        if (data.length === 0) return null;

        const handleSort = (header: string) => {
            if (sortConfig?.key === header) {
                setSortConfig({
                    key: header,
                    direction: sortConfig.direction === "asc" ? "desc" : "asc",
                });
            } else {
                setSortConfig({ key: header, direction: "desc" });
            }
        };

        const displayedData = sortedData(data).filter((row) => {
            const gamesKey = Object.keys(row).find(
                (key) => key.toLowerCase() === "g" || key.toLowerCase() === "games"
            );
            if (!gamesKey) return true;
            const games = parseInt(row[gamesKey] || "0", 10);
            return games > 0;
        });

        return (
            <>
                <TableTitle>{title}</TableTitle>

                <ToggleButton
                    onClick={() =>
                        setView(view === "batting" ? "pitching" : "batting")
                    }
                >
                    Switch to {view === "batting" ? "Pitching Stats" : "Batting Stats"}
                </ToggleButton>

                <TableWrapper>
                    <StyledTable>
                        <thead>
                        <tr>
                            {Object.keys(data[0]).map((header) => {
                                const isSorted = sortConfig?.key === header;
                                const headerStyle: React.CSSProperties = {
                                    color: isSorted ? "gold" : "#fff",
                                };
                                return (
                                    <th
                                        key={header}
                                        onClick={() => handleSort(header)}
                                        style={headerStyle}
                                    >
                                        {header}{" "}
                                        {isSorted
                                            ? sortConfig.direction === "asc"
                                                ? "▲"
                                                : "▼"
                                            : ""}
                                    </th>
                                );
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {displayedData.map((row, idx) => (
                            <tr key={idx}>
                                {Object.entries(row).map(([header, cell], i) => {
                                    let display: string | number =
                                        cell === "#DIV/0!" ? 0 : cell;

                                    const decimalStats = [
                                        "avg",
                                        "obp",
                                        "slg",
                                        "ops",
                                        "era",
                                        "whip",
                                    ];
                                    if (decimalStats.includes(header.toLowerCase())) {
                                        const numValue = parseFloat(display as string);
                                        if (!isNaN(numValue))
                                            display = numValue.toFixed(3);
                                    } else {
                                        const numValue = parseFloat(display as string);
                                        if (!isNaN(numValue))
                                            display = Math.round(numValue);
                                    }

                                    const cellStyle: React.CSSProperties = {
                                        color:
                                            sortConfig?.key === header ? "gold" : "#fff",
                                    };

                                    return (
                                        <td key={i} style={cellStyle}>
                                            {display}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            </>
        );
    };

    return (
        <TablesContainer>
            {view === "batting"
                ? renderTable("Batting Stats", batting)
                : renderTable("Pitching Stats", pitching)}
        </TablesContainer>
    );
}
