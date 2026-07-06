import React from "react";

const MusicZone = () => {
  return (
    <div className="aboutme flex flex-col border-2 p-4 border-(--border-color) w-full shadow-blue-950 shadow-[0_0_50px_10px] bg-transparent backdrop-blur-[6px]  ">
      <div className="flex flex-col items-center py-1">
        <p className="text-white text-4xl  text-center italic select-none py-5">
          Music Zone
        </p>
        <span className="longline block w-full h-px bg-(--border-color) "></span>
      </div>

      <div className="h-auto py-5 flex justify-center">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "15px" }}
          src="https://open.spotify.com/embed/playlist/5u4XmlPeEbiDDbxPp57qCQ?utm_source=generator&theme=0&si=14bfed0cb1cd4429"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className=" shadow-blue-950 shadow-[0_10px_30px_1px] "
        ></iframe>
      </div>
    </div>
  );
};

export default MusicZone;
