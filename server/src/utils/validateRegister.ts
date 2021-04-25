import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";
import { validateEmail } from "./validateEmail";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!validateEmail(options.email)) {
    return [
      {
        field: "email",
        message: "Please enter a valid email address",
      },
    ];
  }
  if (options.username.length < 3) {
    return [
      {
        field: "username",
        message: "Username must be at least 3 characters",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Username cannot contain the @ character",
      },
    ];
  }
  if (options.password.length < 6) {
    return [
      {
        field: "password",
        message: "Password must be at least 6 characters",
      },
    ];
  }

  return null;
};
