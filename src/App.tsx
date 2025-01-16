import React from "react";
import "./utiles/index.css";
import RegisterBase from "./components/RegisterNexts/RegisterBase";

const App: React.FC = () => {
  return (
    <div style={styles.main}>
      <RegisterBase />
    </div>
  );
};

const styles = {
  main: {
    alignItems: "center",
  },
};

export default App;
