import UpdatedStandings from "../components/UpdatedStandings.tsx";
import { ToggleButton } from "../components/CommonStyles.ts";
import {Link} from "react-router-dom";

export default function FullStats () {
    return (
        <>
            <ToggleButton>
                <Link style={{color: "white"}} to="/season">← Back</Link>
            </ToggleButton>
            <UpdatedStandings/>
        </>
    );
}