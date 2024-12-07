import { useState } from "react";
import CoursePop from "./SidebarCompo/Course/CoursePop";
import CourseforKidsPop from "./SidebarCompo/Course_for_kids/CourseforKidsPop";
import StudyMaterialsPop from "./SidebarCompo/StudyMaterials/StudyMaterialsPop";

export default function Navbar(){
    const [hover, setHover] = useState(0);
    return(
        <div className="w-3/5 h-full p-2 hidden laptop:block  big-sc:w-2/4 computer:w-2/4">
        <ul className="w-full h-full flex justify-between items-center">
          <li
            className="w-28 h-12 flex  items-center p-1 text-xl font- font-gummmy group"
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
          >
            Courses
            <span className="group-hover:rotate-180 transition-transform duration-300 ml-2">
              <i class="fa-solid fa-caret-up"></i>
            </span>
          </li>
          {hover === 1 && (
            <div className="absolute top-20">
              <CoursePop />
            </div>
          )}

          <li
            className="w-fit h-12 flex justify-between items-center p-1 text-xl font- font-gummmy group"
            onMouseEnter={() => setHover(2)}
            onMouseLeave={() => setHover(0)}
          >
            Courses for kids
            <span className="group-hover:rotate-180 transition-transform duration-300 ml-2">
              <i class="fa-solid fa-caret-up"></i>
            </span>
          </li>
          {hover === 2 && (
            <div className="absolute top-20 left-1/3">
              <CourseforKidsPop />
            </div>
          )}
          <li
            className="w-fit h-12 flex  items-center p-1 text-xl font- font-gummmy group"
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(0)}
          >
            Study materials
            <span className="group-hover:rotate-180 transition-transform duration-300 ml-2">
              <i class="fa-solid fa-caret-up"></i>
            </span>
          </li>
          {hover === 3 && (
            <div className="absolute top-20 left-2/4">
              <StudyMaterialsPop/>
            </div>
          )}
          <li
            className="w-fit h-12 flex items-center p-1 text-xl font- font-gummmy group"
            onMouseEnter={() => setHover(4)}
            onMouseLeave={() => setHover(0)}
          >
            More
            <span className="group-hover:rotate-180 transition-transform duration-300 ml-2">
              <i class="fa-solid fa-caret-up"></i>
            </span>
          </li>
          {hover === 4 && (
            <div className="absolute top-20 left-[66%]">
              <CoursePop />
            </div>
          )}

        </ul>
      </div>
    )
}