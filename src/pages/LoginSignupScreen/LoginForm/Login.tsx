import React from "react";
import styles from "./Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import "boxicons/css/boxicons.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { authService } from '../../../services/auth.service';
import { useNavigate } from "react-router-dom";

type LoginInputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const response = await authService.login(data.email, data.password);
      // Store auth data
      localStorage.setItem('accessToken', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('userId', response._id);
      toast.success("התחברות בוצעה בהצלחה");

      // Redirect to dashboard or profile
      navigate('/profile');
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response.data);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // TODO: Replace with actual Google auth endpoint
      const response = await axios.get("/api/auth/google");
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("ההתחברות עם Google נכשלה. אנא נסה שוב");
    }
  };

  const handleErrors = () => {
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
      toast.error("הסיסמה חייבת להכיל לפחות 6 תווים");
    } else if (errors.password?.type === "pattern") {
      toast.error("הסיסמה חייבת להכיל לפחות אות אחת וספרה אחת");
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit, handleErrors)}
    >
      <ToastContainer />
      <h1>היכנס עכשיו</h1>

      <button
        type="button"
        className={styles.googleButton}
        onClick={handleGoogleLogin}
      >
        <img src="/google-icon.svg" alt="Google" />
        התחבר עם Google
      </button>

      <div className={styles.divider}>
        <span>או</span>
      </div>

      {/* Email */}
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

      {/* Password */}
      <div className={styles.inputBox}>
        <input
          type="password"
          placeholder="סיסמה"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "הסיסמה חייבת להכיל לפחות 6 תווים",
            }
          })}
        />
        <i className="bx bxs-lock-alt"></i>
      </div>

      <button type="submit" className={`${styles.btn} btn`}>
        התחברות
      </button>
    </form>
  );
};

export default LoginForm;
