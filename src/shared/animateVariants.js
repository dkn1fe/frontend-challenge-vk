

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

 export  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0 }, 
  };