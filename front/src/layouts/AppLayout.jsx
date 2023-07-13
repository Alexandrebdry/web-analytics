import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

export default function AppLayout() {

    return (
        <Menu>
            <Outlet/>
        </Menu>
    )
}