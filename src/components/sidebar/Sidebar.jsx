import "./sidebar.scss"
import Dashboard from "@mui/icons-material/Dashboard";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import Store from "@mui/icons-material/Store";
import CreditCardOutlined from "@mui/icons-material/CreditCardOutlined";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Assessment from "@mui/icons-material/Assessment";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <Dashboard className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutlineOutlined className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <Store className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <CreditCardOutlined className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <Assessment className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlined className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="theme" onClick={() => dispatch({type:"LIGHT"})}></div>
            <div className="theme" onClick={() => dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar