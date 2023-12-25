"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LogoImage() {
  const router = useRouter();
  return (
    <Image
      src="/images/scb-logo-desktop.svg"
      width={120}
      height={60}
      alt="scb-logo-desktop"
      className="cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
}
