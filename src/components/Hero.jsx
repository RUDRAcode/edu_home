import edu from "../assets/edu.png";
export default function Hero(){
    return(
        <div className="w-full h-full flex flex-col p-4 items-center bg-blue-100 laptop2:grid laptop2:grid-cols-2 laptop:grid grid-cols-2">
        <div className="w-full h-1/2 flex justify-center laptop2:h-[68%] laptop:h-[76%] big-sc:h-[53rem]">
          <div className="max-w-[410px] h-full laptop2:max-w-full laptop:max-w-full">
            <img
              src={edu}
              className="w-full h-full object-contain laptop:object-cover laptop2:object-cover"
            />
          </div>
        </div>
        <div className="flex-1 ">
          <div className="w-full h-full flex flex-col justify-between items-center laptop:justify-center">
            <h1 className="text-4xl max-w-[393px] font-lexend font-bold">
              Master Learning, Ace Exams – Your Journey Starts Here!
            </h1>
            <div className="flex flex-col justify-between h-28 laptop:mt-12 laptop2:mt-12">
              <button className="btn btn-outline text-2xl font-gummmy  border-b-[3px] bg-blue-400 shadow-white hover:bg-blue-400">
                Get Started
              </button>
              <button className="btn btn-outline text-2xl font-gummmy shadow-inner shadow-white border-b-[3px]">
                Explore lessons
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}