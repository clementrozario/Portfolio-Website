import ProjectsSection from "./ProjectsSection";

const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Zustand",
    "AWS",
    "TailwindCSS",
]

const RightSection = () => {
    return(
        <div className="mt-10">
            <h2 className="font-semibold text-3xl">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill)=>(
                    <span key={skill} className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
                        {skill}
                    </span>
                ))}
            </div>
            <ProjectsSection />
        </div>
    )
}
export default RightSection;