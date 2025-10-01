import Btn from "../components/Btn";

function Header() {
  return (
    // nav-bar
    <header className="fixed  w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* logo */}
          <a href="#" className="flex items-center">
            <img
              src="/assets/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Learn with Sumit
            </span>
          </a>

          {/* button */}
          <div className="flex items-center lg:order-2">
            <Btn text="Download" />
          </div>

          {/* menu items */}
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Item value="Home" />
              <Item value="Company" />
              <Item value="Marketplace" />
              <Item value="Features" />
              <Item value="Team" />
              <Item value="Contact" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// value component
function Item({ value }) {
  // if value is Home
  if (value === "Home") {
    return (
      <>
        <li>
          <a
            href="#"
            aria-current="page"
            className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
          >
            {value}
          </a>
        </li>
      </>
    );
  }
  // if (value === !"Home")
  return (
    <>
      <li>
        <a
          href="#"
          className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          {value}
        </a>
      </li>
    </>
  );
}
