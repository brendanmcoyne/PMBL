import {ContentDiv, StyledHeader, ArticleMeta, SeparatorLine, Passage, StyledMiniHeader,
    StoryDiv, Stories, Story, MiniImage, StyledLink, Overlay, Headline, ToggleButton, GenImage} from "../../components/headlines/HeadlineStyles";
import {Link} from "react-router-dom";
import {styled} from "styled-components";

export default function Training() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/headlines">← Back</Link>
            </ToggleButton>
            <StyledHeader>Deep Dive into the Justave Process</StyledHeader>
            <GenImage src="/training.jpg" alt="Training" />
            <ArticleMeta>
                Written by: New Donk Post — September 29, 2025
            </ArticleMeta>
            <SeparatorLine />
            <Passage>After several comments quipped in the dugout during Justave’s recent 5-12 loss to Morgan, and the
                league commenting on a potential investigation into harassment and violence in the workplace, team
                Justave invited a reporter from the New Donk Post to observe a practice at their Moo Moo Meadows
                facility in an effort to clear their name of any alleged allegations.</Passage>

            <Passage>The team started their morning with uphill sprints, living up to the comments manager Dave made in
                the 6th inning of the game. After a quick interlude in the weight room, the team closed out their
                morning by hitting the diamond to practice their fielding, tailoring their practice to focus on
                reaction time, explosive speed, and chem plays in the outfield. This strategic emphasis was placed in
                anticipation of playing at Daisy’s cruiser as the Knights hit the road to take on THANdrew’s Spitballs.
            </Passage>

            <Passage>Despite the rather heartless training regiment he instilled, manager Dave demonstrated some
                compassion and treated the team by hiring a personal chef from the luncheon kingdom (who goes by the
                nickname “forky”). “A car runs best on premium,” the managerial team commented, “and our players are no
                different, they need the best fuel.”</Passage>

            <Passage>This treat didn’t stop the team from grinding, however. As they ate, the team reviewed tape,
                studying core tenets that the managerial team had preached. “I love the ambition that our players have,
                but you learn so much by letting the first pitch go by. It’s smarter baseball to work the count than go
                guns blazing,” said manager Justin. He and manager Dave are worried that some of their players will not
                take their advice, as renegades like Koopa have a tendency to do whatever they please.</Passage>

            <Passage>It is important to note that Green Shy Guy, also known around the locker room as Gry Guy, was a
                limited participant in the practice throughout the day, claiming that he tweaked his arm during his
                pitching stint in week 2. Instead of participating in afternoon fielding drills, he was seen performing
                aquatherapy at the team’s olympic sized pool, with teammate Bertha as his physical therapist. Geek squad
                was observed getting a PT session in as well, despite recording no injury and reporting no soreness at
                either the game or practice. </Passage>

            <Passage>Managers at Justave are also highly aware that their most incriminating pick of the draft, Koopa,
                will be cleared from his suspension next week, and could be in line to play Week 4 at home against
                Marge’s Monarchs.</Passage>

            <Passage>All in all, the team appears to have their game faces on as they prepare to face Thandrew’s 2-0
                Spitballs in the upcoming week. With experimental practice regiments, top notch dieting practices,
                constant changes to fielding and batting orders, and controversial players rotating through their
                roster, Knights fans can only be certain of one thing: it’s going to be a show.</Passage>

            <Passage>And with that, the Season 2 Draft comes to an end. The regular season will kick off with the 48 Buswell
                Battle between James and Morgan, with King K Rool back in the house he built, and Petey Piranha going against
                his former team.</Passage>

            <SeparatorLine />
            <StyledMiniHeader>Check out more stories below!</StyledMiniHeader>

            <StoryDiv>
                <Stories>
                    <Story>
                        <MiniImage src="/week2.jpg" alt="Week2" />
                        <Overlay>
                            <Headline>Week 2 Recap</Headline>
                            <StyledLink to="/headlines/Week2Recap">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/corkedbat.jpg" alt="Corked Bat" />
                        <Overlay>
                            <Headline>Corked Bat Allegations Have Caused Outrage</Headline>
                            <StyledLink to="/headlines/CorkedBat">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
                <Stories>
                    <Story>
                        <MiniImage src="/miibaseball.jpg" alt="Mii" />
                        <Overlay>
                            <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                            <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                        </Overlay>
                    </Story>
                </Stories>
            </StoryDiv>
        </ContentDiv>
    );
}