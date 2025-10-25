import { Button } from "@/components/ui/button";
import * as Icon from "react-feather";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Link from "next/link";

const testimonials = [
  {
    name: "Oskar mit Kappe",
    designation: "Der Street-Style König",
    src: "/dog/cap.png",
  },
  {
    name: "Oskar mit Brille",
    designation: "Der Intellektuelle",
    src: "/dog/cool.png",
  },
  {
    name: "Broskar 👊🤙",
    designation: "Das Original der Crew",
    src: "/dog/gang.png",
  },
  {
    name: "Oskar hat Geburtstag",
    designation: "Der Partylöwe",
    src: "/dog/birthday.png",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="fixed inset-0 flex items-center justify-center flex-col 2xl:flex-row gap-[32px]">
        <div className="xl:flex pl-15">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </main>

      <footer className="fixed bottom-0 left-1/2 transform -translate-1/2 hidden md:flex flex-row row-start-3 gap-[24px] items-center justify-center">
        <Link href="https://github.com/Aloisianer" target="_blank" prefetch>
          <Button className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer md:w-50 md:h-20 md:text-lg">
            <Icon.GitHub size={17.5} />
            Github
          </Button>
        </Link>

        <Link href="https://tensamin.net" target="_blank" prefetch>
          <Button className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer md:w-50 md:h-20 md:text-lg">
            <Icon.Shield size={17.5} />
            Tensamin
          </Button>
        </Link>

        <Link href="https://methanium.net" target="_blank" prefetch>
          <Button className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer md:w-50 md:h-20 md:text-lg">
            <Icon.Globe size={17.5} />
            Methanium
          </Button>
        </Link>
      </footer>
    </div>
  );
}
