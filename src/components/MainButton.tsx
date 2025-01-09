interface ButtonProps {
  text: string;
}

const MainButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="register-button" style={styles.button}>
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

  //on button hover:
};

export default MainButton;

// .button:hover {
//     text-decoration: none; /* הקו נעלם כשמעבירים עכבר */
//     color: #007BFF; /* שינוי צבע הטקסט בזמן hover */
//   }

//   .button:focus {
//     outline: none; /* הסרת מסגרת ברירת מחדל */
//   }
