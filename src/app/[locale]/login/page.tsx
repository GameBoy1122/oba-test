"use client";

import React from "react";
import { useLocale } from "next-intl";
import styles from "./page.module.scss";
import Stack from "react-bootstrap/Stack";
import Form from "./_component/Form";
import { LanguageChanger } from "@/components/language";

export default function LoginPage() {
  const locale = useLocale();

  return (
    <Stack className={styles.main}>
      <Form />
      <LanguageChanger locale={locale} />
    </Stack>
  );
}
