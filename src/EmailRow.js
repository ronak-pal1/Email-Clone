import { Checkbox, IconButton } from "@material-ui/core";
import "./EmailRow.css";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({id, title, subject, description, time}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const openMail = () =>{
        dispatch(selectMail({
            id, title, subject, description, time,
        }))

        navigate("/mail");
    }

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <div className="emailRow__title">{title}</div>

            <div className="emailRow__message">
                <h4>{subject}</h4> {" "}
                <span className="emailRow__description">-
                    {description}
                </span>
            </div>

            <p className="emailRow__time">{time}</p>
        </div>
    );
}

export default EmailRow;