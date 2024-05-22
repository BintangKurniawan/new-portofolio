import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2 ">
          Design by
          <Link href="/" className="underline underline-offset-2" target={"_blank"}>
            &nbsp;CodeBucks
          </Link>
        </div>
        <Link href="/" target={"_blank"}>
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
