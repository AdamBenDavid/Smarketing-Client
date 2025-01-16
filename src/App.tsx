import React from "react";
import "./utiles/index.css";
import Page from "./components/Page";
import { UserProfile } from "./components/User/UserProfile";
import LoginForm from "./components/LoginSignupScreen/LoginPage/LoginPage";

const App: React.FC = () => {
  return (
    <div style={styles.main}>
      {/* <Page/> */}
      <UserProfile />
      {/* <LoginForm/> */}
    </div>
  );
};

const styles = {
  main: {
    alignItems: "center",
  },
};

export default App;
