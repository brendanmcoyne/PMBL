import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/players">Players</Link>
                </li>
                <li>
                    <Link to="/managers">Managers</Link>
                </li>
                <li>
                    <Link to="/managers">History</Link>
                </li>
                <li>
                    <Link to="/managers">Schedule</Link>
                </li>
            </ul>
        </nav>
    )
}