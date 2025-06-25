import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scrolling() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll instantly to top when path changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}