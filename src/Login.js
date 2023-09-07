import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";


const Login = () =>{

    const dispatch = useDispatch();

    const signIn = () =>{
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://freelogopng.com/images/all_img/1682570982gmail-name-logo.png" alt="gmail" />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;