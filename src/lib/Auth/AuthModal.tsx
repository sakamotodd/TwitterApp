import React from "react";
import { auth } from "../../firebase";
import { TextField, Modal, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styles from "../../styles/Auth.module.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const AuthModal = ({
  openModal,
  setOpenModal,
  resetEmail,
  setResetEmail,
  classes,
}) => {
  const sendResetEmail = async (e: React.MouseEvent<HTMLElement>) => {
    await auth
      .sendPasswordResetEmail(resetEmail)
      .then(() => {
        setOpenModal(false);
        setResetEmail("");
      })
      .catch((err) => alert(err.message));
    setResetEmail("");
  };
  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={getModalStyle()} className={classes.modal}>
          <div className={styles.login_modal}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              type="email"
              name="email"
              label="Reset E-mail"
              value={resetEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setResetEmail(e.target.value);
              }}
            />
            <IconButton onClick={sendResetEmail}>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
