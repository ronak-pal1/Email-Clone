import { Apps, ExpandMore, Menu, Notifications, Search} from "@material-ui/icons";
import "./Header.css"
import { Avatar, IconButton } from "@material-ui/core";


const Header = () => {
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
                
                <Avatar className="avatar"/>
            </div>
        </div>
    );
}

export default Header;