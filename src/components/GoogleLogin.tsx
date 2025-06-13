import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type GoogleUser = {
    name: string;
    email: string;
    picture: string;
};

interface GoogleCredentialResponse {
    credential: string;
    select_by: string;
}

export default function GoogleLogin() {
    const [user, setUser] = useState<GoogleUser | null>(null);

    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    const handleCredentialResponse = (response: GoogleCredentialResponse) => {
        const userObject: GoogleUser = jwtDecode(response.credential);
        setUser(userObject);
        localStorage.setItem("googleUser", JSON.stringify(userObject));
    };

    useEffect(() => {
        if (window.google && window.google.accounts) {
            console.log("Google Client ID:", clientId);

            window.google.accounts.id.initialize({
                client_id: clientId,
                callback: handleCredentialResponse,
            });

            window.google.accounts.id.renderButton(
                document.getElementById("googleSignInDiv")!,
                { theme: "outline", size: "medium" }
            );

            window.google.accounts.id.prompt();
        }
    }, [clientId]);

    useEffect(() => {
        const storedUser = localStorage.getItem("googleUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("googleUser");
        window.google?.accounts.id.disableAutoSelect();
    };

    return (
        <div>
            {user ? (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <img
                        src={user.picture}
                        alt={user.name}
                        style={{ borderRadius: "50%", width: 32, height: 32 }}
                    />
                    <span>{user.name}</span>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            ) : (
                <div id="googleSignInDiv"></div>
            )}
        </div>
    );
}
