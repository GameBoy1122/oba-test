"use client";

import React from "react";
import {
  MaintenanceAlert,
  ServiceUnavailableAlert,
  SessionExpireAlert,
  SessionExpireWarningAlert,
  MessageAlert,
} from "@/components/alert";
import { useAppStore } from "@/zustand/useAppStore";

function AlertProvider() {
  const alert = useAppStore((state) => state.alert);
  const show = useAppStore((state) => state.alert.show);
  const type = useAppStore((state) => state.alert.type);
  const setAlert = useAppStore((state) => state.setAlert);

  return (
    <>
      <MaintenanceAlert
        show={show && type === "maintenance"}
        handleClose={() => {
          setAlert({ show: false, message: "", type: undefined });
        }}
      />
      <ServiceUnavailableAlert
        show={show && (type === "service_unavailable" || type === "timeout")}
        handleClose={() => {
          setAlert({ show: false, message: "", type: undefined });
        }}
      />
      <SessionExpireWarningAlert
        show={show && type === "session_expire_warning"}
        handleClose={() => {
          setAlert({ show: false, message: "", type: undefined });
        }}
      />
      <SessionExpireAlert
        show={show && type === "session_expire"}
        handleClose={() => {
          setAlert({ show: false, message: "", type: undefined });
        }}
      />
      <MessageAlert
        {...alert}
        show={show && type === "alert"}
        handleClose={() => {
          setAlert({ ...alert, show: false, type: undefined });
        }}
      />
    </>
  );
}

export default AlertProvider;
