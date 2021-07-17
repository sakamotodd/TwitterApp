import React from "react";
import { CssBaseline, Paper, Grid } from "@material-ui/core";
import { NextPage } from "next";
import { useStyles } from "../styles/AuthMaterialStyle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AuthAvatar from "../lib/Auth/AuthAvatar";
import AuthUserName from "../lib/Auth/AuthUserName";
import AuthEmailPassword from "../lib/Auth/AuthEmailPassword";
import AuthButton from "../lib/Auth/AuthButton";
import AuthSpan from "../lib/Auth/AuthSpan";
import AuthModal from "../lib/Auth/AuthModal";

const Auth: NextPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <AuthAvatar classes={classes} isLogin={isLogin} />
          <form className={classes.form} noValidate>
            <AuthUserName
              username={username}
              setUsername={setUsername}
              avatarImage={avatarImage}
              setAvatarImage={setAvatarImage}
              isLogin={isLogin}
            />
            <AuthEmailPassword
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <AuthButton
              isLogin={isLogin}
              email={email}
              password={password}
              avatarImage={avatarImage}
              classes={classes}
              username={username}
              dispatch={dispatch}
            />
            <AuthSpan
              isLogin={isLogin}
              setOpenModal={setOpenModal}
              setIsLogin={setIsLogin}
              classes={classes}
            />
          </form>
          <AuthModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            resetEmail={resetEmail}
            setResetEmail={setResetEmail}
            classes={classes}
          />
        </div>
      </Grid>
    </Grid>
  );
};
export default Auth;
