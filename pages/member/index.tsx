import Overview from "@/components/organisms/Overview";
import SideBar from "@/components/organisms/SideBar";
import React from "react";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <Overview />
    </section>
  );
}
