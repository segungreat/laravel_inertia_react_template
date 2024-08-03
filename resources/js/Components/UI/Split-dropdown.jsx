import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "@inertiajs/react";
import Icon from "@components/UI/Icons.jsx";

const SplitDropdown = ({
  label = "Dropdown",
  wrapperClass = "inline-block",
  labelClass = "",
  children,
  classMenuItems = "mt-2 w-[220px]",
  splitIcon = "heroicons-outline:chevron-down",
  items = [
    {
      label: "Action",
      link: "#",
    },
    {
      label: "Another action",
      link: "#",
    },
    {
      label: "Something else here",
      link: "#",
    },
  ],
  classItem = "px-4 py-2",
}) => {
  return (
    <div className={`relative ${wrapperClass}`}>
      <Menu as="div" className="block w-full">
        <div className="split-btngroup flex">
          <button type="button" className={`btn flex-1 ${labelClass}`}>
            {label}
          </button>
          <Menu.Button className={`flex-0 px-3 ${labelClass}`}>
            <Icon icon={splitIcon} />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute ltr:right-0 rtl:left-0 origin-top-right  border border-slate-100
            rounded bg-white dark:bg-slate-800 dark:border-slate-700 shadow-dropdown z-[9999]
            ${classMenuItems}
            `}
          >
            <div>
              {children
                ? children
                : items?.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50"
                              : "text-slate-600 dark:text-slate-300"
                          } block     ${
                            item.hasDivider
                              ? "border-t border-slate-100 dark:border-slate-700"
                              : ""
                          }`}
                        >
                          {item.link ? (
                            <Link
                              tho={item.link}
                              className={`block ${classItem}`}
                            >
                              {item.icon ? (
                                <div className="flex items-center">
                                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                                    <Icon icon={item.icon} />
                                  </span>
                                  <span className="block text-sm">
                                    {item.label}
                                  </span>
                                </div>
                              ) : (
                                <span className="block text-sm">
                                  {item.label}
                                </span>
                              )}
                            </Link>
                          ) : (
                            <div
                              className={`block cursor-pointer ${classItem}`}
                            >
                              {item.icon ? (
                                <div className="flex items-center">
                                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                                    <Icon icon={item.icon} />
                                  </span>
                                  <span className="block text-sm">
                                    {item.label}
                                  </span>
                                </div>
                              ) : (
                                <span className="block text-sm">
                                  {item.label}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SplitDropdown;
