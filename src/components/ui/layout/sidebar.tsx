// src/components/layout/sidebar.tsx

"use client";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-zinc-100 border-r fixed left-0 top-0 p-6">
      <h1 className="text-xl font-bold mb-6">Admybrand</h1>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/analytics" className="hover:underline">Analytics</Link>
        <Link href="/campaigns" className="hover:underline">Campaigns</Link>
        <Link href="/settings" className="hover:underline">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
