"use client";
import style from "./TabSucceedLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, ChangeEvent } from "react";

export default function TabSucceedLists() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const renderTable = () => {
    const data = [
      {
        id: 1,
        name: { th: "ปริญ ทัศนเรือง", en: "Parin Tasanaroeng" },
        citizenId: "2-1060-79435-61-1",
        timeStamp: "10.48 น.",
        type: "Account opening",
        checker: "สมหญิง ทรัพย์มีดี",
      },
      {
        id: 2,
        name: { th: "ปัณยตา ตั้งทิพย์", en: "Panyata Tangtip" },
        citizenId: "3-1778-56999-57-1",
        timeStamp: "10.53 น.",
        type: "Service only",
        checker: "สมหญิง ทรัพย์มีดี",
      },
      {
        id: 3,
        name: { th: "ชื่อไทย 1", en: "Name English 1" },
        citizenId: "1-2345-67890-12-3",
        timeStamp: "08.30 น.",
        type: "Type A",
        checker: "ผู้ตรวจสอบ 1",
      },
      {
        id: 4,
        name: { th: "ชื่อไทย 2", en: "Name English 2" },
        citizenId: "2-3456-78901-23-4",
        timeStamp: "09.45 น.",
        type: "Type B",
        checker: "ผู้ตรวจสอบ 2",
      },
      {
        id: 5,
        name: { th: "ชื่อไทย 3", en: "Name English 3" },
        citizenId: "3-4567-89012-34-5",
        timeStamp: "10.15 น.",
        type: "Type C",
        checker: "ผู้ตรวจสอบ 3",
      },
      // Add more data rows as needed
    ];
    const filteredData = data.filter(
      (item) =>
        item.name.th.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.en.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <table className={style["table"]}>
        <thead className={style["table_header"]}>
          <tr>
            <th className={style["cell"]}></th>
            <th className={style["cell"]}>ชื่อ - นามสกุล</th>
            <th className={style["cell"]}>หมายเลขอ้างอิง</th>
            <th className={style["cell"]}>เวลาที่อนุมัติ</th>
            <th className={style["cell"]}>ประเภทบริการ</th>
            <th className={style["cell"]}>ผู้อนุมัติ</th>
          </tr>
        </thead>
        <tbody className={style["table_body"]}>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className={style["cell"]}>{item.id}</td>
              <td className={style["cell"]}>
                <div className={style["title_main"]}>{item.name.th}</div>
                <div className={style["title_sub"]}>{item.name.en}</div>
              </td>
              <td className={style["cell"]}>
                <div className={style["title_main"]}>{item.citizenId}</div>
                <div className={style["title_main"]}>เลขประจำตัวประชาชน</div>
              </td>
              <td className={style["cell"]}>{item.timeStamp}</td>
              <td className={style["cell"]}>{item.type}</td>
              <td className={style["cell"]}>
                <div className={style["checker"]}>{item.checker}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className={style["container"]}>
      <div className={style["title"]}>รายการที่เสร็จเเล้ว</div>
      <div className={style["headertool"]}>
        <div className={style["toolSearch"]}>
          <input
            type="text"
            placeholder="ค้นหาโดยกรอกชื่อ"
            className={style["toolSearch_search"]}
            value={searchTerm}
            onChange={handleInputChange}
          />
          <span className={style["toolSearch_icon"]}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              color="var(--color-purple--secondary)"
            />
          </span>
        </div>
        <div
          className={style["toolRefresh"]}
          onClick={() => {
            setSearchTerm("");
          }}
        >
          <FontAwesomeIcon
            icon={faArrowsRotate}
            size="xl"
            color="var(--color-purple--secondary)"
          />
        </div>
      </div>
      <div className={style["table-container"]}>{renderTable()}</div>
    </div>
  );
}
