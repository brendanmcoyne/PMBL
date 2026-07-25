import {styled} from "styled-components";
import { Link } from "react-router-dom";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { DraftPick } from "../../../data/DraftPick.ts";


export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledPick = styled.h4`
    text-align: center;
    margin: 0;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledManager = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin: 0;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 600px) {
        white-space: normal;
        font-size: 0.75rem;
    }
`;

const StyledPlayer = styled.h5`
    text-align: center;
    margin: 0;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    
`;

const StyledRound = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 30px;
    width: 60%;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Pick = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #12121c;
    border-bottom: 1px solid white;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    width: 200px; 
    height: 180px;
    @media screen and (max-width: 1000px) {
        width: 180px;
    }
`;

const PickText = styled.span`
    z-index: 1;
    transition: opacity 0.3s ease;

    ${Pick}:hover & {
        opacity: 0;
    }
`;

const HoverImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Pick}:hover & {
    opacity: 1;
  }
`;

const DRAFT_CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vThYLNSuXm1tCR0pYVz2HuJ1bqlDAUsGsH66Bw9a_w3XW98ePLfjGeuc2QNwmt60CHLaWjusiiHLY3O/pub?gid=0&single=true&output=csv";

type DraftCsvRow = {
    Round: string;
    Pick: string;
    Overall: string;
    Manager: string;
    Player: string;
    "Captain?": string;
};

const managerColors: Record<string, string> = {
    Brendan: "#CC0000",
    James: "#F1C232",
    Christach: "#9900FF",
    Morgan: "#FF00FF",
    Matt: "#6AA84F",
    Isaac: "#3586E8",
    Justin: "#FF9900",
    DANdrew: "#999999",
};

const jpgPlayers = new Set([
    "Alfonzo",
    "Jack White",
    "Triangle",
    "MLK",
    "Bob Marley",
    "Broseph",
    "Michelle Obama",
    "Jesstithyn",
    "Bertha",
    "Danny B",
    "Tate McRae",
    "Nose",
]);

const getPlayerPhoto = (player: string): string => {
    if (player === "Baby DK") {
        return "/players/Baby_Donkey_Kong.webp";
    }

    const extension = jpgPlayers.has(player) ? "jpg" : "webp";

    /*
     * Your existing JPG filenames contain spaces, while your WebP filenames
     * use underscores.
     */
    const filename = extension === "jpg" ? player : player.replace(/ /g, "_");

    return `/players/${filename}.${extension}`;
};

const formatOrdinal = (number: number): string => {
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${number}th`;
    }

    switch (number % 10) {
        case 1:
            return `${number}st`;
        case 2:
            return `${number}nd`;
        case 3:
            return `${number}rd`;
        default:
            return `${number}th`;
    }
};

const Draft1 = () => {
    const [draftRoster, setDraftRoster] = useState<DraftPick[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDraft = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(DRAFT_CSV_URL);

                if (!response.ok) {
                    throw new Error(
                        `Could not load the draft CSV (${response.status})`
                    );
                }

                const csvText = await response.text();

                const result = Papa.parse<DraftCsvRow>(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    transformHeader: (header) => header.trim(),
                });

                if (result.errors.length > 0) {
                    console.error("CSV parsing errors:", result.errors);
                }

                const parsedDraft: DraftPick[] = result.data
                    .filter(
                        (row) =>
                            row.Round &&
                            row.Pick &&
                            row.Overall &&
                            row.Manager &&
                            row.Player
                    )
                    .map((row) => ({
                        round: Number(row.Round),
                        pick: Number(row.Pick),
                        overall: Number(row.Overall),
                        manager: row.Manager.trim(),
                        player: row.Player.trim(),
                        captain:
                            row["Captain?"]?.trim().toLowerCase() === "yes",
                    }))
                    .filter(
                        (draftPick) =>
                            Number.isFinite(draftPick.round) &&
                            Number.isFinite(draftPick.pick) &&
                            Number.isFinite(draftPick.overall)
                    )
                    .sort((a, b) => a.overall - b.overall);

                setDraftRoster(parsedDraft);
            } catch (caughtError) {
                console.error(caughtError);

                setError(
                    caughtError instanceof Error
                        ? caughtError.message
                        : "Could not load the draft."
                );
            } finally {
                setLoading(false);
            }
        };

        void loadDraft();
    }, []);

    const rounds = draftRoster.reduce<Record<number, DraftPick[]>>(
        (groupedRounds, draftPick) => {
            if (!groupedRounds[draftPick.round]) {
                groupedRounds[draftPick.round] = [];
            }

            groupedRounds[draftPick.round].push(draftPick);

            return groupedRounds;
        },
        {}
    );

    if (loading) {
        return (
            <ContentDiv>
                <StyledHeader>Loading Season 1 Draft...</StyledHeader>
            </ContentDiv>
        );
    }

    if (error) {
        return (
            <ContentDiv>
                <StyledHeader>Unable to load draft</StyledHeader>
                <p>{error}</p>
            </ContentDiv>
        );
    }

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader style={{marginBottom: "0"}}>Season 1 PMBL Draft</StyledHeader>
            {Object.entries(rounds)
                .sort(([roundA], [roundB]) => Number(roundA) - Number(roundB))
                .map(([roundNumber, roundPicks]) => (
                    <div key={roundNumber}>
                        <StyledMiniHeader
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "3rem",
                            }}
                        >
                            Round {roundNumber}
                        </StyledMiniHeader>

                        <StyledRound>
                            {[...roundPicks]
                                .sort((a, b) => a.pick - b.pick)
                                .map((entry) => {
                                    const managerColor =
                                        managerColors[entry.manager] ?? "#FFFFFF";

                                    return (
                                        <Pick
                                            key={entry.overall}
                                            style={{
                                                borderBottom: `2px solid ${managerColor}`,
                                            }}
                                        >
                                            <PickText>
                                                <StyledPick>
                                                    {formatOrdinal(entry.overall)} Overall:
                                                </StyledPick>

                                                <StyledPlayer>
                                                    {entry.player}
                                                    {entry.captain ? " (C)" : ""}
                                                </StyledPlayer>

                                                <StyledManager
                                                    style={{ color: managerColor }}
                                                >
                                                    {entry.manager}
                                                </StyledManager>
                                            </PickText>

                                            <HoverImage
                                                src={getPlayerPhoto(entry.player)}
                                                alt={entry.player}
                                            />
                                        </Pick>
                                    );
                                })}
                        </StyledRound>
                    </div>
                ))}
        </ContentDiv>
    );
};

export default Draft1;