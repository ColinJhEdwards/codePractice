import React from "react";
import styled from "styled-components";
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      Contact us
    </motion.div>
  );
};

export default ContactUs;
