import Cookies from "js-cookie";

/**
 *
 * @param {string} url
 * @param {import('next').GetServerSidePropsContext?} ctx
 * @returns
 */
export const fetcher = async (url, ctx) => {
  const headers = {
    "Content-Type": "application/json",
  };

  // window가 존재하는 경우 => client
  if (typeof window !== "undefined") {
    const token = Cookies.get("jwtToken");
    if (token) headers.Authorization = `Token ${token}`;
  }
  // ctx가 존재하는 경우 => server
  else if (ctx) {
    const token = ctx.req.cookies["jwtToken"];
    // token까지 있는 경우 Authorization에 token 넣어주기
    if (token) {
      headers.Authorization = `Token ${token}`;
    }
  }
  return await fetch(url, { headers }).then((res) => res.json());
};
