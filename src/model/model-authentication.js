export const signInWithGoogle = () => {
const provider = new firebase.auth.FacebookAuthProvider();
return firebase.auth().signInWithPopup(provider);
};
