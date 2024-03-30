// AuthButton.tsx
import React from 'react';
import SpotifyIcon from '../../../assets/icons/spotify.svg';

const client_id = 'a628d6843b964ec3a71f2d06d3b71581';
const redirect_uri = encodeURIComponent('https://ralfislask-portfolio-i3rvj.ondigitalocean.app/');
const scope = encodeURIComponent('streaming user-read-email user-read-private');
const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scope}`;

const AuthButton: React.FC = () => {
  const handleLogin = () => {
    window.location.href = spotifyAuthUrl;
  };

  return (
    <div className="flex flex-col gap-6 items-center group cursor-pointer">
      <button
        onClick={handleLogin}
        className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] transition-text duration-300 ease-in-out group-hover:text-blueColor"
      >
        Log in with Spotify
      </button>

      <img src={SpotifyIcon} alt="spotify" width="50" height="50" />
    </div>
  );
};

export default AuthButton;
