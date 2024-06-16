import Icon from "@/components/Other/Icon";

import { SkillProcessProps } from "@/interfaces/SkillProcessProps/SkillProcessProps";

const SkillProcess = ({ title, years, percentage }: SkillProcessProps) => {
  return (
    <li className="w-8 lg:w-16 h-min flex items-center justify-start lg:justify-center gap-4">
      <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
        <Icon className="relative w-full" id={title} />
      </div>
    </li>
  );
};

export default SkillProcess;
