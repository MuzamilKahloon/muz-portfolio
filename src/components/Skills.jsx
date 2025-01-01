import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div className="container px-4 py-10 mx-auto" id="skills">
      <h2 className="mt-20 mb-12 text-4xl font-semibold text-center text-white">Skills</h2>
      <div className="max-w-3xl px-6 py-4 mx-auto shadow-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center justify-between py-4 ${
              index !== SKILLS.length - 1 ? "border-b border-gray-700" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-blue-400">{skill.icon}</div>
              <h3 className="text-lg font-medium text-white">{skill.name}</h3>
            </div>
            <div className="text-lg font-semibold text-gray-300">{skill.experience}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
