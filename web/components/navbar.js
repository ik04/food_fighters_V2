import React from "react";

const links = [{ href: "/", name: "Home" }];
const Navbar = () => {
  //! mobile first design (for future)
  return (
    <div>
      <nav class="bg-brown border-gray-200 overflow-y-hidden">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between bg-brown mx-auto p-4">
          <a href="/" class="flex items-center">
            <img src="/logo.png" class="h-8 mr-3" alt="FoodFighters Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FoodFighters
            </span>
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-brown">
              {links.map((link) => (
                <li>
                  <a
                    href={link.href}
                    class="block py-2 pl-3 pr-4  text-white bg-blue-700 rounded md:bg-transparent md:text-dyellow md:p-0 dark:text-white "
                    aria-current="page"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
