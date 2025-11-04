import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";
import recommender from "../assets/recommender.png";
import recipe from "../assets/recipe.png";
import videocall from "../assets/videocall.png";
import usermanager from  "../assets/usermanager.png"

const starOptions = {
  background: { color: "#000000" },
  particles: {
    number: { value: 120, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 3 } },
    move: { enable: true, speed: 0.6, outModes: "out" },
  },
};

const Projects = ({ selectedTag = "All" }) => {
  const { dark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const nav = useNavigate();

  const handleViewMore = () => {
    nav("/projects");
    window.scrollTo(0, 0);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const project_details = [
    {
      image: recommender,
      title: "Movie Recommender",
      description:
        "The Movie Recommendation System is a machine learning–based project designed to suggest movies to users based on their watched movies. It leverages content-based filtering.",
      Skills:
        "SVC,NLP,Streamlit,TMDB,Pandas,Numpy,Python,Feature Engineering",
      details:
        "Personalized movie recommendations based on similarity analysis,,ML algorithms like SVC Vectorization and Cosine Similarity,,Clean visualization of data and similarity metrics,,Search functionality for user-selected movies,,Interactive UI for exploring and comparing recommendations,,Used TMDB API for movie posters and metadata",
      gitlink:
        "https://github.com/Srikar282006/movie_recommendation_system",
    },
    {
      image: videocall,
      title: "Apna Video Call",
      description:
        "The platform supports seamless video and audio streaming, chat functionality, dynamic user management and peer-peer communication, all built with a responsive and intuitive interface.",
      Skills:
        "MERN,WebRTC,Node.js,React,JWT,Axios,Socket.io,Express,Bcrypt,MongoDB,JavaScript,UI/UX,REST API",
      details:
        "Real-time video and audio communication using WebRTC,,Integrated chat functionality during calls,,Secure JWT-based authentication and user management,,Low-latency peer-to-peer connections with Socket.io,,Responsive and intuitive design optimized for all devices,,Scalable backend handling multiple users efficiently",
      gitlink: "https://github.com/Srikar282006/VideoCall_App",
    },
    {
      image: usermanager,
      title: "User Manager",
      description:
        "An admin dashboard that enables administrators to add, edit, and delete users, viewable in both table and card layouts with a secure and responsive design.",
      Skills:
        "React,Node.js,Express,MongoDB,JWT,Axios,TailwindCSS,REST API,UI/UX",
      details:
        "Admins can add, edit, and delete users dynamically,,Users displayed in table and card views for flexibility,,Secure role-based access control with JWT authentication,,Real-time updates with search and filtering features,,Responsive and intuitive dashboard UI for seamless navigation,,Scalable backend architecture for smooth CRUD operations",
      gitlink: "https://github.com/Srikar282006/UserManager_Dashboard",
    },
    {
      image: recipe,
      title: "Recipe Sharing Website",
      description:
        "A responsive web application that allows users to explore and share their favorite recipes. Users can add, edit, and delete their own recipes, while anyone can view recipes without logging in.",
      Skills:
        "React,TailwindCSS,UI/UX,Nodejs,MongoDB,RestApi,Axios,Node Mailer,Express,DaisyUi,JWT,Bcrypt",
      details:
        "Recipe management — add, edit, and delete recipes with images and detailed steps,,Public recipe viewing without login,,Share recipes directly via email using Nodemailer API,,Secure authentication and encrypted passwords with JWT and Bcrypt,,Responsive UI for mobile and desktop compatibility,,Optimized performance and clean interface for a smooth experience",
      gitlink:
        "https://github.com/Srikar282006/Recipe_Sharing_website.git",
    },
  ];

  useEffect(() => {
    if (window.location.pathname === "/projects") {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, []);

  const filteredProjects =
    selectedTag === "All"
      ? project_details
      : project_details.filter((p) =>
          p.Skills.toLowerCase().includes(selectedTag.toLowerCase())
        );

  return (
    <>
      {dark && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={starOptions}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}

      <div className="mt-3">
        <h1
          className={`text-center text-3xl sm:text-3xl md:text-5xl lg:text-5xl ${
            !dark ? "text-black" : "text-white"
          }`}
        >
          Featured Projects
        </h1>
        <p className="text-center text-2xl sm:text-lg md:text-2xl lg:text-2xl text-gray-500 mt-2">
          Check out some of my latest work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 px-2 py-4 mt-4">
          {filteredProjects.map((elem, index) => (
            (showAll || index < 3) && (
              <div
                key={index}
                className={`flex flex-col justify-between border rounded-2xl shadow-lg p-5 m-2 transition-all duration-300 hover:shadow-2xl ${
                  dark
                    ? "bg-[#0b0c10] border-gray-700 hover:border-gray-400"
                    : "bg-white border-gray-300 hover:border-black"
                }`}
              >
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src={elem.image}
                    alt={elem.title}
                    className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col flex-grow justify-between text-center px-1">
                  <div>
                    <h2
                      className={`text-2xl font-semibold mb-2 ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {elem.title}
                    </h2>
                    <p
                      className={`text-base mb-4 ${
                        dark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {elem.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {elem.Skills.split(",")
                        .slice(0, 4)
                        .map((skill, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-sm rounded-lg font-medium ${
                              dark
                                ? "bg-slate-700 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      {elem.Skills.split(",").length > 4 && (
                        <span
                          className={`px-3 py-1 text-sm rounded-lg font-medium ${
                            dark
                              ? "bg-slate-700 text-white"
                              : "bg-gray-300 text-black"
                          }`}
                        >
                          +{elem.Skills.split(",").length - 4}
                        </span>
                      )}
                    </div>

                    {/* ✅ Show 5 points on Home, all points on Projects/Details */}
                    <div
                      className={`flex flex-col gap-2 text-left px-4 ${
                        dark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {(showAll ||
                      window.location.pathname.startsWith("/projects/")
                        ? elem.details.split(",,")
                        : elem.details.split(",,").slice(0, 5)
                      ).map((point, i) => (
                        <p key={i} className="flex items-start">
                          <FaArrowRight
                            size={13}
                            className="mt-1 mr-2 flex-shrink-0 text-gray-500"
                          />
                          {point.trim()}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <button
                      onClick={() =>
                        nav(`/projects/${index}`, { state: { project: elem } })
                      }
                      className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition ${
                        dark
                          ? "bg-white text-black hover:bg-gray-200"
                          : "bg-black text-white hover:bg-gray-900"
                      }`}
                    >
                      View Details <FaArrowRight />
                    </button>

                    <a
                      href={elem.gitlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-3 rounded-full transition ${
                        dark
                          ? "text-white hover:bg-black"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center hover:px-2">
            <button
              className="btn w-auto text-center bg-white border rounded-md hover:bg-gray-200"
              onClick={handleViewMore}
            >
              View more <FaArrowRight className="ml-2 mt-1" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
