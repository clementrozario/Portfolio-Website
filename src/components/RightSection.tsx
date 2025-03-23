const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Redux",
    "AWS",
    "TailwindCSS",
    "GraphQL",
]

const RightSection = () => {
    return(
        <div>
            <h2 className="font-semibold text-3xl">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill)=>(
                    <span key={skill} className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
export default RightSection;