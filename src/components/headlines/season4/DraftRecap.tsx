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

export default function DraftRecap4() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 4 Draft Recap</StyledHeader>
            <GenImage src="/headlines/draft3.jpg" alt="Draft" />
            <ArticleMeta>
                Written by: PMBL News — June 9, 2026
            </ArticleMeta>
            <SeparatorLine />
            <Passage>Despite college being over, PMBL does not stop. All managers are back, and with some new rookies
            being added and some older miis retiring, the league is ready for its 4th season in just 2 years. Get excited
            fans.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #1: <span style={{ color: "#3586E8" }}>Isaac</span></StyledMiniHeader>
            <Passage>To much of the chagrin of the rest of the league, the defending champ of the league was blessed with the #1
            overall pick this year. To no ones surprise, due to his phenomenal play over the past 3 seasons, Petey Piranha would
            go off the board first, become the 3rd different player to ever be selected 1st overall. However to many teams surprise, the synergy
            focused management did not select King Boo, but got Wiggler and Brendan's favorite Blooper for synergy. After a very
            peculiar pick of Red Koopa in the 5th round, Isaac turned to more of an Orange and Yellow based team, with pieces like
            Daisy, Reshiram, Lucia, and Yellow Pianta. A lot of other managers felt as if this team was very unexpected, and are
            intrigued to see how Isaac's sets up his team come game time. Isaac set a record for longest average selection time per pick.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #2: <span style={{ color: "#F1C232" }}>James</span></StyledMiniHeader>
            <Passage>With many lower tiered franchises calling the draft selection rigged, James would have Bowser to fall into his
            lap once again, and have Bowser Jr, Captain of the Year last year, to pair up with him. He'd snag King Boo away from
            Isaac, and also take 2x World Series Champion Yellow Magikoopa. Some of his players like Barry and Blue Yoshi would be
            returning to the franchise after a 1 year hiatus. James has never fielded a Shy Guy in his franchise history, and with
            both Green and Blue Shy Guy on the squad, it looks like that statistic will change. Manager Dave after the draft said
            that this team is the team to beat.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #3: <span style={{ color: "#9900FF" }}>Trocean</span></StyledMiniHeader>
            <Passage>Trocean got put in a tough spot. Despite having the worst record in PMBL history last year at 2-8, and having Donkey
            Kong once again be place in their lap, they decided to run it back. Attempting to recreate the monkey squad, Trocean had a league
            record 7 players from last years squad. Donkey and Diddy would be returning, however this time it has been announced that
            Diddy Kong will be the captain, the first time since Season 1. This would mark the first time that Donkey Kong would not be
            the captain of his own squad, most likely due to his abysmal performance on the mound last year. Fan favorites Gramms and
            Tarzan would be returning, but the main question is about Sherpa. The extremely hyped up rookie last year was traded after 4
            games due to his lackluster performance, so Trocean giving him a 2nd chance but be what he needs. Reports are saying if this
            season is another bust for him, his time on the field could be over.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #4: <span style={{ color: "#999999" }}>THANdrew</span></StyledMiniHeader>
            <Passage>Across draft boards, there was a fair consensus that the Top 4 picks would be DK, Bowser, Peter, and King K. With
            only King K Rool left, THANdrew snagged him with ease. As the draft went on, many managers realized that their squad is eerily
            similar to Marge's team of last year, and they would be correct. Bringing in Luigi, Green Kamek, and 3 Green Miis, the only
            difference between the 2 teams is Blue Kritter instead of Green, and Green Toad instead of Green Shy Guy. They did get Hammer
            Bro however, who has been a staple in the Justave franchise for the past couple of years, and they also got Blue Kamek, who
            will now be returning for a 3rd season to THANdrew. For a team not known for power hitting and more known for pitching
            and defense, THANdrew got a bit of both. However, with how close they are to Marge's squad from last year, many managers
            are saying this team is incredibly "boom or bust".</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #5: <span style={{ color: "#6AA84F" }}>Marge</span></StyledMiniHeader>
            <Passage>This year would be the 3rd time in 4 seasons that Marge would pick 5th overall. A visibly upset Marge would
            be just out of range for a franchise piece like Petey or DK, so they decided to go the pitching route and take Birdo. Their
            draft was very scattered, with good solo pieces like Green Dry Bones and Blue Pianta, but not a ton of synergy. With Purple
            Toad and Michelle Obama, they selected the new rookie Purple Yoshi, which the league is very excited to see play. They'd also
            being in Rookie of the Year runner-up from last years squad Miss Jones, and another new rookie in Charlemagne. The synergy
            is rather scattered across different groups of players, but we'll have to wait and see if Marge can continue the magic
            they had on the 4 game winning streak to end last season in hopes of making their first ever playoffs. </Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #6: <span style={{ color: "#FF9900" }}>Justave</span></StyledMiniHeader>
            <Passage>With Justin missing the draft due to a "managerial vacation" and embarrassment of getting outrun by a Pianta, it
            was left to Dave to draft the squad. For the first time in league history, Funky Kong would go off the board in the 1st round,
            and would not be available for Trocean's monkey squad once again. They would then select Peach in the second round, and from
            there on, it was all Light Blue and Pink characters. Justave set a league record with 7 miis being drafted. Picks 6-12 were
            all Miis. Justave also surprised the league by taking newcomer Light Blue Shy Guy in the 4th round, which the league was also
            very happy to see a new player getting good recognition. Dave mentioned that he hopes to run a 3 mii outfield, and he has 2
            different options for that with 3 Pink miis and 3 Light Blue miis. He drafted Eugene with their final pick, which Eugene
            was thoroughly excited to be drafted when he got the call. He would be traded to Trocean moments later due to locker room
            chemistry.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #7: <span style={{ color: "#CC0000" }}>Brendan</span></StyledMiniHeader>
            <Passage>This year would mark the end of Brendan picking in the Top 2, to many managers delights. Without being able to
            pick Donkey Kong, Bowser, or Petey, he decided to go with Fire Bro, a mix of defense and offense. Brendan came into the draft
            with one idea and he succeeded, grabbing not one but two Bones, Dark Bones and Blue Dry Bones for his team for his outfield.
            The Wario and Waluigi combo would be returning, and Manager Brendan has already stated that Wario will be the captain this year,
            marking the first time that Wario would be the captain of a team. Other than those two and Blue Dry Bones, everyone would be a
            red character except Monty Mole, and other than those 3, every player has never been on the Brendan franchise before. Morgan was
            particularly upset Brendan got MLK in the 11th round, and has already been looking to trade. Brendan hopes to return to the World
            Series this year with his red squad.</Passage>

            <StyledMiniHeader style={{marginBottom: "0"}}>Pick #8: <span style={{ color: "#FF00FF" }}>Morgan</span></StyledMiniHeader>
            <Passage>Morgan would drop to the 8th pick and waste no time in selecting franchise player Dry Bones for the team, and Green
            Kritter. After that, Morgan was very checked out for most of the draft, as the fans of the franchise have been very upset with
            in the past season or two. The fans were however excited to see not one but two Toads on the team, after Green Toad's above
            average hitting performance for Morgans team last year. Fans however were NOT happy to see Red Yoshi come back to the squad,
            which the Morgan faithful have had many horrific memories of Yoshis on their teams in the past. With Mario at the helm and a
            fairly big red base on the team, the synergy does look fairly good, but once again, Morgan did not pick up many big hitters for
            his team, so the fans are hoping that the slap hitting will get them back to a postseason berth.</Passage>

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