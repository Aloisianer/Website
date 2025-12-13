import Image from "next/image";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

export default function Page() {
  return (
    <div className="fixed overflow-hidden w-screen h-screen bg-black flex flex-col gap-[35vh] items-center justify-center">
      <Image
        src="/2.png"
        width={250}
        height={250}
        alt="Windows Logo"
        className="hover:cursor-none"
      />
      <Ring size={40} speed={2.2} color="#fff" />
    </div>
  );
}
