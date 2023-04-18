import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[50px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[50px] py-1 px-6 min-h-[50px] flex justify-evenly items-center flex-row"
      >
        <h3 className="text-white text-[15px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey, I'm Saroj. I'm a student and a developer.
        <br /> I take joy in solving complex problems with elegant solutions by
        simplifying and distilling core concepts.
        <br /> I'm proficient in Android development and and love to write
        front-end code.
        <br /> I'm an effective communicator and thrive in cross-functional
        teams. I enjoy learning and see it as an integral part of team work. I
        combine those skills with teamwork and a strong understanding of the
        organizational structure to work efficiently and pragmatically in
        alignment with business goals. <br /> I take an active interest in
        technology, arts, business, and how their conflation impacts society.
        <br /> I'm a proponent of the open-source software and have contributed
        to several projects in addition to maintaining several open-source
        projects.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
