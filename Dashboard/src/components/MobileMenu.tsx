import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Links } from "../data/Links";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div className="relative block lg:hidden">
      <Menu>
        <Menu.Button className="self-end ">
          <FiMenu className="w-6 h-6" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-4  py-2 rounded text-sm font-medium bg-black text-white">
            {Links.map(({ Icon, label, link }) => {
              return (
                <Menu.Item as="div" className={`block px-4 py-2`}>
                  <div className="flex gap-2 items-center">
                    <Icon />
                    <Link to={link}>{label}</Link>
                  </div>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
