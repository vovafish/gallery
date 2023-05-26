import {
  setDoc,
  serverTimestamp,
  doc,
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from '../lib/firebase.config';

const Firestore = {
  readDocs: (...args) => {
    let docs = [];
    const ref = collection(db, 'stocks');
    return new Promise(async (resolve) => {
      try {
        const spanshots = await getDocs(ref);
        spanshots.forEach((doc) => {
          const d = { ...doc.data() };
          docs.push(d);
        });
        resolve(docs);
      } catch (e) {
        console.log(e);
      }
    });
  },
  writeDoc: (...args) => {
    const [inputs, collection_name] = args;
    return new Promise(async (resolve) => {
      const randomIndex = Math.floor(Math.random() * 100000000);
      try {
        const docRef = doc(db, 'stocks', `${randomIndex}`);
        await setDoc(docRef, {
          title: inputs.title,
          path: inputs.path,
          createAt: serverTimestamp(),
        });
        resolve('new doc successfully inserted');
      } catch (e) {}
    });
  },
};

export default Firestore;
