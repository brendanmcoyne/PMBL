import {ContentDiv, StyledHeader, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton} from "../../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";
import {styled} from "styled-components";

export const GenImage = styled.img`
    width: 800px;
    height: auto;
    object-fit: contain;
    border: 3px solid black;
    padding: 8px;
    margin: 20px 0;
    background-color: white;
    @media screen and (max-width: 1000px) {
        width: 400px;
    }
`;

export default function KeyPlayers() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>10 Players that look to bounce back</StyledHeader>
            <GenImage src="/headlines/players.jpg" alt="Draft" />
            <ArticleMeta>
                Written by: PMBL News — June 9, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Over the past few seasons, the league has now been able to see firsthand which players are good and which
            players are subpar. However, there are some players that have either regressed or have yet to reach potential. Here
            is a list of 10 players that the league thinks are facing a potential make-or-break season. (Not in order)</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#1: Donkey Kong, <span style={{ color: "#9900FF" }}>Trocean</span></StyledMiniHeader>
            <Passage>It feels weird to say a yearly Top 3 pick is in for a make-or-break season, but that stats justify it. His hitting
            actually went up this past year, going from .500 to .628 but that main issue is his pitching. DK went 7-3 as captain in
            Season 1 with Brendan and in Season 2 with Isaac, and with Isaac posted a respectable 2-2 record and 3.55 ERA through 8 games.
            Last year with Trocean however, his team went a PMBL worst 2-8, went 0-4 on the mound through 10 starts, posting a horrific
            13.15 ERA. He went from giving up 11 earned runs to 57 from Season 2 to Season 3. The Trocean franchise has elected to make
            Diddy Kong their captain instead of Donkey Kong, marking the first time that Donkey Kong will not be a captain. There is
            100% a chip on his shoulder. </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#2: Bob Marley, <span style={{ color: "#FF00FF" }}>Morgan</span></StyledMiniHeader>
            <Passage>One of the best pitchers in the league the first 2 seasons, with a 14-5 record when his team starts him on the mound,
            his ERA went up from 3.65 to 8.17 from Season 2 to Season 3. He still posted a 2-1 record last year for Justave and Marge, however
            the issue is that he only pitched 12 innings last season compared to 53.2 the season before, and gave up half the runs in 12.
            What makes matters worse, Bob Marley was suspended last year for Christians vs Campers due to his pine tar commercial and
            potential usage during games. There is no evidence of him using it in the first 2 seasons, but the usage of it last year
            and large ERA points to some concern. It is unknown whether Morgan will even play him this year at this time.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#3: Sherpa, <span style={{ color: "#9900FF" }}>Trocean</span></StyledMiniHeader>
            <Passage>In the history of PMBL, there has not been a more hyped up rookie than Sherpa. The videos he put out on the internet
            pre-draft night last year proved it. He got drafted to the exact team he wanted to be on in the Jungle. But the honeymoon
            scenario quickly ended, after only batting .267 through 4 games, and posted a 21 ERA in the 1 inning he pitched. With only
            2 RBIs and 2 Runs to show for his offensive input, Trocean thought it was best to trade him for better pieces to Brendan.
            He would not see the field again that year. Fast forward to this year, and Trocean brought him back, giving him another chance
            for success. In pratically the same situation again, will he be able to succeed?</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#4: King Boo, <span style={{ color: "#F1C232" }}>James</span></StyledMiniHeader>
            <Passage>King Boo has always hit the ball fairly well, thats not the issue. The issue is two things, his pitching and his
            clutch factor. His pitching all time is a 13.61 ERA and a 1-3 record, which isn't the worst in the league by any means, but
            is very subpar for how early he gets drafted. The main concern is that hes getting drafted so high but is one of 10 Mario
            characters that has yet to make the playoffs. His ability to bat in runs is fairly low for his stature, only scoring
            17 RBIs in the past 2 years, and only scoring 13 runs for himself. It's only a matter of time until his team makes the playoffs,
            and hes in a good position being with the manager who hasn't missed the playoffs yet.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#5: Red Pianta, <span style={{ color: "#CC0000" }}>Brendan</span></StyledMiniHeader>
            <Passage>When it comes to talking about the 3 Piantas, speculators have wondered if they are top 5 hitters in the league or
            heavily overrated. Blue Pianta silenced the haters last year on Team Isaac the way he performed in the World Series, however Red
            Pianta has always been under heavy scrutiny for never charging his bat, particularly by Trocean. Hes never batting extremely
            poor, as the past 2 years he has hit over .600, the issue is that hes only ever hit 1 home run, which was in garbage time for
            Trocean in Season 2. The RBIs hes scored are fairly decent, double digits both seasons, but the lack of extra base hits may
            be a concerning factor. However, we all know hes been working on his speed since he outrun Justin during a preseason scrimmage.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#6: Yoshi, <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>Undoubtedly the most hated captain out there, Yoshi has yet to truly feel any sort of captaincy love. He was Matts captain
            season 1 when they went 4-6 and he made the playoffs in season 2 with Morgan, but that was heavily in spite of his efforts, and Morgan
            starting winning after Yoshi was benched. He's only appeared in 8 games over the past 2 years, and his pitching is the most
            likely reason he hasn't played more. An 0-2 record with a 14.85 ERA is not going to cut it, especially for a captain who will
            very quickly get subbed in. Hes unfortunately best known for absolutely blowing 2 games on the mound for Morgan in Season 2, leading
            to his benching and Morgans team going on a run. Hes one of 3 captains whose never played in a playoff game (Peach, Mario).</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#7: Mario, <span style={{ color: "#FF00FF" }}>Morgan</span></StyledMiniHeader>
            <Passage>Speaking of which, Mario has been a captain all 3 years and has never seen a winning record. His lackluster batting
            only hitting .410 and a 3-5 record on the mound haven't been super captain worthy in the league. Despite having red squads
            around them, his pitching and hitting just has not been able to elevate the players around him in order to win. He was drafted
            to a Trocean squad Season 2 who was thrust into the role a day before, but the defending champs last year Justave couldn't get
            him into a comfortable role to lead the team alongside Yoshi last year. What makes it worse is that his name is in the leagues
            title, which is not a good look whatsoever.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#8: Grayson McKean, <span style={{ color: "#FF9900" }}>Justave</span></StyledMiniHeader>
            <Passage>Grayson played every single game for Isaac season 1, and then jumped into the final game of Season 2 for Trocean, beating Isaac
            and pitching a complete game. 7 innings pitched, 10 hits, and 3 earned runs only off of 3 solo shots was a very good performance. She
            got the nod for Brendans team in Season 3, but in Game 1, she went 0/3 and was immediately cut in favor of Jake, who played much better.
            Now shes on Justaves team, looking to rebound after last year with many other Pink miis. With their outfield situation unclear at the
            moment, it seems that she will be seeing some playing time this year. Its only a matter of time if the league gets to see if she
            can still be a solid glue guy or needs to be pushed out of the league.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#9: Hammer Bro, <span style={{ color: "#999999" }}>THANdrew</span></StyledMiniHeader>
            <Passage>It is a little hard to put a former World Series MVP in this list, especially because of how amazing he was during that
            series, but last year was a very poor year for a player who was given the reins to the Justave organization once again. His batting
            percentage went below .500, and only hit 2 home runs last season. For their final game of the season, Justave decided to bench him
            after already being eliminated from the playoffs. A move in which franchises do when you are not going to be returning next year. Now
            on THANdrew with some good chemistry, Hammer Bro will definitely be expected to find his Season 2 form when King K doesn't decide to
            start slugging until the 2nd half of the season.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>#10: Wiggler, <span style={{ color: "#3586E8" }}>Isaac</span></StyledMiniHeader>
            <Passage>This may come as a big surprise for some fans, but Wiggler has played in all 30 regular season weeks and has never won
            Game MVP. He was an All-Star in Season 1 and that was it. His batting has been decent, batting above .500 the last 2 seasons,
            but the one speculation about Wiggler and his hitting is his lack of extra base hits. Despite being one of the faster players
            in the league, Wiggler has more strikeouts (3) than doubles (2) all time, which is slightly concerning. Manager Isaac has
            mentioned in the past that Wiggler should be used as a pitcher instead of an infielder. His 2-1 record isnt bad, but his 11.57
            ERA is a little concerning, especially since hes only pitched in 16.1 innings across 7 games. If he is able to figure out his
            struggles now hes back with Petey, he could be dangerous, but many fans are wondering if not having King Boo this year will
            affect him.</Passage>

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