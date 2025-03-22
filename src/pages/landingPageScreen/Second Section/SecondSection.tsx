import { useNavigate } from "react-router-dom";
import MainButton from "../../../components/UI/MainButton";
import SeconderyButton from "../../../components/UI/SeconderyButton";
import MainAnimation from "./MainAnimation";
import MainSentence from "./MainSentence";

const SecondSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = () => {
    const targetSection = document.getElementById("explanations");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="second-section" style={styles.section}>
      <div style={styles.rightSection}>
        <div style={styles.buttonsContainer}>
          <MainButton
            text="התחל עכשיו"
            onClick={() => {
              const token = localStorage.getItem("token");
              if (token) {
                navigate("/profile");
              } else {
                navigate("/forms");
              }
            }}
          />
          <SeconderyButton text="גלה עוד" onClick={scrollToSection} />
        </div>
        <MainSentence />
      </div>

      <div style={styles.leftSection} className="left-section">
        <MainAnimation />
      </div>
    </div>
  );
};

const styles = {
  section: {
    direction: "rtl" as const,
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    width: "100%",
    padding: "30px",
    gap: "30px",
    justifyContent: "center",
    boxSizing: "border-box" as const,
  },

  rightSection: {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
    maxWidth: "600px",
    flex: "1",
  },

  buttonsContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "16px",
    width: "100%",
    justifyContent: "flex-start",
  },

  leftSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    minWidth: "280px",
    boxSizing: "border-box" as const,
  },
};

export default SecondSection;
