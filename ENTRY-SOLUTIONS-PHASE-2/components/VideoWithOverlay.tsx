"use client";

import { useRef, useState } from "react";

interface Props {
  src: string;
  poster: string;
  portrait?: boolean;
}

export default function VideoWithOverlay({
  src,
  poster,
  portrait = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-xl border bg-black ${
        portrait ? "max-w-md mx-auto w-full" : ""
      }`}
    >
      {/* Aspect ratio wrapper for portrait */}
      {portrait ? (
        <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            controls
            muted
            playsInline
            preload="none"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Overlay */}
          {!playing && (
            <Overlay onClick={handlePlay} />
          )}
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full h-auto"
            controls
            muted
            playsInline
            preload="none"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
          </video>

          {!playing && (
            <Overlay onClick={handlePlay} />
          )}
        </>
      )}
    </div>
  );
}

function Overlay({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Play video"
      className="
        absolute inset-0 flex items-center justify-center
        bg-black/30 backdrop-blur-sm
        transition-opacity duration-300
        hover:bg-black/40
        group
      "
    >
      <div
        className="
          flex items-center justify-center
          w-20 h-20 md:w-24 md:h-24
          rounded-full
          bg-white/90 backdrop-blur
          shadow-2xl
          group-hover:scale-105
          transition-transform
          animate-pulse
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 text-blue-700 ml-1"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  );
}
