import { useMemo, useState } from "react";
import styled from "styled-components";
import { StyledHeader, ToggleButton } from "../CommonStyles.ts";
import { awards, awardWinners } from "../../data/awardData.ts";
import { Link } from "react-router-dom";

type ManagerColorProps = {
    $managerColor: string;
};

const AwardsPage = styled.main`
    width: min(1240px, calc(100% - 40px));
    margin: 0 auto;
    padding: 45px 0 80px;

    @media (max-width: 600px) {
        width: min(100% - 24px, 1240px);
        padding-top: 28px;
    }
`;

const PageIntro = styled.div`
    margin-bottom: 50px;
    text-align: center;

    p {
        max-width: 650px;
        margin: 12px auto 0;
        color: #b8bdc7;
        font-size: 1rem;
        line-height: 1.6;
    }
`;

const AwardsControls = styled.section`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;
    margin-bottom: 48px;
    padding: 26px 30px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;

    background: linear-gradient(145deg, rgba(255, 255, 255, 0.095), rgba(255, 255, 255, 0.035)), #242424;

    &::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 7px;
        background: darkblue;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: stretch;
        padding: 24px;
    }
`;

const SelectedAwardHeader = styled.div`
    position: relative;
    z-index: 1;
    flex: 1;
    min-width: 0;

    span {
        display: block;
        margin-bottom: 8px;
        color: #9299a5;
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 1.4px;
        text-transform: uppercase;
    }

    h2 {
        margin: 0;
        color: white;
        font-size: clamp(1.65rem, 3vw, 2.35rem);
        line-height: 1.2;
    }

    p {
        max-width: 650px;
        margin: 9px 0 0;
        color: #aeb4bf;
        font-size: 0.95rem;
        line-height: 1.55;
    }
`;

const AwardSelectorCard = styled.div`
    position: relative;
    z-index: 1;
    flex: 0 0 280px;

    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.055);

    label {
        display: block;
        margin-bottom: 8px;
        color: #d6d8dd;
        font-size: 0.78rem;
        font-weight: 900;
        letter-spacing: 0.8px;
        text-transform: uppercase;
    }

    select {
        width: 100%;
        padding: 11px 38px 11px 12px;

        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 10px;

        background: #181818;
        color: white;

        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;
    }

    @media (max-width: 750px) {
        flex-basis: auto;
        width: 100%;
        box-sizing: border-box;
    }
`;

const AwardWinnersSection = styled.section`
    margin-bottom: 64px;
`;

const AwardWinnersList = styled.div`
    display: grid;
    gap: 14px;
`;

const AwardWinnerCard = styled.article<ManagerColorProps>`
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    gap: 22px;

    min-height: 120px;
    padding: 20px 24px 20px 30px;

    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;

    background:
            linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.095),
                    rgba(255, 255, 255, 0.035)
            ),
            #242424;

    transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;

    &::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 7px;
        background: ${({ $managerColor }) => $managerColor};
    }

    &::after {
        content: "";
        position: absolute;
        top: -95px;
        right: -80px;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        background: ${({ $managerColor }) => $managerColor};
        opacity: 0.08;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-3px);
        border-color: ${({ $managerColor }) => $managerColor};
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.24);
    }

    @media (max-width: 700px) {
        align-items: flex-start;
        gap: 16px;
        padding: 20px 18px 20px 25px;
    }

    @media (max-width: 520px) {
        flex-direction: column;
    }
`;

const SeasonBadge = styled.div<ManagerColorProps>`
    position: relative;
    z-index: 1;
    flex: 0 0 auto;

    min-width: 96px;
    padding: 9px 13px;

    border-radius: 10px;
    background: ${({ $managerColor }) => $managerColor};
    color: white;

    font-size: 0.86rem;
    font-weight: 900;
    text-align: center;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);

    @media (max-width: 520px) {
        min-width: 0;
        width: fit-content;
    }
`;

const WinnerContent = styled.div`
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    gap: 17px;
    min-width: 0;
    flex: 1;
`;

const WinnerPhotoWrapper = styled.div<ManagerColorProps>`
    flex: 0 0 auto;
    display: grid;
    place-items: center;

    width: 76px;
    height: 76px;
    padding: 4px;

    border: 2px solid ${({ $managerColor }) => $managerColor};
    border-radius: 16px;

    background: rgba(255, 255, 255, 0.95);
    box-shadow:
            0 8px 18px rgba(0, 0, 0, 0.22),
            0 0 12px ${({ $managerColor }) => $managerColor}35;

    @media (max-width: 520px) {
        width: 68px;
        height: 68px;
    }
`;

const WinnerPhoto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 11px;
    object-fit: contain;
    background: white;
`;

const WinnerPhotoPlaceholder = styled.div<ManagerColorProps>`
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
    border-radius: 11px;

    background: ${({ $managerColor }) => $managerColor};
    color: white;

    font-size: 1.5rem;
    font-weight: 900;
`;

const WinnerInfo = styled.div`
    min-width: 0;

    > span {
        display: block;
        margin-bottom: 6px;
        color: #9299a5;
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 1.3px;
        text-transform: uppercase;
    }

    h3 {
        margin: 0 0 12px;
        color: white;
        font-size: clamp(1.15rem, 2vw, 1.35rem);
        line-height: 1.3;
    }
`;

const WinnerDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    > span {
        padding: 6px 9px;
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 7px;

        background: rgba(255, 255, 255, 0.045);
        color: #c8cbd1;

        font-size: 0.82rem;
        line-height: 1.25;
    }

    strong {
        color: white;
    }
`;

const ManagerName = styled.span<ManagerColorProps>`
    color: ${({ $managerColor }) => $managerColor};
    font-weight: 900;
`;

const getManagerColor = (manager = ""): string => {
    const normalizedManager = manager.trim().toLowerCase();

    const managerColors: Record<string, string> = {
        brendan: "#CC0000",

        justave: "#FF9900",
        justin: "#FF9900",

        james: "#F1C232",

        marge: "#6AA84F",
        matt: "#6AA84F",

        isaac: "#3586E8",

        trocean: "#9900FF",
        christach: "#9900FF",

        morgan: "#FF00FF",

        thandrew: "#999999",
        dandrew: "#999999",
    };

    return managerColors[normalizedManager] || "#6b7280";
};

export default function Awards() {
    const [selectedAwardId, setSelectedAwardId] = useState(
        awards[0]?.id || ""
    );

    const selectedAward = useMemo(() => {
        return awards.find((award) => award.id === selectedAwardId);
    }, [selectedAwardId]);

    const filteredWinners = useMemo(() => {
        return awardWinners
            .filter((winner) => winner.awardId === selectedAwardId)
            .sort((a, b) => {
                const seasonA = Number(
                    a.season.replace(/\D/g, "")
                );

                const seasonB = Number(
                    b.season.replace(/\D/g, "")
                );

                return seasonA - seasonB;
            });
    }, [selectedAwardId]);

    return (
        <AwardsPage>
            <ToggleButton>
                <Link
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                    to="/archives/records&stats"
                >
                    ← Back
                </Link>
            </ToggleButton>

            <PageIntro>
                <StyledHeader>Awards History</StyledHeader>

                <p>
                    View every PMBL award winner by season, along with
                    their manager and team.
                </p>
            </PageIntro>

            <AwardsControls>
                {selectedAward && (
                    <SelectedAwardHeader>
                        <span>Selected Award</span>

                        <h2>{selectedAward.name}</h2>

                        <p>{selectedAward.description}</p>
                    </SelectedAwardHeader>
                )}

                <AwardSelectorCard>
                    <label htmlFor="award-select">
                        Choose an Award
                    </label>

                    <select
                        id="award-select"
                        value={selectedAwardId}
                        onChange={(event) =>
                            setSelectedAwardId(event.target.value)
                        }
                    >
                        {awards.map((award) => (
                            <option
                                key={award.id}
                                value={award.id}
                            >
                                {award.name}
                            </option>
                        ))}
                    </select>
                </AwardSelectorCard>
            </AwardsControls>

            <AwardWinnersSection>

                {filteredWinners.length > 0 ? (
                    <AwardWinnersList>
                        {filteredWinners.map((winner, index) => {
                            const managerColor =
                                getManagerColor(winner.manager);

                            return (
                                <AwardWinnerCard
                                    key={`${winner.awardId}-${winner.season}-${winner.playerName}-${index}`}
                                    $managerColor={managerColor}
                                >
                                    <SeasonBadge
                                        $managerColor={managerColor}
                                    >
                                        {winner.season}
                                    </SeasonBadge>

                                    <WinnerContent>
                                        <WinnerPhotoWrapper
                                            $managerColor={managerColor}
                                        >
                                            {winner.playerImage ? (
                                                <WinnerPhoto
                                                    src={winner.playerImage}
                                                    alt={winner.playerName}
                                                />
                                            ) : (
                                                <WinnerPhotoPlaceholder
                                                    $managerColor={
                                                        managerColor
                                                    }
                                                >
                                                    {winner.playerName
                                                        ?.charAt(0)
                                                        .toUpperCase()}
                                                </WinnerPhotoPlaceholder>
                                            )}
                                        </WinnerPhotoWrapper>

                                        <WinnerInfo>
                                            <span>PMBL Award Winner</span>

                                            <h3>
                                                {winner.playerName}
                                            </h3>

                                            <WinnerDetails>
                                                {winner.manager && (
                                                    <span>
                                                        <strong>
                                                            Manager:
                                                        </strong>{" "}
                                                        <ManagerName
                                                            $managerColor={
                                                                managerColor
                                                            }
                                                        >
                                                            {
                                                                winner.manager
                                                            }
                                                        </ManagerName>
                                                    </span>
                                                )}

                                                {winner.team && (
                                                    <span>
                                                        <strong>
                                                            Team:
                                                        </strong>{" "}
                                                        {winner.team}
                                                    </span>
                                                )}
                                            </WinnerDetails>
                                        </WinnerInfo>
                                    </WinnerContent>
                                </AwardWinnerCard>
                            );
                        })}
                    </AwardWinnersList>
                ) : (
                    <>

                    </>
                )}
            </AwardWinnersSection>
        </AwardsPage>
    );
}