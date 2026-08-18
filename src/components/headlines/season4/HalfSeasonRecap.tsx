import {ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";
import {styled} from "styled-components";

const GameSummary = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #444;
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    margin: 0 auto 2rem auto;

    .mvp {
        font-style: italic;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    .pitchers {
        display: flex;
        justify-content: center;
        gap: 3rem;
        font-size: 0.95rem;
    }
`;

export default function Halfway4Recap() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>1st Half Season 4 Recap</StyledHeader>
            <GenImage src="/headlines/half4.jpeg" alt="Draft" />
            <ArticleMeta>
                Written by: PMBL News — August 18, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Ever wondered how your favorite team is doing halfway through the season? Each team has 5 games done and 5 games
            left. Lets see how these teams stack up.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>8th Place: <span style={{ color: "#F1C232" }}>James</span></StyledMiniHeader>
            <Passage>Everyone knew that at some point James would have an off season, but I don't think anyone expected this. Guarding
            the worst run differential and runs allowed in the league, it has been a rough season for the James fanbase, especially starting
            with the blown 7-run lead in Week 1 to Trocean. Other than his annual win against Isaac, James has had a rough time on the
            diamond this year. Bowser Jr has had a rough year on the mound, going 0-2 so far with a 14.82 ERA. King Boos stock
            continues to plummet as he is barely hitting above .300, and his pitching hasn't really helped out his team either. To add
            to the yearly tradition of James' players causing havoc off the field, reports are also saying that center fielder Blue
            Toad is not an actual police officer. PMBL is built for parity and not every All-Star player and team will be good every
            year, but no one is used to seeing James anywhere near the bottom of the league.</Passage>

            <GameSummary>
                <div className="mvp">Team MVP: Bowser</div>
                <div className="mvp">Team LVP: King Boo</div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>7th Place: <span style={{ color: "#CC0000" }}>Brendan</span></StyledMiniHeader>
            <Passage>Coming off of another World Series appearance, Brendan's team proceeded to follow the same win/loss pattern to begin
            Season 2, starting 0-3, winning a close game in Week 4, and then losing on the Cruiser in Week 5, starting 1-4 with most
            hope lost. Once again, pitching has been another big issue for this team, and the high-end talent has not been performing
            up to standards. Waluigi hasn't not played since Week 3, marking the first time he's never seen the field, and Fire Bro still
            cannot figure out his bat. Dark Bones said he was gonna shock the world this season, and hes putting up numbers to suffice that.
            Batting over .700 along with team captain Wario has been keeping this team afloat. Red Pianta is also having one of his best
            offensive performing seasons, however the pieces around them such as Fire Bro and the Miis are not performing enough to get this
            team into the win column. All 4 of their losses have been by 1 or 2 runs, including 2 back breaking losses to Marge late in
            those games. It appears to be a lost season despite a lot of hope and promise even for drafting 7th, but the both the offense
            and the defense are never on the same schedule.</Passage>

            <GameSummary>
                <div className="mvp">Team MVP: Dark Bones</div>
                <div className="mvp">Team LVP: Fire Bro</div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>6th Place: <span style={{ color: "#FF9900" }}>Justave</span></StyledMiniHeader>
            <Passage>It's not so often that you see 3 teams from the same division at the bottom of the league, yet here we are. Justave
            has been applauded for always trying new things and being one of the more experimental franchises in the league, however since
            their World Series, the franchise is 6-9, a very heavy falloff from what was seen in the first 2 seasons. Dave's "coaching"
            was a fluke in Season 2. The energy and underdog status that the Season 2 team had will go down in PMBL history, but the
            team continues to lack any sort of spark. Their 2 wins this year are sweeping James in convincing style, but 2 of their losses
            were bad blown leads in the final 2 innings. Triangle and Smurf have had some offensive production, but the Miis as a
            collective has been lackluster. Sabrina and Jake has been absolutely non-existent for the offense, and Grayson cares more
            about boyfriend than baseball and fermentation rather than fielding. Funky and Dixie have really had to carry this team
            on both sides of the ball, and if they aren't performing then the rest of the team isn't.</Passage>

            <GameSummary>
                <div className="mvp">Team MVP: Funky Kong</div>
                <div className="mvp">Team LVP: Sabrina</div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>5th Place: <span style={{ color: "#999999" }}>THANdrew</span></StyledMiniHeader>
            <Passage>In a spot this franchise knows way too well, THANdrew is right on the edge of the playoffs, on the outside looking in.
            There have been some extremely questionable calls made by the THANdrew management this year, including trading away Green Toad
            for Baby Luigi, and bringing Marge to play at Luigis Mansion. Naturally, any team that has Luigi on it will get some flack
            for his very public fued with Donkey Kong, and especially knowing he is the main suspect for an attack on Dixie, but he's
            already tied his RBI count from the past 2 years. King K Rool had been hitting the ball well, and Hammer Bro is having
            a bounce back year, but just like with Brendan's team, the pieces around them are not performing up to standard. Blue Kritter
            is the main culprit, as he only has 1 RBI this year, with the distant cousins of Larry Cuc and Geek Squad combining for 0
            RBIs so far this year. Piggie has also regressed from her rookie season form, going from hitting a little below .600 to
            now hitting .300. THANdrew is home to the worst offense in the league, and for a team is usually centered around defense
            in years past, its hurting them big time.</Passage>

            <GameSummary>
                <div className="mvp">Team MVP: King K. Rool</div>
                <div className="mvp">Team LVP: Blue Kritter</div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>4th Place: <span style={{ color: "#FF00FF" }}>Morgan</span></StyledMiniHeader>
            <Passage>Really all that Morgan cared about was making sure beloved franchise player and alleged minor exploiter Dry Bones
            was back on the squad. Turns out, his team has the best pitching rotation in the league between Bob Marley and Mario. Mario
            has his best year so far, pitching very well in the reliever role, and is only 3 hits shy of last years mark on Justave. Bob
            on the mound is also having a great bounce back year despite only pitched 2 games so far. The offense has clicked when its
            needed to despite the manager being gone on his mission trip, however there is one slight concern that has fans worried. All
            of Morgans wins have been against the East Division bottom feeders, and hes been demolished by teams above him in the division.
            Morgan does not have an easy schedule entering the 2nd half, with 4 big division games, and Christians vs Campers II. His
            pitching has come in clutch when hes needed it to, it just matters will it continue that trend in these bigger games upcoming.
            </Passage>

            <GameSummary>
                <div className="mvp">Team MVP: Dry Bones</div>
                <div className="mvp">Team LVP: Danny B</div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>3rd Place: <span style={{ color: "#3586E8" }}>Isaac</span></StyledMiniHeader>
            <Passage>Before their Week 5 game against THANdrew, Isaac was on pace to have a worst offense than Season 2 Marge, regarded
            as one of the worst teams in PMBL history. 2 games of only scoring 1 run was not the sign for success, even though they won
            Week 1 1-0 off of a sacrifice fly in one of the worst games in PMBL history. #1 Overall pick Petey Piranha has looked
            incredibly flat, and his fielding errors continue to carry over from Season 3. It took him until Week 5 to get a home run,
            but he needed a new paint job to get him there, with fans speculating that the change in skin color could be some form
            of PED usage. Daisy and Zekrom have been batting below the MLB Mendoza line, and different players such as Reshiram and
            Koopa have had some off the field struggles. Their pitching has been very good, and its the reason they have been able
            to stay in games other than the game against Trocean. Look to see this team in the playoffs for the 3rd straight year, but
            they need to figure out their offense.</Passage>

            <GameSummary>
                <div className="mvp">Team MVP: Wiggler</div>
                <div className="mvp">Team LVP: Zekrom</div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>2nd Place: <span style={{ color: "#9900FF" }}>Trocean</span></StyledMiniHeader>
            <Passage>I don't think many fans ever thought they'd see this. Yes, the Trocean franchise is atop the West Division, and they
            already have more wins this year through 5 games than they have in any of the 1st 3 seasons. The 0-7 comeback against James really
            set the stage, and they have not looked back. Other than the largest blown lead in the 7th inning to Marge in PMBL history after
            being too cocky, Trocean has locked back in. Donkey Kong has had an interesting year to say the least. Coming back to Trocean
            but losing the captaincy may have been what he needed. His pitching is still pretty abhorred even with the 7.12 ERA, he has
            not put his team into succeeding roles once he leaves the mound, but his bat has made up for it. Diddy Kong has easily had his
            best season in PMBL with the combination of his .667 batting average and his 2.92 ERA. Despite having no chem, Boomerang Bro
            is being productive, and they even got Goomba his first ever hit in the PMBL stat era. Funky and Dixie might even start rooting
            for them when they have to play Trocean. The biggest question will probably be if pride and ego get in the way of this team
            making a run for the title, but other than that, they are in the drivers seat for their first ever playoff appearance.</Passage>

            <GameSummary>
                <div className="mvp">Team MVP: Diddy Kong</div>
                <div className="mvp">Team LVP: Sherpa</div>
            </GameSummary>

            <StyledMiniHeader style={{marginBottom: "0"}}>1st Place: <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>Stop me if you've heard this before, but I don't think many fans ever thought they'd see this. Marge was very
            unhappy coming out of the draft, and it was very visible that they missed out on a big name like King K Rool or Donkey Kong.
            Little did they know, Birdo would be putting up an MVP performance. Marge has already tied the most amount of wins they've
            gotten in a season at 4, and with Birdo leading the charge, it looks like that'll change. Through 5 games, Birdo is a
            3x Game MVP with a 4-0 record on the mound, posting a 3.16 ERA in a bulk reliever role. Green Dry Bones has been a steady
            offensive weapon and the trade for Green Toad really helped this Marge offense. Blue Pianta has done ok, but he needs to step
            up to help this team go far. Even no names like Eugene and Yoshi has been contributing, but don't look at Yoshis ERA. Marge
            fans tremble in fear when the 70.00 ERA man steps up to the mound. Yoshis pitching is really the only that the can stop
            Marges team of friendship make it far, unless their outfield decides to take a vacation like they did in Week 2 against Isaac.
            All that matters is that glue guys such as Eugene and Purple Yoshi keep getting hits and getting on base safely.</Passage>

            <GameSummary>
                <div className="mvp">Team MVP: Birdo</div>
                <div className="mvp">Team LVP: Yoshi</div>
            </GameSummary>

            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/miibaseball.jpg" alt="Mii" />
                        <Overlay>
                            <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                            <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/koopa_behind_the_bars.jpg" alt="Koopa" />
                        <Overlay>
                            <Headline>Koopa Found Guilty of Assault</Headline>
                            <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/Caucasian_bones_playground.png" alt="Dry Bones" />
                        <Overlay>
                            <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                            <StyledLink to="/headlines/DryBones">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
            </StoryDiv>
        </ContentDiv>
    );
}