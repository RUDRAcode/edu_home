import { useState } from "react"

export default function Course(){
    const [subsec,setSubsec]=useState(false)
    return(
        <div
        class={`w-full border-b-2 h-16 px-6  overflow-scroll no-scrollbar flex flex-col relative transition-colors duration-400 ease-custom-ease ${
          subsec ? "h-80 bg-slate-200" : ""
        }`}
      >
        <div class="flex justify-between items-center w-full h-16">
          <span class="font-gummmy text-xl">More</span>
          <span onClick={() => setSubsec(!subsec)} className="cursor-pointer">
            <i class="fa-solid fa-caret-right"></i>
          </span>
        </div>
        {subsec && (
        <div className=" w-full h-fit px-3 pb-6">
          <div className="border-2 px-7 rounded-2xl border-gray-400 bg-white">
            <div class="w-full h-16 flex items-center">
              <div class="mr-auto flex">
                <span class="text-2xl">
                  <i class="fa-solid fa-book"></i>
                </span>
                <span class="font-gummmy text-xl px-4">
                  Find course by class
                </span>
              </div>
              <span>
                <i class="fa-solid fa-caret-right"></i>
              </span>
            </div>
            <div class="w-full h-16 flex items-center border-t-2">
              <div class="mr-auto flex">
                <span class="text-2xl">
                  <i class="fa-solid fa-pen-nib"></i>
                </span>
                <span class="font-gummmy text-xl px-4">
                  Find course by exams
                </span>
              </div>
              <span>
                <i class="fa-solid fa-caret-right"></i>
              </span>
            </div>
            <div class="w-full h-16 flex items-center border-t-2">
              <div class="mr-auto flex">
                <span class="text-2xl">
                  <i class="fa-solid fa-bullseye"></i>
                </span>
                <span class="font-gummmy text-xl px-4">
                  Topic specific courses
                </span>
              </div>
              <span>
                <i class="fa-solid fa-caret-right"></i>
              </span>
            </div>
          </div>
        </div>
      )}
      </div>
    )
}