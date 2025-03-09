import React from "react";
import styles from "./Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import "boxicons/css/boxicons.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { loginUser, googleSignin } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { AuthResponse } from "../../../types/user";

type LoginInputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const userData = await loginUser(data.email, data.password);
      console.log("User Logged In:", userData);

      if (!userData || !userData.accessToken) {
        throw new Error("Invalid login response: Missing accessToken");
      }

      login(
        {
          _id: userData._id,
          email: data.email,
          fullName: userData.fullName,
          profilePicture: userData.profilePicture,
          role: "user",
          expertise: [],
        },
        userData.accessToken
      );

      toast.success("ברוך הבא!");
      navigate("/profile", { replace: true });
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(
        error instanceof Error ? error.message : "שם משתמש או סיסמה שגויים"
      );
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

  const googleResponseMessage = async (
    credentialResponse: CredentialResponse
  ) => {
    console.log("🔹 Google Credential Response:", credentialResponse);

    try {
      const res: AuthResponse = await googleSignin(credentialResponse);
      console.log("🔹 Google Sign-In Response from Backend:", res);

      if (res.accessToken) {
        const profilePicUrl = res.user.profilePicture
          ? res.user.profilePicture
          : "https://placehold.co/150x150";

        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("userId", res.user._id || "");
        localStorage.setItem("userFullName", res.user.fullName || "");
        localStorage.setItem("profilePicture", profilePicUrl);

        console.log("🔹 Token stored in localStorage:", res.accessToken);
        console.log("🔹 Profile picture stored:", profilePicUrl);

        login(
          {
            _id: res.user._id,
            email: res.user.email,
            fullName: res.user.fullName,
            profilePicture: profilePicUrl,
            role: "user",
            expertise: [],
          },
          res.accessToken
        );

        navigate("/profile", { replace: true });
      } else {
        console.error(" No accessToken received from backend");
      }
    } catch (err) {
      console.error(" Google Sign-in Error:", err);
    }
  };

  const googleErrorMessage = () => {
    console.log("Google error");
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit, handleErrors)}
    >
      <ToastContainer />
      <h1>היכנס עכשיו</h1>

      <GoogleLogin
        onSuccess={googleResponseMessage}
        onError={googleErrorMessage}
      />

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
            },
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
