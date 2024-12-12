import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      id: 1,
      desc: "To add horizontal padding by default.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      id: 2,
      desc: "To add horizontal padding by default.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      id: 3,
      desc: "To add horizontal padding by default.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      id: 4,
      desc: "To add horizontal padding by default.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item) => (
        <Card key={item.id} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
