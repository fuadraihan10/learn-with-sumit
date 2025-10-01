import Row from "../Header/components/Row";
import Facebook from "./components/Facebook";
import Football from "./components/Football";
import Github from "./components/Github";
import Instagram from "./components/Instagram";
import Twitter from "./components/Twitter";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* <!-- Sub Footer 1 --> */}
        <SubFooter1 />

        {/* <!-- Sub Footer 2 --> */}
        <SubFooter2 />
      </div>
    </footer>
  );
}

export default Footer;

function SubFooter1() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <Row
          head={"Company"}
          items={["About", "Careers", "Brand Center", "Blog"]}
        />
        <Row
          head={"Help center"}
          items={["Discord Server", "Twitter", "facebook", "Contact Us"]}
        />
        <Row head={"Legal"} items={["Privacy Policy", "Licensing ", "Terms"]} />
        <Row
          head={"Company"}
          items={["About", "Careers", "Brand Center", "Blog"]}
        />
        <Row head={"Download"} items={["Ios", "Android", "Windows", "MacOS"]} />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </>
  );
}

function SubFooter2() {
  return (
    <>
      <div className="text-center">
        <a
          href="#"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="./assets/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Learn with Sumit Logo"
          />
          Learn with Sumit{" "}
        </a>
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
          <a
            href="#"
            target="_blank"
            className="text-purple-600 hover:underline dark:text-purple-500"
          >
            Flowbite
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-purple-600 hover:underline dark:text-purple-500"
          >
            Tailwind CSS
          </a>
          .
        </span>
        <ul className="flex justify-center mt-5 space-x-5">
          <Facebook />
          <Instagram />
          <Twitter />
          <Github />
          <Football />
        </ul>
      </div>
    </>
  );
}
