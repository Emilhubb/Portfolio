"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "../../public/profilephoto.jpeg"

export default function ImageOnly3D() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative w-70 h-100 aspect-3/4 rounded-sm group">
        <CardItem
          translateZ="60"
          className="relative w-full h-full rounded-sm overflow-hidden border border-blue-500/20 shadow-md transition-shadow duration-300 group-hover/card:shadow-2xl"
        >
          <img
            src={Image.src}
            className="w-full h-full object-cover object-center"
            alt="Emil Portfolio Image"
          />
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl pointer-events-none" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500 rounded-tr pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br pointer-events-none" />
          <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
