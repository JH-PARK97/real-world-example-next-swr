import { PAGE_ENDPOINTS } from "@/constants/constant";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(useForm().formState);
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href={PAGE_ENDPOINTS.AUTH.LOGIN}>Have an account?</Link>
            </p>

            <ul className="error-messages">{/* <li>exam)That email is already taken</li> */}</ul>

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  {...register("name", {
                    required: "해당 필드는 필수입니다.",
                    minLength: {
                      value: 2,
                      message: "2글자 이상 입력해주세요.",
                    },
                  })}
                />
                {errors?.name && <span className="error-messages">{errors.name?.message}</span>}
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  {...register("email", {
                    required: "이메일을 입력 해주세요.",
                    pattern: {
                      value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                />
                {errors?.email && <span className="error-messages">{errors.email?.message}</span>}
              </fieldset>
              <fieldset className="form-group">
                <input type="password" className="form-control form-control-lg" {...register("password", { required: "비밀번호를 입력 해주세요." , })} />
                {errors?.password && <span className="error-messages">{errors.password?.message}</span>}
              </fieldset>
              <input className="btn btn-lg btn-primary pull-xs-right" value={"Sign up"} type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
