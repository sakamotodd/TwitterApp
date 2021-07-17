import { Avatar, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const AuthAvatar = ({classes, isLogin}) => {
  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {isLogin ? "ログイン" : "アカウント登録"}
      </Typography>
    </>
  );
};

export default AuthAvatar;
