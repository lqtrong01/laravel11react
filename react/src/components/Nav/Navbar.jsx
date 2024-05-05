import React, {useState} from "react";
import Logo from "../../assets/react.svg";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
  Bars3Icon,
  BellIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import axiosClient from '../../axios'
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import DarkMode from "./DarkMode";
import AOS from 'aos';
import { useStateContext } from "../../contexts/ContextProvider";
export default function Navbar() {
  const { currentUser, userToken, setCurrentUser, setUserToken } =
    useStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }

  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get('/me')
      .then(({ data }) => {
        setCurrentUser(data)
      })
  }, [])
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'case-in-sine',
      delay:100
    });
    AOS.refresh();
  }, []);
  const Menus = [
    { name: "Home", to: "/home", id: 1 },
    { name: "Top Rate", to: "#", id: 2 },
    { name: "Kid Wear", to: "#", id: 3 },
  ];
  const DropdownLinks = [
    { name: "Trending Products", to: "#", id: 1 },
    { name: "Best selling", to: "#", id: 2 },
    { name: "Top rate", to: "#", id: 3 },
  ];
  const [search, setSearch] = useState();
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <Link
                to={"#"}
                className="font-bold text-2xl sm:text-3xl flex gap-2"
              >
                <img src={Logo} alt="logo" className="w-10" />
                Shop
              </Link>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[200px] dark:text-black sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                  placeholder="Search"
                  required
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                />
                <MagnifyingGlassCircleIcon onClick={()=>{}} class="size-9 text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-0 hover:cursor-pointer" />
              </div>
              <button
                onClick={() => alert("Ordering not available yet")}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Oder
                </span>
                <ShoppingCartIcon className="size-8 text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              <div className="">
                <DarkMode />
              </div>
              <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <UserIcon className="w-8 h-8 bg-black/25 p-2 rounded-full text-white" />
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <a
                                href="#"
                                onClick={(ev) => logout(ev)}
                                className={
                                  "block px-4 py-2 text-sm text-gray-700"
                                }
                              >
                                Sign out
                              </a>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="ml-10 flex items-baseline space-x-4">
            {Menus.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink className="group relative">
              <Link to="#" className="flex items-center gap-[2px]">
                Trending
                <span>
                  <ChevronDownIcon className="size-10 px-2 transition-all duration-200 group-hover:rotate-180" />
                </span>
              </Link>
              <div className="flex-col absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                {DropdownLinks.map((item) => (
                  <NavLink key={item.id}>
                    <Link
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        to={item.to}
                    >
                        {item.name}
                    </Link>
                  </NavLink>
                ))}
              </div>
            </NavLink>
            
          </div>
        </div>
      </div>
    </>
  );
}
