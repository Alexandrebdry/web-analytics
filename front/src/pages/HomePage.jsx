import React, { useState } from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="card bordered">
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

const NewProjectCard = () => {
    return (
        <div className="card bordered">
            <div className="card-body">
                <div className="justify-center card-actions">
                    <button className="btn btn-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        New App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function HomePage() {
    // Pour cet exemple, nous créons des projets fictifs.
    const [projects, setProjects] = useState([
        { id: 1, name: "Projet 1", description: "Description du Projet 1" },
        { id: 2, name: "Projet 2", description: "Description du Projet 2" },
    ]);

    return (
        <div className="p-6">
            <div className="mt-4">
                <NewProjectCard />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
