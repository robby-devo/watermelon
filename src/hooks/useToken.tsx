import { useState } from "react";

const useToken = () => {
  const getSessionToken: () => string | null = () => {
    const sessionTokenString = sessionStorage.getItem("token");
    if (sessionTokenString) {
      const usersessionToken = JSON.parse(sessionTokenString);
      return usersessionToken;
    }
    return null;
  };

  const [sessionToken, setSessionToken] = useState<string | null>(
    getSessionToken()
  );

  const saveSessionToken: (userSessionToken: string) => void = (
    userSessionToken: string
  ) => {
    sessionStorage.setItem("token", JSON.stringify(userSessionToken));
    setSessionToken(userSessionToken);
  };

  //clear the token on logout
  const removeSessionToken: () => void = () => {
    sessionStorage.removeItem("token");
    setSessionToken(null);
  };

  return {
    saveSessionToken,
    removeSessionToken,
    sessionToken,
  };
};

export default useToken;
