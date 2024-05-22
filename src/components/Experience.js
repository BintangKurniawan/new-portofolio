import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary capitalize dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>

        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] " />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Front End Developer"
            company="JagooIT"
            companyLink="https://jagooit.com/"
            time="August - September 2023"
            address="Buah Batu Regency, Bandung"
            work="I helped them develop their CMS and CRM system. I worked with a team and completed it in 2 month."
          />
          <Details
            position="Front End Developer"
            company="Curaweda"
            companyLink="https://www.curaweda.com/"
            time="October - December 2023"
            address="Jl. Atletik, Sukamiskin, Bandung"
            work="Worked on a team responsible for developing Hotel Management System for Lingian Hotel."
          />
          <Details
            position="Front End Developer"
            company="WGS"
            companyLink="https://wgs.co.id/"
            time="January - April 2024"
            address="Jl. Soekarno Hatta, Bandung"
            work="I'm alone as front-end and my two back-end partners helped them develop their Leave Management System. We completed it in approximately 3 month."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
