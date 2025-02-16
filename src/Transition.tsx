import { motion } from "framer-motion";
import './index.css'
const Transition = (OgComponent: React.FC) => {
    return (props: any) => {
        return (
            <>
                {/* <motion.div
        className="slide-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <OgComponent {...props} /> 
        </motion.div>


        <motion.div
        className="slide-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} 
        >
        </motion.div> */}

                <OgComponent />
                <motion.div
                    className="slide-in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />

                <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}

                />



            </>
        );
    };
};

export default Transition;
