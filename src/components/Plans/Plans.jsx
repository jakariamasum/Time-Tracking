import React from 'react';
import { motion } from 'framer-motion';
import Title from '../Title/Title';
import PlanCard from './PlanCard';

const Plans = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="md:px-32 md:py-20 mx-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Title title={'Your Perfect Plans'} subtitle={'Our Pricing'} />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={cardVariants}>
          <PlanCard price={'29.99'} type={'Business'} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <PlanCard price={'39.99'} type={'Standard'} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <PlanCard price={'59.99'} type={'Premium'} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Plans;
