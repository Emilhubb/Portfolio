"use client";

import { useState } from "react";

const playlistUrl =
  "https://open.spotify.com/embed/playlist/5u4XmlPeEbiDDbxPp57qCQ?utm_source=generator&theme=0";

export default function SpotifyEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        title="Emil's Spotify playlist"
        src={playlistUrl}
        width="100%"
        height="500"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="rounded-[15px] shadow-[0_0_30px_10px_rgba(59,130,246,0.2)]"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      className="w-full min-h-32 rounded-[15px] border border-(--border-color) bg-black/40 px-5 py-8 text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
    >
      Load Spotify playlist
    </button>
  );
}
