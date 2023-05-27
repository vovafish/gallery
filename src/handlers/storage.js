import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../lib/firebase.config';

const Storage = {
  uploadFile: (media) => {
    return new Promise(async (resolve) => {
      try {
        const mediaRef = ref(storage, `images/${media.title}`);
        uploadBytes(mediaRef, media.file).then((spanshot) => {
          resolve({ path: spanshot.metadata.fullPath, name: media.title });
        });
      } catch (e) {
        console.error(e);
      }
    });
  },
};

export default Storage;
