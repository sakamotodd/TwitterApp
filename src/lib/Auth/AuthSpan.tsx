import React from "react";
import { Grid } from "@material-ui/core";
import styles from "../../styles/Auth.module.css";
import { auth, provider} from "../../firebase";
const AuthSpan = ({ isLogin, setOpenModal, setIsLogin, classes }) => {
  const signInGoogle = async () => {
    await auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <>
      <Grid container>
        <Grid item xs>
          <span
            className={styles.login_reset}
            onClick={() => setOpenModal(true)}
          >
            パスワード忘れた場合はこちら
          </span>
        </Grid>
        <Grid item xs>
          <span
            className={styles.login_toggleMode}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "新規アカウント作成はこちら" : "ログイン画面はこちら"}
          </span>
        </Grid>
      </Grid>
      <div className={classes.paper}>
        <img
          src="btn_google_signin_dark_pressed_web.png"
          aria-label="google"
          onClick={signInGoogle}
        />
      </div>
    </>
  );
};

export default AuthSpan;
