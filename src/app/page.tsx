"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  px-4 overflow-hidden">
      <h1 className="text-center text-5xl md:text-7xl font-bold font-bricolage leading-tight">
        Unlock your full potential
        <br />
        with notepad.
      </h1>

      <p className=" text-center mt-4 max-w-xl font-bricolage">
        Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>

      <div className="mt-8 flex gap-4">
        <Button size="lg" className="bg-white text-black border ">
          Try Now
        </Button>
        <Button size="lg" className="bg-black border border-white text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
}
