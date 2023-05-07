import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyBuUA6kJizZCZd8LZzCGELe0rSKh5uVcCo",
	authDomain: "blog-fb97f.firebaseapp.com",
	projectId: "blog-fb97f",
	storageBucket: "blog-fb97f.appspot.com",
	messagingSenderId: "989381407181",
	appId: "1:989381407181:web:e7ade2f3010b3257ef5484"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }