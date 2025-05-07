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


const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: stretch;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 70%;
`;

const Wrapper = styled.div`
    width: 100vw;
    margin: 0 auto;
`;

function Root() {
    return (
        <Wrapper>
            <Header />
            <MainContent>
                <Nav />
                <Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/players" element={<Players />} />
                        <Route path="/managers" element={<Managers />} />
                        <Route path="/archives" element={<Archives />} />
                        <Route path="/schedule" element={<Schedule />} />
                    </Routes>
                </Content>
            </MainContent>
            <Footer/>
        </Wrapper>

    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}


