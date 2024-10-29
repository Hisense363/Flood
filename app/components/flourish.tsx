"use client";

import { useEffect } from "react";

interface FlourishEmbedProps {
  id: string;
}

export default function FlourishEmbed({ id }: FlourishEmbedProps) {
  useEffect(() => {
    // Load Flourish script
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="flourish-embed flourish-network"
      data-src={`visualisation/${id}`}
    >
      <noscript>
        <img
          src={`https://public.flourish.studio/visualisation/${id}/thumbnail`}
          width="50%"
          height="50"
          alt="network visualization"
        />
      </noscript>
    </div>
  );
}
