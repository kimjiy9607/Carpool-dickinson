import { LOGIN, LOGIN_SUCCESS, FOUND_BAD_WORD, REGISTER } from "../constants/auth-types";
import firebase from '../../firebase/firebaseConfig';

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
    }
});

export const toggleLogin = (payload) => {

    return { type: LOGIN, payload }
};

export const register = (payload) => {
    //TODO implement SIGN UP functionality

};

export const signIn = (payload) => {
    //TODO implement signIn
    return async (dispatch) => {
        const db = firebase.firestore();
        try{
            const response =  await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
            dispatch({type: LOGIN_SUCCESS, payload: response});
        }
        catch (err){
            console.log('dispatch error', err);
        }
    }
};

export const registerSuccess = (response) =>{
    //TODO call if the above register was successful
}
export const registerFail = (response) =>{
    //TODO call if the above register was failed
}
export const signInSuccess = (response) =>{
    //TODO call if the above sign in was successful
}
export const signInFail = (response) =>{
    //TODO call if the above sign in failed
}
