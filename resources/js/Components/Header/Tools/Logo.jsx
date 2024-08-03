import React from "react";
import useDarkMode from "@hooks/useDarkMode";
import { Link } from "@inertiajs/react";
import useWidth from "@hooks/useWidth";

import MainLogo from "@images/logo/logo.svg";
import LogoWhite from "@images/logo/logo-white.svg";
import MobileLogo from "@images/logo/logo-c.svg";
import MobileLogoWhite from "@images/logo/logo-c-white.svg";
const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link to="/dashboard">
        {width >= breakpoints.xl ? (
          <img src={isDark ? LogoWhite : MainLogo} alt="" />
        ) : (
          <img src={isDark ? MobileLogoWhite : MobileLogo} alt="" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
