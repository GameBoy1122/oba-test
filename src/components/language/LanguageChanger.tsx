"use client";

import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import { ChangeEventHandler } from "react";
import { locales } from "@/locales";
import styles from "./LanguageChanger.module.scss";

export default function LanguageChanger({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange} className={styles.select}>
      {locales.map((locale) => (
        <option key={locale} value={locale} className={styles.option}>
          {locale?.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
