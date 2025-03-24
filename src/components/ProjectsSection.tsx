import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg flex flex-col h-full"
          >
            
            <div className="border-4 border-blue-500 rounded-lg overflow-hidden">
              <img
                src={project.image || "/default-placeholder.png"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>

           
            <h3 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">
              {project.title}
            </h3>

            
            <p className="text-gray-700 dark:text-gray-300 mt-2 flex-grow">
              {project.description}
            </p>

            
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techstack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white text-sm px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            
            <div className="flex gap-4 mt-4">
              <a
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-400 flex-1 text-center"
              >
                🌐 Website
              </a>
              {project.sourcelink ? (
                <a
                  href={project.sourcelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-400 flex-1 text-center"
                >
                  🛠 Source
                </a>
              ) : (
                <span className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-400 flex-1 text-center cursor-not-allowed">
                  ❌ No Source
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
