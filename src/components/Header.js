import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES  } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ----- Check user authentication state and dispatch actions accordingly to Redux Store Start -----
        // Why we are doing this here? Because we want authentication every time the page is reloaded and we move this from Body.js because Header is on every page to authentication while navigating become easy.And it will do one more thing is like if user is logged in then it automatically redirects back to the Browser page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component is unmounted
    return () => unsubscribe();
  }, []);

  // ----- Check user authentication state and dispatch actions accordingly to Redux Store End -----
  // Get the User from the Redux Store
  const user = useSelector((store) => store.user);

  // ---- Check user Prefer language
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //-------- If the user Clicked on the Sign Out Button Start ------
  const handleSignOut = () => {
    // Sign Out Logic Here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  //-------- If the user Clicked on the Sign Out Button End ------

  // ------- If the User Clicked on Search Button Start----
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  // ------- If the User Clicked on Search Button Start----

  // --------- Toggle to show the Language -------------
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"></img>

      {/* When User LogIn then show this */}
      {user && (
        <div className="flex p-2 justify-between">
           {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            src={user?.photoURL}
            alt="User-Icon"
          ></img>
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;