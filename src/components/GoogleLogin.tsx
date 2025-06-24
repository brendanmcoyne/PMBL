import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import styled from "styled-components";

type GoogleUser = {
    name: string;
    email: string;
    picture: string;
};

const SignButton = styled.span`
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    padding-right: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

const UserName = styled.span`
    color: white;
    font-weight: 600;
`;

const ProfImage = styled.img`
    background-color: white;
    border: 1px solid white;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Divider = styled.div`
    width: 1px;
    height: 24px;
    background-color: black;
    margin: 0 8px;
`;

export default function GoogleLogin() {
    const [user, setUser] = useState<GoogleUser | null>(null);
    const [selectedCaptain, setSelectedCaptain] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("googleUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        const storedCaptain = localStorage.getItem("selectedCaptain");
        if (storedCaptain) {
            setSelectedCaptain(storedCaptain);
        }
    }, []);

    useEffect(() => {
        const updateCaptain = () => {
            const storedCaptain = localStorage.getItem("selectedCaptain");
            setSelectedCaptain(storedCaptain);
        };

        window.addEventListener("captainChanged", updateCaptain);
        return () => {
            window.removeEventListener("captainChanged", updateCaptain);
        };
    }, []);

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const { access_token } = tokenResponse;
                const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });

                const userObject: GoogleUser = {
                    name: userInfo.data.name,
                    email: userInfo.data.email,
                    picture: userInfo.data.picture,
                };

                setUser(userObject);
                localStorage.setItem("googleUser", JSON.stringify(userObject));
            } catch (error) {
                console.error("Failed to fetch user info", error);
            }
        },
        onError: () => {
            console.error("Login Failed");
        },
    });

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("googleUser");
    };

    const captainImages: Record<string, string> = {
        "Birdo": "/emblems/MSS-Emblem-BirdoBows.webp",
        "Bowser Jr": "/emblems/MSS-Emblem-BowserJr.webp",
        "Bowser": "/emblems/MSS-Emblem-BowserMonsters.webp",
        "Daisy": "/emblems/MSS-Emblem-DaisyFlowers.webp",
        "Diddy Kong": "/emblems/MSS-Emblem-DiddyMonkeys.webp",
        "Donkey Kong": "/emblems/MSS-Emblem-DKWilds.webp",
        "Luigi": "/emblems/MSS-Emblem-LuigiKnights.webp",
        "Mario": "/emblems/MSS-Emblem-MarioFireballs.png",
        "Peach": "/emblems/MSS-Emblem-PeachMonarchs.png",
        "Waluigi": "/emblems/MSS-Emblem-WaluigiSpitballs.webp",
        "Wario": "/emblems/MSS-Emblem-WarioMuscles.webp",
        "Yoshi": "/emblems/MSS-Emblem-YoshiEggs.webp",
    };

    return (
        <Container>
            {user ? (
                <>
                    <UserInfo>
                        <ProfImage
                            src={
                                selectedCaptain && captainImages[selectedCaptain]
                                    ? captainImages[selectedCaptain]
                                    : !selectedCaptain
                                        ? "/LeagueLogo_noWords.png"
                                        : user.picture
                            }
                            alt={user.name}
                            style={{ borderRadius: "50%", width: 32, height: 32, objectFit: "cover" }}
                        />
                        <UserName>{user.name}</UserName>
                    </UserInfo>
                    <Divider />
                    <SignButton onClick={handleLogout}>Sign Out</SignButton>
                </>
            ) : (
                <SignButton onClick={() => login()}>Sign In</SignButton>
            )}
        </Container>
    );
}
