import React from "react";
import SwitchInput from "@components/UI/SwitchInput.jsx";
import useRtl from "@hooks/useRtl";

const RtlSwicth = () => {
  const [isRtl, setRtl] = useRtl();
  return (
    <div className="flex justify-between">
      <div className="text-slate-600 text-base dark:text-slate-300">Rtl</div>
      <SwitchInput
        value={isRtl}
        onChange={() => setRtl(!isRtl)}
        id="rtl_nav_tools"
      />
    </div>
  );
};

export default RtlSwicth;
