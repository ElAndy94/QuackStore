import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Login = () => {
  // Sign in with Google
  const googleProivder = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProivder);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  // Sign in with Facebook
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider); 
      const credential = FacebookAuthProvider.credentialFromResult(result);
      let photoUrl = result.user.photoURL + '?height=500&access_token=' + credential?.accessToken;
      if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            photoURL: photoUrl,
          });
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className='flex flex-row gap-4'>
        <button onClick={googleLogin} className='hover:bg-grey-100'>
          <FcGoogle className="text-2xl" />
        </button>
        <button onClick={facebookLogin} className='hover:bg-grey-100'>
          <AiFillFacebook className="text-2xl text-ultra-marine-blue" />
        </button>
      </div>
  );
};

export default Login;
