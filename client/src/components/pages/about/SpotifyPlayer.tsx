const playlistId = '2T33MKoZWrxVmA9ynmDMQ4';

const SpotifyPlayer = () => {
  return (
    <iframe
      title="Spotify Embed: Recommendation Playlist "
      src={`https://open.spotify.com/embed/playlist/2T33MKoZWrxVmA9ynmDMQ4?utm_source=generator&theme=0`}
      height="100%"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="md:w-full xl:w-[400px] h-full bg-blue rounded-2xl shadow-shadow-medium"
    />
  );
};

export default SpotifyPlayer;
