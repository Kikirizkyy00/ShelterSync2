"use client";

import { useState } from "react";
import StatusBar from "./StatusBar";
import TaskBoard from "./TaskBoard";
import StoragePanel from "./StoragePanel";

export default function TaskApp() {
  const [tab, setTab] = useState<"board" | "storage">("board");

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-left">
          <h1 className="app-title">ShelterSync</h1>
          <span className="badge badge-teal">Sprint 3</span>
          <span className="badge badge-purple">Shelby Storage</span>
        </div>
        <nav className="nav">
          <button className={`nav-btn ${tab === "board" ? "active" : ""}`} onClick={() => setTab("board")}>
            Task Board
          </button>
          <button className={`nav-btn ${tab === "storage" ? "active" : ""}`} onClick={() => setTab("storage")}>
            ShelterSync Storage
          </button>
        </nav>
      </header>

      <StatusBar />

      {tab === "board" ? <TaskBoard /> : <StoragePanel />}
    </div>
  );
}
