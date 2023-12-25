"use client";

import React, { useEffect } from "react";
import styles from "./IFrame.module.scss";
import { useAppStore } from "@/zustand/useAppStore";

interface IFrameProps
  extends React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  > {
  id: string;
}

let iframe: HTMLIFrameElement | null = null;

function IFrame(props: IFrameProps) {
  const reducer = useAppStore((state) => state.reducer);
  const initIFrame = useAppStore((state) => state.initIFrame);

  useEffect(() => {
    // add eventlistener to receive data from iframe
    window.addEventListener("message", (event) => {
      // if (event.origin !== "http://localhost:5501") return;
      onMessageReceived(event);
    });

    function onMessageReceived(e: any) {
      const action = e.data;

      if (action) {
        reducer(action);
      }
    }

    initIFrame(document.getElementById(props?.id) as HTMLIFrameElement);

    return () => {
      window.removeEventListener("message", onMessageReceived);
    };
  }, []);

  return (
    <div className={styles.iframeWrapper}>
      <iframe {...props}></iframe>
    </div>
  );
}

export default IFrame;
