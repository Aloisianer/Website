"use client";

import { Loader } from "lucide-react";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const registerAndRedirect = async () => {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("/1.js");
          await navigator.serviceWorker.ready;
          const response = await fetch("/1.mp4");
          await response.blob();
        } catch (err) {
          console.error("Service Worker registration or caching failed.", err);
        } finally {
          window.location.href = "/1.mp4";
        }
      } else {
        window.location.href = "/1.mp4";
      }
    };

    registerAndRedirect();
  }, []);

  return (
    <Loader className="animate-spin fixed top-1/2 left-1/2 -translate-1/2" />
  );
}
