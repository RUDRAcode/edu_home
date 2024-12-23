import { useState } from "react";
import "./App.css";
import OwlGif from "./assets/Owl.gif";
import Sidebar from "./components/SidebarCompo/Sidebar";
import edu from "./assets/edu.png";
import LovetoLearn from "./assets/1.jpg";
import AppleandBlocks from "./assets/2.jpg";
import Chairs from "./assets/3.jpg";
import Books from "./assets/4.jpg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between h-svh">
        <header class="w-full h-24 p-2  border-b-2 bg-white flex flex-col relative laptop:px-6">
          <div class="h-full w-full flex justify-between">
            <div class="h-full w-36 flex justify-between">
              <div class="flex h-full laptop:hidden">
                <span
                  className="text-3xl w-10 h-full flex items-center justify-center cursor-pointer text-blue-400 hover:text-blue-200"
                  onClick={() => setOpen(true)}
                >
                  <i class="fa-solid fa-bars"></i>
                </span>
              </div>
              <div class="h-20 w-20">
                <img
                  src={OwlGif}
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <Navbar />
            <div class="h-full w-48 flex justify-between items-center">
              <button class="h-12 w-20 bg-blue-300 rounded-xl text-lg font-gummmy hover:bg-blue-200">
                Login
              </button>
              <button class="h-12 w-24 bg-blue-300 rounded-xl text-lg font-gummmy hover:bg-blue-200">
                Register
              </button>
            </div>
          </div>
        </header>
        <Hero />
      </div>
      <section className="w-full  h-48 mt-4 px-5 flex flex-col justify-between">
        <div className="max-w-full h-full flex items-center justify-center">
          <span className="text-4xl font-lexend font-bold text-center">
            Comprehensive Exam Preparation, Simplified
          </span>
        </div>
        <div className="flex justify-center">
          <span className="text-lg font-lexend">
            Make the best choices for your future.
          </span>
        </div>
      </section>
      <section className="mt-6 w-full p-10">
        <div className="w-full h-fit grid grid-cols-1 gap-6 auto-rows-auto place-items-center laptop3:grid-cols-4 laptop2:grid-cols-2 sm-md:grid-cols-2">
          <Card image={edu} />
          <Card image={edu} />
          <Card image={edu} />
          <Card image={edu} />
        </div>
      </section>
      <section className="max-w-[471px]  p-10 h-32">
        <div className="w-full h-full">
          <form className=" flex justify-between">
            <input
              type="text"
              placeholder="Type here"
              className="input  border-blue-300 w-full max-w-xs"
            />
            <button className="btn btn-info">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </section>
      <section className="w-full p-10">
        <div className="w-full h-fit grid grid-cols-1 gap-6 auto-rows-auto place-items-center laptop3:grid-cols-4 laptop2:grid-cols-2 sm-md:grid-cols-2  md-lg:grid-cols-2">
          <Card image={LovetoLearn} />
          <Card image={AppleandBlocks} />
          <Card image={Chairs} />
          <Card image={Books} />
        </div>
      </section>
      <section className="w-full p-5 h-80 bg-blue-50">
        <div
          className="max-w-full h-full  p-6 rounded-xl flex flex-col justify-between laptop3:justify-evenly"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center">
            <span className="text-2xl font-lexend medium:text-3xl computer:text-4xl">
              Our students and parents love us
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-12 laptop3:grid-cols-4 laptop3:mt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-lexend laptop3:text-2xl computer:text-3xl text-white">
                10K
              </span>
              <span className="text-base font-lexend laptop3:text-xl text-white">
                Students Enrolled
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-lexend laptop3:text-2xl computer:text-3xl text-white">
                1K
              </span>
              <span className="text-base font-lexend laptop3:text-xl text-white">
                Classed Completed
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl font-lexend laptop3:text-2xl computer:text-3xl text-white">
                500
              </span>
              <span className="text-base font-lexend laptop3:text-xl text-white">
                Certified teachers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-lexend laptop3:text-2xl computer:text-3xl text-white">
                1K
              </span>
              <span className="text-base font-lexend text-center laptop3:text-xl text-white">
                Happy students
              </span>
            </div>
          </div>
        </div>
      </section>
      <Sidebar open={open} setOpen={setOpen} />
      <footer className="footer bg-blue-400 text-neutral-content items-center p-4 flex justify-between">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;
