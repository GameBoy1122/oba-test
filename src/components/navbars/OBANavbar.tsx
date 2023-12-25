"use client";
import { useState } from "react";
import Image from "next/image";
import style from "./OBANavbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { LogoutModal } from "../modals";
import { LanguageChanger } from "../language";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/zustand/useAppStore";
import { useRouter } from "next/navigation";

interface Props {}

const MOCK_USER = {
  userid: "s01234",
  username: "ณิชนันท์ ศักดิ์สินธุ์ชัย",
  branch: "สาขารัชโยธิน",
};

export default function OBANavbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const logout = useAppStore((state) => state.logout);
  const router = useRouter();
  // const pathname = usePathname();

  const [showMoreContent, setShowMoreContent] = useState(false);
  const handleMoreClick = () => {
    setShowMoreContent(!showMoreContent);
  };

  if (pathname?.includes("/login")) return false;
  // what is it ?
  // if (pathname?.includes("/login")) return false;

  return (
    <nav className={style["navcontainer"]}>
      <Link href="/">
        <Image
          src="/images/scb-logo-desktop.svg"
          width={130}
          height={60}
          alt="scb-logo-desktop"
          className={style["navcontainer_image"]}
        />
      </Link>
      <div className={style["navcontainer_user"]}>
        <div className={style["usercontainer"]}>
          <div className={style["usercontainer_name"]}>
            {MOCK_USER.username}
          </div>
          <div className={style["usercontainer_details"]}>
            รหัสพนักงาน : {MOCK_USER.userid} | {MOCK_USER.branch}
          </div>
        </div>
        <LanguageChanger locale={locale ?? ""} />
        <div className={style["morecontainer"]} onClick={handleMoreClick}>
          <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
          {showMoreContent && (
            <LogoutModal>
              <div
                onClick={() => {
                  logout();
                  router.push("/login");
                }}
              >
                <div className={style["morecontainer_content"]}>Logout</div>
              </div>
            </LogoutModal>
          )}
        </div>
      </div>
    </nav>
  );
}
