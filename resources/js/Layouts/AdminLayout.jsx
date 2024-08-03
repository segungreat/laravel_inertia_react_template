import React, {Suspense} from 'react';
import {ToastContainer} from "react-toastify";
import Footer from "@components/Footer.jsx";
import useWidth from "@hooks/useWidth.js";
import useMenuLayout from "@hooks/useMenulayout";
import useMenuHidden from "@hooks/useMenuHidden";
import {Head} from "@inertiajs/react";
import useSidebar from "@hooks/useSidebar.js";
import MobileFooter from "@components/MobileFooter.jsx";
import Loading from "@components/UI/Loading.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Settings from "@components/Settings.jsx";
import useMobileMenu from "@hooks/useMobileMenu.js";
import useContentWidth from "@hooks/useContentWidth.js";
import MobileMenu from "@components/Sidebar/MobileMenu.jsx";
import Sidebar from "@components/Sidebar/index.jsx";
import Header from "@components/Header/index.jsx";

const AdminLayout = ({children, pageTitle = ''}) => {
    const { width, breakpoints } = useWidth();
    const [contentWidth] = useContentWidth();
    const [menuType] = useMenuLayout();
    const [menuHidden] = useMenuHidden();
    const [collapsed] = useSidebar();
    const [mobileMenu, setMobileMenu] = useMobileMenu();

    const switchHeaderClass = () => {
        if (menuType === "horizontal" || menuHidden) {
            return "ltr:ml-0 rtl:mr-0";
        } else if (collapsed) {
            return "ltr:ml-[72px] rtl:mr-[72px]";
        } else {
            return "ltr:ml-[248px] rtl:mr-[248px]";
        }
    };

    return (
        <>
            <Head title={`${pageTitle} - Crypto`}/>
            <ToastContainer/>

            <Header className={width > breakpoints.xl ? switchHeaderClass() : ""} />

            {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
                <Sidebar />
            )}
            <MobileMenu
                className={`${
                    width < breakpoints.xl && mobileMenu
                        ? "left-0 visible opacity-100  z-[9999]"
                        : "left-[-300px] invisible opacity-0  z-[-999] "
                }`}
            />

            {/* mobile menu overlay*/}
            {width < breakpoints.xl && mobileMenu && (
                <div
                    className="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"
                    onClick={() => setMobileMenu(false)}
                ></div>
            )}
            <Settings />

            <div
                className={`content-wrapper transition-all duration-150 ${
                    width > 1280 ? switchHeaderClass() : ""
                }`}
            >
                {/* md:min-h-screen will h-full*/}
                <div className="page-content   page-min-height  ">
                    <div
                        className={
                            contentWidth === "boxed" ? "container mx-auto" : "container-fluid"
                        }
                    >
                        <Suspense fallback={<Loading/>}>
                            <motion.div
                                key={location.pathname}
                                initial="pageInitial"
                                animate="pageAnimate"
                                exit="pageExit"
                                variants={{
                                    pageInitial: {
                                        opacity: 0,
                                        y: 50,
                                    },
                                    pageAnimate: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                    pageExit: {
                                        opacity: 0,
                                        y: -50,
                                    },
                                }}
                                transition={{
                                    type: "tween",
                                    ease: "easeInOut",
                                    duration: 0.5,
                                }}
                            >
                                {/*<Breadcrumbs/>*/}
                                {children}
                            </motion.div>
                        </Suspense>
                    </div>
                </div>
            </div>
            {width < breakpoints.md && <MobileFooter/>}
            {width > breakpoints.md && (
                <Footer className={width > breakpoints.xl ? switchHeaderClass() : ""}/>
            )}
        </>
    );
};

export default AdminLayout;
