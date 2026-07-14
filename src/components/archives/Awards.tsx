import { useMemo, useState } from "react";
import styled from "styled-components";
import { StyledHeader } from "../CommonStyles.ts";
import { awards, awardWinners } from "../../data/awardData.ts";

const AwardsPage = styled.main`
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  padding: 40px 0;
`;

const AwardsHero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 32px;
  padding: 28px;
  border-radius: 22px;
  background: #111827;
  color: white;

  h1 {
    margin: 0;
    font-size: clamp(2.3rem, 6vw, 4rem);
    line-height: 1;
  }

  p {
    max-width: 650px;
    margin: 10px 0 0;
    color: #d1d5db;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const AwardSelectorCard = styled.div`
  min-width: 260px;
  padding: 16px;
  border-radius: 16px;
  background: white;
  color: #111827;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.85rem;
    font-weight: 900;
  }

  select {
    width: 100%;
    padding: 11px 12px;
    border: 1px solid #d1d5db;
    border-radius: 12px;
    background: white;
    color: #111827;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    min-width: 0;
  }
`;

const SelectedAwardHeader = styled.section`
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
  }

  p {
    margin: 6px 0 0;
    color: #6b7280;
  }
`;

const AwardWinnersSection = styled.section``;

const AwardWinnersList = styled.div`
  display: grid;
  gap: 14px;
`;

const WinnerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`;

const WinnerPhoto = styled.img`
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
  object-fit: cover;
  background: #f9fafb;
`;


const WinnerInfo = styled.div`
  min-width: 0;

  h3 {
    margin: 0 0 6px;
    font-size: 1.12rem;
  }
`;

const WinnerDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  color: #4b5563;
  font-size: 0.92rem;
`;

type ManagerColorProps = {
    $managerColor: string;
};

const AwardWinnerCard = styled.article<ManagerColorProps>`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px;
  border: 1px solid #e5e7eb;
  border-left: 8px solid ${({ $managerColor }) => $managerColor};
  border-radius: 18px;
  background: white;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SeasonBadge = styled.div<ManagerColorProps>`
  flex: 0 0 auto;
  min-width: 95px;
  padding: 8px 12px;
  border-radius: 999px;
  background: ${({ $managerColor }) => $managerColor};
  color: white;
  font-size: 0.85rem;
  font-weight: 900;
  text-align: center;

  @media (max-width: 700px) {
    min-width: auto;
  }
`;

const WinnerPhotoPlaceholder = styled.div<ManagerColorProps>`
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 2px solid ${({ $managerColor }) => $managerColor};
  background: ${({ $managerColor }) => $managerColor};
  color: white;
  font-weight: 900;
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

    return managerColors[normalizedManager] || "#111827";
};

export default function Awards() {
    const [selectedAwardId, setSelectedAwardId] = useState(awards[0]?.id || "");

    const selectedAward = useMemo(() => {
        return awards.find((award) => award.id === selectedAwardId);
    }, [selectedAwardId]);

    const filteredWinners = useMemo(() => {
        return awardWinners
            .filter((winner) => winner.awardId === selectedAwardId)
            .sort((a, b) => {
                const seasonA = Number(a.season.replace(/\D/g, ""));
                const seasonB = Number(b.season.replace(/\D/g, ""));
                return seasonA - seasonB;
            });
    }, [selectedAwardId]);

    return (
        <AwardsPage>
            <StyledHeader>Awards History</StyledHeader>
            <AwardsHero>
                {selectedAward && (
                    <SelectedAwardHeader>
                        <h2 style={{color: "white" }}>{selectedAward.name}</h2>
                        <p style={{color: "#DDDDDD" }}>{selectedAward.description}</p>
                    </SelectedAwardHeader>
                )}

                <AwardSelectorCard>
                    <label htmlFor="award-select">Choose an Award</label>
                    <select
                        id="award-select"
                        value={selectedAwardId}
                        onChange={(event) => setSelectedAwardId(event.target.value)}
                    >
                        {awards.map((award) => (
                            <option key={award.id} value={award.id}>
                                {award.name}
                            </option>
                        ))}
                    </select>
                </AwardSelectorCard>
            </AwardsHero>

            <AwardWinnersSection>
                {filteredWinners.length > 0 ? (
                    <AwardWinnersList>
                        {filteredWinners.map((winner, index) => {
                            const managerColor = getManagerColor(winner.manager);

                            return (
                                <AwardWinnerCard
                                    key={`${winner.awardId}-${winner.season}-${winner.playerName}-${index}`}
                                    $managerColor={managerColor}
                                >
                                    <SeasonBadge $managerColor={managerColor}>
                                        {winner.season}
                                    </SeasonBadge>

                                    <WinnerContent>
                                        {winner.playerImage ? (
                                            <WinnerPhoto src={winner.playerImage} alt={winner.playerName} />
                                        ) : (
                                            <WinnerPhotoPlaceholder $managerColor={managerColor}>
                                                {winner.playerName?.charAt(0)}
                                            </WinnerPhotoPlaceholder>
                                        )}

                                        <WinnerInfo>
                                            <h3>{winner.playerName}</h3>

                                            <WinnerDetails>
                                                {winner.manager && (
                                                    <span><strong>Manager:</strong>{" "}
                                                        <ManagerName $managerColor={managerColor}>{winner.manager}</ManagerName>
                                                    </span>
                                                )}

                                                {winner.team && (<span><strong>Team:</strong> {winner.team}</span>)}
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