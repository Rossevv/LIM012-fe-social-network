// REGISTRO DE USUARIO
export const signUp = (emailRegister, passwordRegister) => {
    firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister)
}

// INICIO DE SESIÓN
export const signIn = (emailLogin, passwordLogin) => {
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
}

// CERRAR SESIÓN
export const signOut = () => {
    firebase.auth().signOut()
}

// INICIO DE SESIÓN CON GOOGLE
export const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}

// INICIO DE SESIÓN CON FACEBOOK
export const signInFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}