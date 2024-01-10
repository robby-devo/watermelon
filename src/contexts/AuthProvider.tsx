import * as React from "react";

const AuthContext: any = React.createContext({});

interface AuthProviderProps {
  children: JSX.Element;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = React.useState<any>({});

  const providerValue = React.useMemo(
    () => ({ auth, setAuth }),
    [auth, setAuth]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
