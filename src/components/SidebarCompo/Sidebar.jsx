import OwlGif from "../../assets/Owl.gif"
import Course from "./Course/Course";
import CourseForKids from "./Course_for_kids/CourseforKids";
import StudyMaterials from "./StudyMaterials/StudyMaterials";
import More from "./More/More";
import { AnimatePresence, motion } from "motion/react";
export default function Sidebar({ open,setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          class="absolute h-screen bg-white w-full -top-[0.5rem] flex flex-col"
        >
          <div class="w-full h-28 flex justify-between items-center px-4 border-b-2">
            <div class="h-20 w-20 mt-2">
              <img
                src={OwlGif}
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            <span class="text-2xl text-blue-300" onClick={() => setOpen(false)}>
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
          <div class="flex-1">
            <div class="w-full h-full no-scrollbar">
              <Course />
              <CourseForKids />
              <StudyMaterials />
              <More />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
