import Cookies from "js-cookie";

const checkLogin = () => {
  const isLogin = !!Cookies.get("jwtToken");
  return { login: isLogin };
};

export default checkLogin;
