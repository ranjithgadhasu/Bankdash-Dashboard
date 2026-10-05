import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css"


export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        {/* Page Content */}
        <main
          className="
          layout-top
            flex-1
            min-w-0
            overflow-y-auto
            p-4
            sm:p-5
            lg:p-4
            xl:p-6
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}