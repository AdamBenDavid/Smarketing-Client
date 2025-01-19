import React from "react";
import styles from "./RegisterPage.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import "boxicons/css/boxicons.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log("Submitted data:", data);
  };

  const handleErrors = () => {
    // הודעות שגיאה לשם משתמש
    if (errors.username?.type === "required") {
      toast.error("יש להזין שם משתמש");
    } else if (errors.username?.type === "minLength") {
      toast.error("שם משתמש חייב להכיל 3 תווים לפחות");
    }

    // הודעות שגיאה למייל
    if (errors.email?.type === "required") {
      toast.error("יש להזין כתובת מייל");
    } else if (errors.email?.type === "pattern") {
      toast.error("יש להזין כתובת מייל חוקית");
    }

    // הודעות שגיאה לסיסמה
    if (errors.password?.type === "required") {
      toast.error("יש להזין סיסמה");
    } else if (errors.password?.type === "minLength") {
      toast.error("סיסמה חייבת להכיל 6 תווים לפחות");
    } else if (errors.password?.type === "pattern") {
      toast.error(
        "הסיסמה חייבת להכיל לפחות אות גדולה, אות קטנה, מספר ותו מיוחד"
      );
    }

    // הודעות שגיאה לאימות סיסמה
    if (errors.confirmPassword?.type === "required") {
      toast.error("יש לאמת סיסמה");
    } else if (errors.confirmPassword?.type === "validate") {
      toast.error("הסיסמאות אינן תואמות");
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit, handleErrors)}
    >
      <ToastContainer />
      <h1>הרשמה</h1>

      {/* username (Required) */}
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="שם משתמש"
          {...register("username", {
            required: true,
            minLength: {
              value: 3,
              message: "שם משתמש חייב להכיל 3 תווים לפחות",
            },
          })}
        />
        <i className="bx bx-user"></i>
      </div>

      {/* Email (Required) */}
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="מייל"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "יש להזין כתובת מייל חוקית",
            },
          })}
        />
        <i className="bx bx-envelope"></i>
      </div>

      {/* Password (Required) */}
      <div className={styles.inputBox}>
        <input
          type="password"
          placeholder="סיסמה"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "סיסמה חייבת להכיל 6 תווים לפחות",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message:
                "הסיסמה חייבת להכיל לפחות אות גדולה, אות קטנה, מספר ותו מיוחד",
            },
          })}
        />
        <i className="bx bxs-lock-alt"></i>
      </div>

      {/* Confirm Password (Required) */}
      <div className={styles.inputBox}>
        <input
          type="password"
          placeholder="אימות סיסמה"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === watch("password") || "הסיסמאות אינן תואמות",
          })}
        />
        <i className="bx bxs-lock-alt"></i>
      </div>

      <button type="submit" className={`${styles.btn} btn`}>
        הרשמה
      </button>
    </form>
  );
};

export default RegisterForm;
