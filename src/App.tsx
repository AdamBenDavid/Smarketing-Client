import React from "react";
import "./utiles/index.css";
import Page from "./components/Page";
import { UserProfile } from "./components/User/UserProfile";

const App: React.FC = () => {
  return (
    <div style={styles.main}>
      {/* <Page/> */}
      <UserProfile />
    </div>
  );
};

const styles = {
  main: {
    alignItems: "center",
  },
};

export default App;
