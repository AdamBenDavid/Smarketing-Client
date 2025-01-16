import React, { useState } from "react";
import LoginForm from "../LoginPage/LoginPage";
import RegisterForm from "../RegisterPage/RegisterPage";
import styles from "./FormsPage.module.css";

const FormsPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  //const navigate = useNavigate();

  const toggleForm = (registerMode: boolean) => {
    setIsRegister(registerMode);
  };

  return (
    <div className={styles.formsPageWrapper}>
      <button className={styles.backButton} onClick={() => {}}>
        &larr; חזרה לדף הבית
      </button>
      {/* <button className={styles.backButton} onClick={() => navigate("/")}>
        &larr; Back to Home
      </button> */}

      <div className={`${styles.container} ${isRegister ? styles.active : ""}`}>
        {/* The two forms:  Login & Register */}
        <div className={`${styles.formBox} ${!isRegister ? "" : "hideLogin"}`}>
          {/* If we are NOT in register mode, show Login */}
          {!isRegister && <LoginForm />}
        </div>

        <div
          className={`${styles.formBox} ${styles.register} ${
            isRegister ? "" : "hideRegister"
          }`}
        >
          {/* If we are in register mode, show Register */}
          {isRegister && <RegisterForm />}
        </div>

        {/* The big toggler box with panels */}
        <div className={styles.toggleBox}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>!איזה כיף שחזרת</h1>
            <p>?אין עדיין משתמש</p>
            <button
              className={`btn ${styles.btn} registerBtn`}
              onClick={() => toggleForm(true)}
            >
              הצטרף עכשיו
            </button>
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>!הצטרף אלינו</h1>
            <p>?יש כבר משתמש</p>
            <button
              className={`btn ${styles.btn} loginBtn`}
              onClick={() => toggleForm(false)}
            >
              התחבר
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
