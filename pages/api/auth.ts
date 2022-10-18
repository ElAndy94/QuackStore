import { OAuth2Client, LoginTicket, TokenPayload } from 'google-auth-library';

const client: OAuth2Client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export const googleAuth = async (token: any) => {
  const ticket: LoginTicket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  });
  const payload: TokenPayload | undefined = ticket.getPayload();

  if (payload) {
    console.log(`User ${payload.name} authenticated.`);
    const { sub, email, name, picture } = payload;
    const userId = sub;
    return { userId, email, fullName: name, photoUrl: picture };
  } else {
    throw new Error('Google authentication failed.');
  }
};
