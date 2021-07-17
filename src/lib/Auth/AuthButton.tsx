import React from "react";
import { Button } from "@material-ui/core";
import { auth, storage } from "../../firebase";
import EmailIcon from "@material-ui/icons/Email";
import { updateUserProfile } from "../../features/userSlice";

const AuthButton = ({
  isLogin,
  email,
  password,
  avatarImage,
  classes,
  username,
  dispatch,
}) => {
  const signInEmail = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const signUpEmail = async () => {
    const authUser = await auth.createUserWithEmailAndPassword(email, password);
    let url = "";
    if (avatarImage) {
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      //array.from => 一個ずつ取り出す処理
      //crypto乱数生成処理
      const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)));
      const result = randomChar.map((random) => S[random % S.length]).join("");
      const fileName = result + "_" + avatarImage.name;
      await storage.ref(`avatars/${fileName}`).put(avatarImage);
      url = await storage.ref("avatars").child(fileName).getDownloadURL();
    }
    //firebase登録
    //reduxに登録
    await authUser.user?.updateProfile({
      displayName: username,
      photoURL: url,
    });
    dispatch(updateUserProfile({ displayName: username, photoUrl: url }));
  };
  return (
    <>
      <Button
        disabled={
          isLogin
            ? !email || password.length < 6
            : !username || !email || password.length < 6 || !avatarImage
        }
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        startIcon={<EmailIcon />}
        onClick={
          isLogin
            ? async () => {
                try {
                  await signInEmail();
                } catch (err) {
                  alert(err.message);
                }
              }
            : async () => {
                try {
                  await signUpEmail();
                } catch (err) {
                  alert(err.message);
                }
              }
        }
      >
        {isLogin ? "Login" : "Register"}
      </Button>
    </>
  );
};

export default AuthButton;
