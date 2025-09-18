
import { memo } from "react";
import { Heading } from "@/lib/componentUtils/text";

  type MenuProps = {
    onSelect: (id: number) => void;
    selectedId: number | null;
  };

 function ServicesMenubar({onSelect, selectedId}: MenuProps) {
   const navItems = [
  {
    name: "Build",
    id: 1
  },
  {
    name: "Design",
    id: 2
  },
 {
    name: "Grow",
    id: 3
  }
]

    return (
    <div className="relative w-full bg-black flex flex-row items-center justify-center">
     {navItems.map((item, index)=>(
        <span key={index}  onClick={()=>onSelect(item.id)}>
          <Heading size='4xl' color={selectedId == item.id ? 'text-white' : 'text-gray-800'}>
            {item.name}
          </Heading>
        </span>
     ))}
        </div>
    )
}

export default memo(ServicesMenubar)