import { styled } from "styled-components";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import "/globals.css";


import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
import Home from "./components/Home.tsx";
import Players from "./components/Players.tsx";
import Managers from "./components/Managers.tsx";
import Archives from "./components/Archives.tsx";
import CurrentSeason from "./components/CurrentSeason.tsx";
import Headlines from "./components/Headlines.tsx";

import Season1 from './components/seasons/Season1.tsx';
import Season2 from './components/seasons/Season2.tsx';

import Awards1 from "./components/seasons/Season1/Awards.tsx";
import Awards2 from "./components/seasons/Season2/Awards.tsx";
import Schedule1 from "./components/seasons/Season1/Schedule.tsx";
import Schedule2 from "./components/seasons/Season2/Schedule.tsx";
import Playoffs1 from "./components/seasons/Season1/Playoffs.tsx";
import Playoffs2 from "./components/seasons/Season2/Playoffs.tsx";
import Standings1 from "./components/seasons/Season1/Standings.tsx";
import Standings2 from "./components/seasons/Season2/Standings.tsx";
import Other1 from "./components/seasons/Season1/Other.tsx";
import Other2 from "./components/seasons/Season2/Other.tsx";
import Draft1 from "./components/seasons/Season1/Draft.tsx";
import Draft2 from "./components/seasons/Season2/Draft.tsx";

import Koopa from "./components/headlines/Koopa.tsx";
import DryBones from "./components/headlines/DryBones.tsx";


const MainContent = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
`;

function Root() {
    const location = useLocation();
    const [showLoading, setShowLoading] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const mainNavPaths = [
        "/",
        "/players",
        "/managers",
        "/archives",
        "/season",
        "/headlines",
    ];

    const isMainNavPage = mainNavPaths.includes(location.pathname);

    const skipNextLoading = useRef(false); //Makes sure that "loading" isn't rendered right after "Welcome!"

    useEffect(() => {
        let earlyCancelTimer: number | null = null;
        let minimumVisibleTimer: number | null = null;

        if (isFirstLoad) {
            setShowLoading(true);
            minimumVisibleTimer = window.setTimeout(() => {
                setShowLoading(false);
                setIsFirstLoad(false);
                skipNextLoading.current = true;
            }, 750);
            return () => {
                if (minimumVisibleTimer) clearTimeout(minimumVisibleTimer);
            };
        }

        if (skipNextLoading.current) {
            skipNextLoading.current = false;
            return;
        }

        if (isMainNavPage) {
            setShowLoading(true); // Show immediately

            // Early cancel: hide if page loads quickly
            earlyCancelTimer = window.setTimeout(() => {
                // If not cancelled in 100ms, lock for 750ms
                minimumVisibleTimer = window.setTimeout(() => {
                    setShowLoading(false);
                }, 750);
            }, 100);

            return () => {
                if (earlyCancelTimer) clearTimeout(earlyCancelTimer);
                if (minimumVisibleTimer) clearTimeout(minimumVisibleTimer);
            };
        }

        setShowLoading(false); // for non-main nav pages
    }, [location.pathname, isMainNavPage, isFirstLoad]);

    return (
        <Wrapper>
            {showLoading && (
                <LoadingScreen message={isFirstLoad ? "Welcome!" : "Loading"} />
            )}
            <Header />
            <Nav />
            <MainContent>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<Content><Players /></Content>} />
                    <Route path="/managers" element={<Content><Managers /></Content>} />
                    <Route path="/archives" element={<Content><Archives /></Content>} />
                    <Route path="/season" element={<Content><CurrentSeason /></Content>} />
                    <Route path="/headlines" element={<Content><Headlines /></Content>} />

                    /* Archives */
                    <Route path="/archives/seasons/Season1" element={<Season1 />} />
                    <Route path="/archives/seasons/Season2" element={<Season2 />} />

                    /* Season 1 */
                    <Route path="/archives/seasons/Season1/Awards" element={<Awards1 />} />
                    <Route path="/archives/seasons/Season1/Schedule" element={<Schedule1 />} />
                    <Route path="/archives/seasons/Season1/Playoffs" element={<Playoffs1 />} />
                    <Route path="/archives/seasons/Season1/Standings" element={<Standings1 />} />
                    <Route path="/archives/seasons/Season1/Other" element={<Other1 />} />
                    <Route path="/archives/seasons/Season1/Draft" element={<Draft1 />} />

                    /* Season 2 */
                    <Route path="/archives/seasons/Season2/Awards" element={<Awards2 />} />
                    <Route path="/archives/seasons/Season2/Schedule" element={<Schedule2 />} />
                    <Route path="/archives/seasons/Season2/Playoffs" element={<Playoffs2 />} />
                    <Route path="/archives/seasons/Season2/Standings" element={<Standings2 />} />
                    <Route path="/archives/seasons/Season2/Other" element={<Other2 />} />
                    <Route path="/archives/seasons/Season2/Draft" element={<Draft2 />} />

                    /* Season 3 */


                    /* Headlines */
                    <Route path="/headlines/Koopa.tsx" element={<Koopa />} />
                    <Route path="/headlines/DryBones.tsx" element={<DryBones />} />
                </Routes>
            </MainContent>
            <Footer/>
        </Wrapper>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}


