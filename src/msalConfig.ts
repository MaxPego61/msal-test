import type { Configuration } from "@azure/msal-browser";
import { LogLevel } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
    authority: "https://login.microsoftonline.com/common",
    redirectUri: import.meta.env.VITE_REDIRECT_URI
  },
  cache: {
    cacheLocation: "localStorage"
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Info,
      loggerCallback: () => {}
    }
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};
