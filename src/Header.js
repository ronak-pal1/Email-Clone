import { Apps, ExpandMore, Menu, Notifications, Search} from "@material-ui/icons";
import "./Header.css"
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";


const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });

    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img src="https://freelogopng.com/images/all_img/1682570982gmail-name-logo.png" alt="gmail" />
            </div>

            <div className="header__middle">
                <Search />
                <input type="text" placeholder="Search for mails" />
                <ExpandMore />
            </div>

            <div className="header__right">
                <IconButton>
                    <Apps />
                </IconButton>

                <IconButton>
                    <Notifications />
                </IconButton>
                
                <Avatar src={user?.photoUrl} onClick={signOut} className="avatar"/>
            </div>
        </div>
    );
}

export default Header;