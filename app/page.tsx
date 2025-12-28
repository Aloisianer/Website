"use client";

import Link from "next/link";
import * as FIcon from "react-feather";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 0.75, rotateZ: 30, rotateX: 0, opacity: 0.5 }}
        animate={{ scale: 2, rotateZ: -15, rotateX: 15, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="transform-3d text-4xl font-semibold z-20"
      >
        {"Hallllo! 👋"}
      </motion.div>
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.75 }}
        className="absolute bottom-10 text-lg font-medium flex justify-center gap-2 z-20"
      >
        <LinkButton link="https://github.com/Aloisianer">
          <FIcon.GitHub />
          GitHub
        </LinkButton>
        <LinkButton link="https://methanium.net">
          <FIcon.Globe />
          Methanium
        </LinkButton>
        <LinkButton link="https://tensamin.net">
          <FIcon.Shield />
          Tensamin
        </LinkButton>
      </motion.div>
      <div className="fixed top-0 left-0 flex p-5 h-screen w-screen items-center">
        <div className="flex-1 flex flex-col gap-5 items-start">
          {[1, 2, 3].map((num) => (
            <Block key={num} num={num} />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-5 items-end">
          {[4, 5, 6].map((num) => (
            <Block key={num} num={num} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LinkButton({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={link} target="_blank">
      <Button>{children}</Button>
    </Link>
  );
}

function Block({ num }: { num: number }) {
  return (
    <Link href={`/${num}`}>
      <motion.div
        key={num}
        initial={{ x: num > 3 ? 50 : -50, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 aspect-square border-2 border-input/10 w-30 rounded-4xl flex flex-col bg-input/10 items-center justify-center"
      >
        {num}
      </motion.div>
    </Link>
  );
}
