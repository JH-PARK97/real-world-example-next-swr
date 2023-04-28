import { PAGE_ENDPOINTS } from "@/constants/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { loginSchema } from "src/validation";
import { useForm } from "react-hook-form";
import { API_URL } from "@/constants/API";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (input) => {
    try {
      const response = await fetch(API_URL.AUTH.LOGIN, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",

        body: JSON.stringify({
          user: {
            email: input.email,
            password: input.password,
          },
        }),
      });

      // const { errors, user } = await response.json();
      const { errors, user } = await response.json();

      if (response.status !== 200) {
        Object.keys(errors).map((key) => {
          console.log(errors[key][0]);
          setError(key, { message: errors[key][0] });
        });
        console.log("errors : ", errors);
      } else if (response.ok) {
        const token = user.token;
        Cookies.set("jwtToken", token);
        return router.push(PAGE_ENDPOINTS.ROOT);
      }
    } catch (e) {
      console.log(e);
      return;
    }
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center"> Sign in </h1>
            <p className="text-xs-center">
              <Link href={PAGE_ENDPOINTS.AUTH.REGIS}> Need an account ? </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="form-group">
                <input id="email" type="text" className="form-control form-control-lg" placeholder="Email" {...register("email")} />
                {errors.email && <p className="error-messages"> {errors.email?.message} </p>}
              </fieldset>
              <fieldset className="form-group">
                <input id="password" type="password" className="form-control form-control-lg" placeholder="Password" {...register("password")} />
                {errors["email or password"] && <p className="error-messages"> {"이메일이나 비밀번호가 틀립니다."} </p>}
                {errors.password && <p className="error-messages"> {errors.password?.message} </p>}
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
