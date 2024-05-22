import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import buruaka from "../../public/images/projects/buruaka.png";
import travnorth from "../../public/images/projects/travel-notrh.png";
import wgsleave from "../../public/images/projects/wgs leave.jpeg";
import hoyo from "../../public/images/projects/hoyo.png";
import werton from "../../public/images/projects/werton.png";
import wbspace from "../../public/images/projects/wbspace.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light xs:-right-2 xs:w-full sm:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="anything" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Leave Management System"
                summary="A website that build for managing your employee leave. Builded with Quasar Framework and Tailwind CSS. Currently, the website is unaccessible, and also it's only frontend, not included backend. 
                "
                link="https://github.com/BintangKurniawan/pengelola-cuti-karyawan"
                type="Featured Project"
                img={wgsleave}
                github="https://github.com/BintangKurniawan/pengelola-cuti-karyawan"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Blue Archive Student Data" link="https://buruaka-data.netlify.app/" type="Project" img={buruaka} github="https://github.com/BintangKurniawan/Blue-Archive-Student-Data" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project title="Hoyoverse Website Fanmade" link="https://hoyoverse-fanmade.netlify.app/" type="Project" img={hoyo} github="https://github.com/BintangKurniawan/hoyoverse" />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Travel Agency Landing Page"
                summary="A travel agency landing page builded with HTML and CSS. The website is static, and it's only frontend. The design is not from me. Please checkout later, I'll search again the source design.
                "
                link="https://trav-nort.netlify.app/"
                type="Featured Project"
                img={travnorth}
                github="https://github.com/BintangKurniawan/trav-norrt"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project title="Travel Agency Landing Page (Static)" link="https://weruton-12.netlify.app/" type="Project" img={werton} github="https://github.com/BintangKurniawan/werlton1" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project title="Space Portal Landing Page (Static)" link="https://wbspace.netlify.app/" type="Project" img={wbspace} github="https://github.com/BintangKurniawan/testing-for-mobile" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
