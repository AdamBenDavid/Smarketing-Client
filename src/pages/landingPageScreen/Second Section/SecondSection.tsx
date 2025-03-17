import MainButton from "../../../components/UI/MainButton";
import SeconderyButton from "../../../components/UI/SeconderyButton";
import MainAnimation from "./MainAnimation";
import MainSentence from "./MainSentence";

const SecondSection: React.FC = () => {
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
          <MainButton text="התחל עכשיו" onClick={() => {}} />
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
    alignItems: "center",
    width: "100%",
    padding: "50px",
    paddingTop: "0px",
    gap: "10px",
    boxSizing: "border-box" as const,
    margin: "0px",
    justifyContent: "center",
  },

  rightSection: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex",
    maxWidth: "60%",
  },

  buttonsContainer: {
    display: "flex",
    gap: "16px",
    width: "100%",
    justifyContent: "flex",
  },

  leftSection: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "40%",
    boxSizing: "border-box" as const,
  },
};

export default SecondSection;
