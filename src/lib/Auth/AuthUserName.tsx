import { TextField, Box, IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "../../styles/Auth.module.css";

const AuthUserName = ({
  username,
  setUsername,
  avatarImage,
  setAvatarImage,
  isLogin,
}) => {

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setAvatarImage(e.target.files![0]);
      e.target.value = "";
    }
  };

  return (
    <>
      {!isLogin && (
        <>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
          <Box textAlign="center">
            <IconButton>
              <label>
                <AccountCircleIcon
                  fontSize="large"
                  className={
                    avatarImage
                      ? styles.login_addIconLoaded
                      : styles.login_addIcon
                  }
                />
                <input
                  className={styles.login_hiddenIcon}
                  type="file"
                  onChange={onChangeImage}
                />
              </label>
            </IconButton>
          </Box>
        </>
      )}
    </>
  );
};

export default AuthUserName;
