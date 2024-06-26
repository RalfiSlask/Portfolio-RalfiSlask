import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();
import axios from 'axios';
import SpotifyPlayer from './SpotifyPlayer';

const SpotifySection = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attemptedExchange, setAttemptedExchange] = useState(false);

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    if (code && !attemptedExchange) {
      setAttemptedExchange(true);
      exchangeCodeForToken(code);
    }
  }, [location.search]);

  const exchangeCodeForToken = async (code: string) => {
    try {
      const response = await axios.post('https://server-2tab5.ondigitalocean.app/exchange_token', {
        code,
      });

      const data = response.data;
      console.log(data);
      if (data.access_token) {
        spotifyApi.setAccessToken(data.access_token);
        setIsAuthenticated(true);
        window.history.replaceState(null, '', location.pathname);
      } else {
        throw new Error('Failed to obtain access token');
      }
    } catch (error) {
      console.error('Error exchanging token:', error);
    }
  };

  return (
    <article className="bg-primaryBG shadow-shadow-medium p-6 flex items-center justify-center rounded-[25px] max-w-[500px] w-full min-h-[500px]">
      {!isAuthenticated && <AuthButton />}
      {isAuthenticated && <SpotifyPlayer />}
    </article>
  );
};

export default SpotifySection;
