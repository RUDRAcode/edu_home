import { useState } from "react";
import StudyMaterialsPop from "./StudyMaterialsPop";

export default function Course() {
  const [subsec, setSubsec] = useState(false);
  return (
    <div
      class={`w-full border-b-2 h-16 px-6  overflow-scroll no-scrollbar flex flex-col  relative transition-colors duration-400 ease-custom-ease ${
        subsec ? "h-fit bg-slate-200" : ""
      }`}
    >
      <div class="flex justify-between items-center w-full h-16">
        <span class="font-gummmy text-xl">Study Materials</span>
        <span onClick={() => setSubsec(!subsec)} className="cursor-pointer">
          <i class="fa-solid fa-caret-right"></i>
        </span>
      </div>
      {subsec && (
        <div className="w-full h-fit px-3 pb-6">
          <StudyMaterialsPop/>
        </div>
      )}
    </div>
  );
}
