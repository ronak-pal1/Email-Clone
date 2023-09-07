import { Button, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import { Add, Duo, ExpandMore, Inbox, Info, LabelImportant, Person, Phone, SendOutlined, Star } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button startIcon={<Add fontSize="large" />} className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>Compose</Button>

            <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={Star} title="Starred" number={54} />
            <SidebarOption Icon={SendOutlined} title="Sent" number={54} />
            <SidebarOption Icon={Info} title="Spam" number={54} />
            <SidebarOption Icon={LabelImportant} title="Important" number={54} />
            <SidebarOption Icon={ExpandMore} title="More" number="" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>

                    <IconButton>
                        <Duo />
                    </IconButton>

                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;