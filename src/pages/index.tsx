import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../features/userSlice";
import { auth } from "../firebase";
import { useEffect } from "react";
import Auth from "../components/Auth";
import Feed from "../components/Feed";

const IndexPage: NextPage = () => {
  //ユーザーのstateを取得する => useSelectorで初期値を取得
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsub();
    };
  }, [dispatch]);

  return (
    <>
      {user.uid ? (
        <div className={styles.app}>
          <Feed />
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default IndexPage;
