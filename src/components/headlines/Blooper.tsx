import {ContentDiv, StyledHeader, GenImage, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";

export default function Blooper() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Blooper Asks Crush Out, Got Something Better Instead</StyledHeader>
            <GenImage src="/headlines/blooper.jpeg" alt="Blooper" />
            <ArticleMeta>
                Written by: PMBL News — November 5, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>PMBL is known for being a top heavy league, with the best power hitters getting all the attention,
            a few middle of the road players playing every game, and the low level players maybe playing a game a year if
            they're lucky. Blooper was one of those low level players. Drafted by Matt in the 5th Round in PMBL
            Season 1, based on his draft stock it looked like he would be a season long player, most likely for his
            pitching performance at the Pro Day. However, Blooper would not play a single game that season.</Passage>

            <Passage>Right around the trade deadline, it was talked about potentially Justin acquiring Blooper due to
            the Shy Guy Incident to help bolster his defense, however no trade was made. Marge would go 4-6, and despite
            being out of the playoff race for the last 2 weeks of the season, Blooper would not see the field. </Passage>

            <Passage>There was even multiple accusations regarding him "inking" last year. These accusations were never
            confirmed, and there was no league investigation into them. Blooper felt defeated. His draft stock would drop
            going into Season 2, and all he wanted was to play just one game. Defending champion James would take Blooper
            in the 11th round, which gave him lots of hope that he would play this year.</Passage>

            <Passage>For the first 4 games of the season, things did not look good. James was on a legendary run, starting
            4-0 with the leagues best offense by a mile. However, in Week 4, something happened. Brendan, the runner-up
            from last year, was really struggling. Starting 0-3, having terrible pitching woes, yet most managers saying
            he had a good team, things were already pretty bleak. After an upset win over the undefeated THANdrew in Week
            4, "The Crime Time Game", Brendan decided he needed to make a move. He would trade a package for a big
            hitter from James, Blue Pianta. Manager Brendan would also receive Blooper in this trade.</Passage>

            <Passage>Blue Pianta would start right away, even getting the start at pitcher, however that backfired badly
            in Week 5. His hitting was good, the pitching was not. Now sitting at 1-4, Brendan knew he had nothing to lose,
            so he decided to start Blooper on the mound for Game 6 against Marge at Yoshi Park, and Blooper was beyond
            ecstatic. Blooper would go out and give the best starting pitcher performance for Brendan this year, going
            through 4.1 innings, and giving up 11 Hits and 3 ER. Not a bad start for the kid in his first game. Blooper
            would also record his 1st ever PMBL hit at his 2nd at bat ever. Once subbed out, Blooper would also make
            great plays at 3rd base to keep the score close, with Brendan eventually winning 7-6.</Passage>

            <Passage>Blooper now found a great new confidence after this game, enough to finally ask his crush out,
            Grayson McKean. Nervously walking to her house, he picked up some flowers on the way, but unfortunately, no
            one was home, and she wasn't answering her phone. Blooper was very upset, as she said she was going to be home.
            Blooper decided to take a detour on the way home to get some food to make himself feel better. While walking
            to get food, he was stopped on the side of the road by a group of fans, chanting "Blooper! Blooper! Blooper!"
            after seeing his performance last game. This made Blooper very happy to see that he touched the lives of many
            people in a positive way.</Passage>

            <Passage>One of those people was the CEO of a startup, whose plan was to build houses in the Galápagos islands,
            and offered Blooper a job. He believed Blooper would be a great fit due to his positive morale and fan favorite
                energy and passion. Blooper was very ecstatic, as he could not only pitch in the big leagues, but also
            get paid to help people near the ocean where he lived. Blooper quickly accepted the job. There has been no
            information about his salary, however his house building job will not get in the way of his PMBL career. Despite
            being categorized as a low level player, Blooper could not be happier with how things are going, and is
            very excited for his next baseball and occupational ventures.
            </Passage>

            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/headlines/draft.jpg" alt="Draft" />
                        <Overlay>
                            <Headline>Season 2 Draft Recap</Headline>
                            <StyledLink to="/headlines/DraftRecap">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
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
            </StoryDiv>
        </ContentDiv>
    );
}