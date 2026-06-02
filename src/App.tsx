import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./msalConfig";

function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const login = () => {
    instance.loginRedirect(loginRequest);
  };

  const logout = () => {
    instance.logoutPopup();
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>MSAL Test Login</h1>

      {!isAuthenticated && (
        <button onClick={login}>Login con Microsoft</button>
      )}

      {isAuthenticated && (
        <>
          <p>Login effettuato!</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
