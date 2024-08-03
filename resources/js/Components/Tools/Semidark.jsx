import React, { useState } from "react";
import useSemiDark from "@hooks/useSemiDark";
import SwitchInput from "@components/UI/SwitchInput.jsx";

const SemiDark = () => {
  const [isSemiDark, setSemiDark] = useSemiDark();
  return (
    <div className=" flex justify-between">
      <div className="text-slate-600 text-base dark:text-slate-300 font-normal">
        Semi Dark
      </div>
      <SwitchInput
        value={isSemiDark}
        onChange={() => setSemiDark(!isSemiDark)}
        id="semi_nav_tools"
      />
    </div>
  );
};

export default SemiDark;
