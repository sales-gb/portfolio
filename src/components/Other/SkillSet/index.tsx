import { Skill } from "@/data/SkillData";

import SkillProcess from "@/components/Other/SkillProcess";

import { SkillData } from "@/interfaces/SkillProcessProps/SkillProcessProps";

const SkillSet = () => {
  return (
    <div className="w-full h-fit sm:h-full flex items-center flex-col justify-start lg:justify-center pt-20 pb-10 sm:py-20 lg:py-24">
      <ul className="w-full h-3/4 lg:h-full flex flex-wrap gap-2 sm:gap-5 lg:gap-x-10 lg:gap-y-10 lg:items-center lg:justify-center px-5 sm:px-10">
        {Skill.map((e: SkillData) => (
          <SkillProcess
            key={e.id}
            title={e.title}
            years={e.years}
            percentage={e.percentage}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
