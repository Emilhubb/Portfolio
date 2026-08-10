import React from "react";

const MusicZone = () => {
  return (
    <div className="aboutme flex flex-col border-2 p-4 border-(--border-color) w-full shadow-[0_0_30px_10px_rgba(59,130,246,0.3)] bg-transparent backdrop-blur-[6px]  ">
      <div className="flex flex-col items-center py-1">
        <p className="text-white text-4xl  text-center italic select-none py-5">
          Music Zone
        </p>
        <span className="longline block w-full h-px bg-(--border-color) "></span>
      </div>

      <div className="py-1 mt-5 ">
        <p className="text-zinc-100 text-center italic leading-8 whitespace-pre-line select-none">
          Wanna take a sip of my playlist?
        </p>
      </div>
      <div className="h-auto py-5 flex justify-center">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "15px" }}
          src="https://open.spotify.com/embed/playlist/5u4XmlPeEbiDDbxPp57qCQ?utm_source=generator&theme=0&si=14bfed0cb1cd4429"
          width="100%"
          height="500"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          className=" shadow-[0_0_30px_10px_rgba(59,130,246,0.2)] "
        ></iframe>
      </div>
    </div>
  );
};

export default MusicZone;
