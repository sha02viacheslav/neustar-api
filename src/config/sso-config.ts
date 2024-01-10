import { Secrets } from 'src/main';
import { environment } from 'src/environment';

export const SsoConfig = (code) => {
  return {
    client_id: environment.local ? process.env.SSO_CLIENT_ID : Secrets.ssoClientId,
    scope: process.env.SSO_SCOPE,
    grant_type: process.env.SSO_GRANT_TYPE,
    redirect_uri: process.env.SSO_REDIRECT_URI,
    client_secret: environment.local ? process.env.SSO_CLIENT_SECRET : Secrets.ssoClientSecret,
    code,
  };
};
