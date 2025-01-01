import { EXPERIENCES } from "../constants";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      <h2 className="text-4xl font-semibold tracking-tighter text-center">Work Experience</h2>
      <div className="p-10 space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl border-stone-50/30 bg-white/10"
          >
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <p className="text-xl">{experience.company}</p>
            <p className="text-sm text-stone-300">{experience.duration}</p>
            <p className="mt-2 text-base">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
