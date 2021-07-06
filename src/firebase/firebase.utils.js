import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyD6BDMcwEP_wXrSGtVtBPHM0aB9udYqGg0",
    authDomain: "freetoplay-app.firebaseapp.com",
    projectId: "freetoplay-app",
    storageBucket: "freetoplay-app.appspot.com",
    messagingSenderId: "389164274427",
    appId: "1:389164274427:web:4612ac1197499fc92d965e"
  };

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Se user Auth é igual a null, só retorna
    if (!userAuth) return;
  
    // aqui temos uma ref com a referencia de local
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // aqui temos um snapshot, que irá retornar os dados da ref, se existirem
    const snapShot = await userRef.get();
  
    // se no local da ref não existirem dados, então será criado um user
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        // aqui está sendo criado um user no local onde o ref está apontando
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  


export const auth = firebase.auth();
export const firestore = firebase.firestore();  

// Aqui está a parte de logar com Google
const provider = new firebase.auth.GoogleAuthProvider();// Aqui trazemos o provider com a opção de auth pelo Google
provider.setCustomParameters({prompt: 'select_account'}); // Aparecerá nova janela do Google do tipo POP UP 
export const signInWithGoogle = () => auth.signInWithPopup(provider); // Aqui permitimos que o user logue com a partir do POP UP

/*Podemos no signin.jsx que há o botão "SIGN IN WITH GOOGLE", 
que já funciona com o "onClick={signInWithGoogle}, mas como o App irá 
saber quem está logado ?? Isto está no App.js ( aula 96 )" */

export default firebase;