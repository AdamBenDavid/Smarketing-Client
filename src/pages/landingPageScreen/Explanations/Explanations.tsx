import ExplainPictures from "./ExplainPictures";

interface ExplainsProps {
  direction: "row" | "row-reverse"; //row= picture at the left side, row-reverse= picture at the right side
  imageSource: string;
  Header: string;
  text: string;
}

const Explainations: React.FC<ExplainsProps> = ({
  direction,
  imageSource,
  Header,
  text,
}) => {
  let TextLeft: string, TextTop: string;

  if (direction === "row") {
    TextLeft = "67.5px";
    TextTop = "60px";
  } else {
    TextLeft = "0px";
    TextTop = "60px";
  }

  return (
    <div
      className="explain"
      style={{ ...styles.container, flexDirection: direction }}
    >
      <ExplainPictures
        direction={direction}
        imageSource={imageSource}
        text={Header}
      />

      <div className="text" style={styles.text}>
        <p style={styles.paragraph}>{text}</p>
      </div>
    </div>
  );
};

{
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "80px",
    margin: "20px",
    marginRight: "50px",
    marginLeft: "50px",
  },
  text: {
    flex: "1",
    fontSize: "24px",
    color: "#333",
  },
  paragraph: {
    margin: 0,
    padding: 0,
    lineHeight: "1.5",
    direction: "rtl" as const,
    textAlign: "justify" as const,
    fontSize: "24px",
  },
};

export default Explainations;
