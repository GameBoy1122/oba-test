"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OverlayTrigger, Popover } from "react-bootstrap";
import styles from "./Navbar.module.scss";

interface LogoutPopoverProps {
  children: React.ReactElement;
}

export default function LogoutPopover(props: LogoutPopoverProps) {
  const { children } = props;
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setShowLogout(false);
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    router.push("/logout");
    setShowLogout(!showLogout);
  };
  const logoutPopover = (
    <Popover id="logout-popover">
      <button className={styles["logout"]} onClick={handleClick}>
        Logout
      </button>
    </Popover>
  );
  return (
    <OverlayTrigger
      trigger={["click", "focus"]}
      placement="bottom"
      show={showLogout}
      onToggle={(visible) => setShowLogout(visible)}
      overlay={logoutPopover}
    >
      <div className="px-2 cursor-pointer">{children}</div>
    </OverlayTrigger>
  );
}
