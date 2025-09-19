
import { memo } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/lib/componentUtils/text";


type SubMenuProps = {
  onSkillSelect: (id: number) => void;
  selectedId: number
  className: string;
  selectedSkill: number
};


function SubMenu({selectedId, className, selectedSkill, onSkillSelect}: SubMenuProps) {
 
   const navItems = [
  {
    id: 1,
    subItems: ["Web & Mobile Development", "AI & Machine Learning"]
  },
  {
    id: 2,
    subItems: ["UI/UX Design", "Branding & Visual Identity"]
  },
  {
    id: 3,
    subItems: ["Data Analytics","Digital Marketing & SEO", "Social Media Strategy"]
  }
]
const selectedNavItem = navItems.find(item => item.id === selectedId)?.subItems
const handleClick = (index: number) => {
  
  onSkillSelect(index)

}
    return (
    <div className={cn(className, "")} >
      {selectedNavItem ? (
        <div className={cn(className, "gap-2 p-4")}>
          {selectedNavItem.map((subItem, index) => (
            <span key={index}  style={{ "--pad": `${(index+1) * 40}px` } as React.CSSProperties } className="ml-[var(--pad)] hover:text-gray-300 cursor-pointer bg-black z-10" onClick={()=>handleClick(index)} >
                 <Heading size='4xl' color={selectedSkill == index ? 'text-white' : 'text-gray-800'} > 
                    {subItem}
                </Heading>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 p-4">No items selected</div>
      )}
    </div>
    )
}

export default memo(SubMenu)