"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export default function FarcasterInit(): null {
  useEffect(() => {
    const initializeFarcaster = async (): Promise<void> => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (document.readyState !== "complete") {
          await new Promise<void>((resolve) => {
            if (document.readyState === "complete") {
              resolve();
            } else {
              window.addEventListener("load", () => resolve(), { once: true });
            }
          });
        }

        await sdk.actions.ready();
        console.log(
          "Farcaster SDK initialized successfully - app fully loaded",
        );
      } catch (error) {
        console.error("Failed to initialize Farcaster SDK:", error);
        setTimeout(async () => {
          try {
            await sdk.actions.ready();
            console.log("Farcaster SDK initialized on retry");
          } catch (retryError) {
            console.error("Farcaster SDK retry failed:", retryError);
          }
        }, 1000);
      }
    };

    initializeFarcaster();
  }, []);

  return null;
}
