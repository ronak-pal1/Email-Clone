import { Button } from "@material-ui/core";
import "./Sidebar.css";
import { Add, ExpandMore, Inbox, Info, LabelImportant, SendOutlined, Star } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">Compose</Button>
            <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={Star} title="Starred" number={54} />
            <SidebarOption Icon={SendOutlined} title="Sent" number={54} />
            <SidebarOption Icon={Info} title="Spam" number={54} />
            <SidebarOption Icon={LabelImportant} title="Important" number={54} />
            <SidebarOption Icon={ExpandMore} title="More" number="" />
        </div>
    );
}

export default Sidebar;