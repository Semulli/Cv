import { useNavigate } from "react-router-dom";
import image from "../../images/ChatGPT Image Apr 7, 2025, 10_20_27 AM.png";
import Title from "../Title";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ROUTER } from "../../Constants/Router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img src={image} alt="" className=" w-80 h-80" />


        <Title
          title="Create a professional resume effortlessly and"
          variant="text-2xl md:text-3xl font-bold text-center mb-6"
        />
        <Title
          title="FREE!"
          variant="text-2xl md:text-3xl font-bold text-center mb-6 text-pink-700 animate-pulse"
        />

        <div className="flex items-center gap-4">
         
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 cursor-pointer"
            onClick={() => {
              navigate(ROUTER.Info);
            }}
          >
            START BUILDING →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
