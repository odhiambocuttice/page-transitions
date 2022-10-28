import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.main
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-lime-600 px-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="my-48 p-2">
        <h1 className="text-6xl  text-center  lg:text-9xl">Contact Us</h1>
      </div>
      <div className="flex justify-between gap-40">
        <div className="lg:text-2xl text-base">
          <h2>Find Me</h2>
        </div>
        <div className="lg:text-6xl text-2xl underline">
          <ul>
            <li className="pb-3">Instagram</li>
            <li className="pb-3">Dribbble</li>
          </ul>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
