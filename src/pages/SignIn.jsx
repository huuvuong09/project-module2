import { auth } from "firebase-app/firebase-config";
import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Authen from "./Authen";
import { useForm } from "react-hook-form";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { Button } from "components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputPassWord from "components/input/InputPassWord";
// import { useAuth } from "contexts/auth-context";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter a valid email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter a valid password"),
});

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleSignIn = async (values) => {
    if (!isValid) return;
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/");
    } catch (error) {
      if (error.message.includes("wrong-password"))
        toast.error("It seems your password was wrong");
    }
  };

  return (
    <Authen>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            control={control}
          ></Input>
          <Label htmlFor="email">PassWord</Label>
          <InputPassWord control={control}></InputPassWord>
        </Field>
        <div className="have-account">
          You have not an account?
          <NavLink to={"/sign-up"}>Register an account</NavLink>
        </div>
        <Button
          type="submit"
          className="w-full max-w-[300px] mx-auto"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Login
        </Button>
      </form>
    </Authen>
  );
};

export default SignIn;
