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
    width: 95%;         
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const TableTitle = styled.h3`
    font-size: 2.5rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 500px) {
        font-size: 1.6rem;
    }
`;

const StyledTable = styled.table`
    width: 100%;
    font-size: 1.2rem;

    th, td {
        padding: 0.75rem 0.5rem;
        text-align: center;
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

export default function UpdatedStandings() {
    const [batting, setBatting] = useState<StatRow[]>([]);
    const [pitching, setPitching] = useState<StatRow[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);

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

        const displayedData = sortedData(data);

        return (
            <TableWrapper>
                <TableTitle>{title}</TableTitle>
                <StyledTable>
                    <thead>
                    <tr>
                        {Object.keys(data[0]).map((header) => {
                            const isSorted = sortConfig?.key === header;
                            const headerStyle: React.CSSProperties = {
                                color: isSorted ? "gold" : "#fff",
                            };
                            return (
                                <th key={header} onClick={() => handleSort(header)} style={headerStyle}>
                                    {header} {isSorted ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                                </th>
                            );
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {displayedData.map((row, idx) => (
                        <tr key={idx}>
                            {Object.entries(row).map(([header, cell], i) => {
                                let display: string | number = cell === "#DIV/0!" ? 0 : cell;

                                const decimalStats = ["avg", "obp", "slg", "ops", "era", "whip"];
                                if (decimalStats.includes(header.toLowerCase())) {
                                    const numValue = parseFloat(display as string);
                                    if (!isNaN(numValue)) display = numValue.toFixed(3);
                                } else {
                                    const numValue = parseFloat(display as string);
                                    if (!isNaN(numValue)) display = Math.round(numValue);
                                }

                                const cellStyle: React.CSSProperties = {
                                    color: sortConfig?.key === header ? "gold" : "#fff"
                                };

                                return <td key={i} style={cellStyle}>{display}</td>;
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
