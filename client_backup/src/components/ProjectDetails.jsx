import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaGithub } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

const ProjectDetails = () => {
  const { dark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  // In case user refreshes and state is lost
  if (!project) {
    navigate("/projects");
    return null;
  }

  return (
    <div
      className={`min-h-screen py-10 px-5 md:px-16 ${
        dark ? "bg-[#0b0c10] text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`flex items-center gap-2 mb-6 text-lg font-medium ${
          dark
            ? "text-gray-300 hover:text-white"
            : "text-gray-600 hover:text-black"
        }`}
      >
        <FaArrowLeft /> Back
      </button>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* 🖼️ Project Image */}
        <div className="flex-1">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl shadow-lg w-full h-auto object-contain"
          />
        </div>

        {/* 📋 Project Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>

          <p className="text-lg leading-relaxed text-gray-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.Skills.split(",").map((skill, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  dark
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {skill.trim()}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">Key Highlights</h2>
            <ul className="flex flex-col gap-3 text-gray-400">
              {project.details.split(",,").map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 leading-relaxed"
                >
                  <span className="text-gray-500 mt-1">•</span>
                  {point.trim()}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <a
              href={project.gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                dark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
