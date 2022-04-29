import React, { useEffect } from 'react';
import spotifyApi from '../lib/spotifyApi';
import { signIn, useSession } from 'next-auth/react';
const useSpotify = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);
  return spotifyApi;
};

export default useSpotify;
//Custom hooks


