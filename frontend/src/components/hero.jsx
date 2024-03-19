import { useNavigate } from "react-router-dom";
import React from "react";
import MainImg from "../assets/main.png";

const Hero = ({ setRegisterModalShow }) => {
  const navigate = useNavigate();

  const handleRecord = () => {
    if (localStorage.getItem("token") === null) {
      alert("Please login to view Attendance Table!");
    } else {
      navigate("/attendance");
    }
  };
  return (
    <div className="flex justify-center items-center gap-20 mt-5">
      {/* LEFT SECTION */}
      <section className="ml-4">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
          Attendance
        </h1>
          <h1 className="text-theme text-5xl md:text-6xl lg:text-8xl font-bold">
            Management
          </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-extralight mt-3">
          Mark your attendance and get the best out
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-extralight">
          of your time.
        </p>
        <div className="flex gap-8 mt-5">
          <button
            onClick={() => setRegisterModalShow(true)}
            className="bg-theme py-6 px-3 md:px-7 lg:px-12 rounded-xl text-lg font-medium text-white"
          >
            Register Now!
          </button>
          <button
            onClick={handleRecord}
            className="bg-light-theme py-6 px-4 md:px-7 lg:px-12 rounded-xl text-lg font-medium"
          >
            Attendance Table
          </button>
        </div>
      </section>
      {/* RIGHT SECTION */}
      <section className="hidden md:block lg:block">
        <img width={500} src={MainImg} alt="Main" />
      </section>
    </div>
  );
};

export default Hero;
