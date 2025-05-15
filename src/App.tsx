import { styled } from "styled-components";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import Home from "./components/Home.tsx";
import Players from "./components/Players.tsx";
import Managers from "./components/Managers.tsx";
import Archives from "./components/Archives.tsx";
import Schedule from "./components/Schedule.tsx";
import Headlines from "./components/Headlines.tsx";


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
    return (
        <Wrapper>
            <Header />
            <Nav />
            <MainContent>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<Content><Players /></Content>} />
                    <Route path="/managers" element={<Content><Managers /></Content>} />
                    <Route path="/archives" element={<Content><Archives /></Content>} />
                    <Route path="/schedule" element={<Content><Schedule /></Content>} />
                    <Route path="/headlines" element={<Content><Headlines /></Content>} />
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


