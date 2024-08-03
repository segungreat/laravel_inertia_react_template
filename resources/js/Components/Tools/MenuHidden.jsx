import React from "react";
import SwitchInput from "@components/UI/SwitchInput.jsx";
import useMenuHidden from "@hooks/useMenuHidden";

const MenuHidden = () => {
  const [menuHidden, setMenuHidden] = useMenuHidden();
  return (
    <div className=" flex justify-between">
      <div className="text-slate-600 text-base dark:text-slate-300 font-normal">
        Menu Hidden
      </div>
      <SwitchInput
        value={menuHidden}
        onChange={() => setMenuHidden(!menuHidden)}
        id="semi_nav_tools3"
      />
    </div>
  );
};

export default MenuHidden;
