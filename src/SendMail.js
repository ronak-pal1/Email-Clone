import { Close } from "@material-ui/icons";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import { useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

const SendMail = () =>{

    const {register, handleSubmit, formState:{errors}} = useForm();

    const dispatch = useDispatch();

    const onSubmit = (formData) =>{

        db.collection("email").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>

            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" type="email" {...register('to',{required: true})}/>
                {errors.to && <p className="sendMail__error">To is required!</p>}

                <input placeholder="From" type="text" {...register('subject',{required: true})}/>
                {errors.subject && <p className="sendMail__error">Subject is required!</p>}

                <input placeholder="Message..." type="text" className="sendMail__message" {...register('message',{required: true})}/>
                {errors.message && <p className="sendMail__error"> Write a message please</p>}

                
                <div className="sendMail__options">
                    <Button className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>
            </form>

        </div>
    );
}

export default SendMail;