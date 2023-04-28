import { PAGE_ENDPOINTS } from "@/constants/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
      const response = await fetch(API_URL.AUTH.REGIS, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",

        body: JSON.stringify({
          user: {
            username: input.username,
            email: input.email,
            password: input.password,
          },
        }),
      });
      console.log(response);

      if (response.status !== 200) {
        const { errors } = await response.json();
        Object.keys(errors).map((key) => {
          setError(key, { message: errors[key][0] });
        });
      } else if (response.ok) {
        return router.push(PAGE_ENDPOINTS.AUTH.LOGIN);
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
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href={PAGE_ENDPOINTS.AUTH.REGIS}>Need an account?</Link>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email" />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password" />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
