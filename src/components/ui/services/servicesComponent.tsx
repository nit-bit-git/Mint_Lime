import { useEffect, useState } from "react";
import ServicesMenubar from "./menuBar";
import SubMenu from "./subMenu";

export default function ServiceComponent() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedSkill, setSelectedSkill] = useState<number>(0)
    useEffect(() => {
        setSelectedSkill(0) 
        }, [selectedId])
  return (
    <div className="flex flex-col gap-6">
 
      <ServicesMenubar onSelect={setSelectedId} selectedId={selectedId} />

      <SubMenu className="flex flex-col" onSkillSelect={setSelectedSkill} selectedId={selectedId} selectedSkill={selectedSkill} />
        <p> {selectedSkill}</p> 
    </div>
  );
}