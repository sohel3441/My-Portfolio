import { useState, useEffect } from "react";
import axios from "axios";

const staticProjects = [
  {
    _id: "lms",
    title: "Learning Management System",
    description:
      "A full-stack platform for managing courses, enrollments, and student progress with secure authentication and cloud-based uploads.",
    technologies: ["MongoDB", "Express", "React", "Node", "Redux", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    _id: "ecommerce",
    title: "E-Commerce Grocery Application",
    description:
      "A grocery shopping platform with product browsing, cart management, and seamless checkout experience.",
    technologies: ["MongoDB", "Express", "React", "Node", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    _id: "inventory",
    title: "Vendor Inventory Tracking System",
    description:
      "A role-based system to track vendors, manage stock, and maintain inventory history.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects([...staticProjects, ...res.data]);
      } catch (error) {
        console.error(error);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return null;

  return (
    <section className="container py-5" id="projects">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Projects</h1>
        <p className="text-muted">
          Here are some of the projects I’ve built.
        </p>
      </div>

      {/* GRID */}
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project._id}>
            
            <div className="card h-100 shadow-sm border-0 p-3 project-card">

              <div className="card-body d-flex flex-column">

                {/* TITLE */}
                <h5 className="fw-bold mb-2">{project.title}</h5>

                {/* DESC */}
                <p className="text-muted small">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="badge bg-light text-dark border">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-auto d-flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-dark w-100"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-dark w-100"
                  >
                    Code
                  </a>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;  