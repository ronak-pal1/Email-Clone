import { useNavigate } from "react-router-dom";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, LabelImportantOutlined, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

const Mail = () => {

    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBack />
                    </IconButton>

                    <IconButton>
                        <MoveToInbox />
                    </IconButton>

                    <IconButton>
                        <Error />
                    </IconButton>

                    <IconButton>
                        <Delete />
                    </IconButton>

                    <IconButton>
                        <Email />
                    </IconButton>

                    <IconButton>
                        <WatchLater />
                    </IconButton>

                    <IconButton>
                        <CheckCircle />
                    </IconButton>

                    <IconButton>
                        <LabelImportant />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className="mail_toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>

                    <IconButton>
                        <Print />
                    </IconButton>

                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>

            <div className="mail__body">

                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantOutlined className="mail__important"></LabelImportantOutlined>
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.time}</p>
                </div>
                
                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;