export default function CoursePop(){
    return(
        <div className="border-2 px-7 rounded-2xl border-gray-400 bg-white">
        <div class="w-full h-16 flex items-center">
          <div class="flex">
            <span class="text-2xl">
              <i class="fa-solid fa-book"></i>
            </span>
            <span class="font-gummmy text-xl px-4">
              Find course by class
            </span>
          </div>
        </div>
        <div class="w-full h-16 flex items-center border-t-2">
          <div class="flex">
            <span class="text-2xl">
              <i class="fa-solid fa-pen-nib"></i>
            </span>
            <span class="font-gummmy text-xl px-4">
              Find course by exams
            </span>
          </div>
        </div>
        <div class="w-full h-16 flex items-center border-t-2">
          <div class="flex">
            <span class="text-2xl">
              <i class="fa-solid fa-bullseye"></i>
            </span>
            <span class="font-gummmy text-xl px-4">
              Topic specific courses
            </span>
          </div>
        </div>
      </div>
    )
}