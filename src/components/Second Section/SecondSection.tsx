import MainButton from "../MainButton";
import SeconderyButton from "../SeconderyButton";
import MainSentence from "./MainSentence";

const SecondSection: React.FC = () => {
  return (
    <div style={styles.container} className="second-section">
      <div style={styles.buttonsContainer} className="buttons-container">
        <MainButton text="התחל עכשיו" />
        <SeconderyButton text="גלה עוד" />
      </div>
      <MainSentence />
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    marginRight: "200px",
    justifyContent: "flex-end",
    padding: "0px",
    marginTop: "0px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "right",
  },

  buttonsContainer: {
    flexDirection: "row-reverse" as const,
    display: "flex",
    justifyContent: "right",
    alignItems: "right",
    gap: "16px",
  },
};

export default SecondSection;
