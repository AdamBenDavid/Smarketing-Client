import React from "react";
import "./utiles/index.css";
import FormsPage from "./components/LoginSignupScreen/FormsPage/FormsPage.tsx";

const App: React.FC = () => {
  return (
    <div style={styles.main}>
      <FormsPage />
    </div>
  );
};

const styles = {
  main: {
    alignItems: "center",
  },
};

export default App;
