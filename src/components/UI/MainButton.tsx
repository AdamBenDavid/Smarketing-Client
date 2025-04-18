interface ButtonProps {
  text: string;
  onClick: () => void;
}

const MainButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div>
      <button
        className="register-button"
        style={styles.button}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

const styles = {
  button: {
    width: "132px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#001D3F",
    color: "#FFFFFF",
    fontFamily: "Assistant",
    fontSize: "16px",
    borderColor: "#001D3F",
    margin: "0px 0px",
    gap: "0px",
  },
};

export default MainButton;
