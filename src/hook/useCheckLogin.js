import Cookies from "js-cookie";

const useCurrentUser = () => {
  const isLogin = !!Cookies.get("jwtToken");
  return { login: isLogin };
};

export default useCurrentUser;
