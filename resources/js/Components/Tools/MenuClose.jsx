import React from "react";
import SwitchInput from "@components/UI/SwitchInput.jsx";
import useSidebar from "@hooks/useSidebar";

const MenuClose = () => {
  const [collapsed, setMenuCollapsed] = useSidebar();
  return (
    <div className=" flex justify-between">
      <div className="text-slate-600 text-base dark:text-slate-300 font-normal">
        Menu Collapsed
      </div>
      <SwitchInput
        value={collapsed}
        onChange={() => setMenuCollapsed(!collapsed)}
        id="semi_nav_tools2"
      />
    </div>
  );
};

export default MenuClose;
