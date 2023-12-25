"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next-intl/client";

function DevMode() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname.includes("/login")) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "5px",
        zIndex: 1000,
      }}
    >
      <span
        onClick={() => {
          router.push("/devMode");
        }}
        style={{
          color: "red",
          fontSize: "40px",
          cursor: "pointer",
          fontWeight: 600,
          lineHeight: "normal",
        }}
      >
        *
      </span>
    </div>
  );
}

export default DevMode;
