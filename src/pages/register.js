import { PAGE_ENDPOINTS } from "@/constants/constant";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { API_URL } from "@/constants/API";
import { useRouter } from "next/router";
import { registerSchema } from "src/validation";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
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
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href={PAGE_ENDPOINTS.AUTH.LOGIN}>Have an account?</Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="form-group">
                <input id="username" type="text" className="form-control form-control-lg" placeholder="Username" {...register("username")} />
                {errors.username && <p className="error-messages">{errors.username?.message}</p>}
              </fieldset>
              <fieldset className="form-group">
                <input id="email" type="text" className="form-control form-control-lg" placeholder="Email" {...register("email")} />
                {errors.email && <p className="error-messages">{errors.email?.message}</p>}
              </fieldset>
              <fieldset className="form-group">
                <input id="password" type="password" className="form-control form-control-lg" placeholder="Password" {...register("password")} />
                {errors.password && <p className="error-messages">{errors.password?.message}</p>}
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
