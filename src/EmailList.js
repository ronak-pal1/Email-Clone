import { ArrowDropDown, ArrowLeft, ArrowRight, Inbox, Keyboard, LocalOffer, MoreVert, People, Redo, Settings} from "@material-ui/icons";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { useEffect, useState } from "react";
import { db } from "./firebase";

const EmailList = () => {

    const [emails, setEmails] = useState([]);

    useEffect(() => {

        db.collection("email").orderBy("timeStamp", "desc").onSnapshot((snapshot) =>{
            setEmails(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
        
    }, [])

    return (
        <div className="emailList">
            <div className="emailList__tools">
                <div className="emailList__toolsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className="emailList__toolsRight">
                    <IconButton>
                        <ArrowLeft />
                    </IconButton>

                    <IconButton>
                        <ArrowRight />
                    </IconButton>

                    <IconButton>
                        <Keyboard />
                    </IconButton>

                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                    <Section Icon={Inbox} title="Primary" color="red" selected={true} />
                    <Section Icon={People} title="Social" color="#1A73E8" />
                    <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>

            <div className="emailList__list">
                {emails.map(({id, data:{to, subject, message, timeStamp}}) => (
                    <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={new Date(timeStamp?.seconds*1000).toUTCString()} />
                ))}    
            </div>
        </div>
    );
}

export default EmailList;