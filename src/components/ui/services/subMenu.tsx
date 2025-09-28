
import { memo } from "react";
import { cn } from "@/lib/utils";
import { Heading, Paragraph } from "@/lib/componentUtils/text";
import { motion } from "motion/react";
import { useMediaQuery } from "@/lib/mediaQuery";


type SubMenuProps = {
  onSkillSelect: (id: number) => void;
  selectedId: number
  className: string;
  selectedSkill: number
};
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

function SubMenu({selectedId, className, selectedSkill, onSkillSelect}: SubMenuProps) {
    const isMobile = useMediaQuery("(max-width: 768px)")
   
    const selectedNavItem = navItems.find(item => item.id === selectedId)?.subItems
    const handleClick = (index: number) => {
      onSkillSelect(index)
    }
    return (
  <div className={cn("relative w-full", className)}>
    {selectedNavItem ? (
      <div className="relative space-y-2 md:space-y-3">
        {/* Background decoration */}
        <div className="flex flex-col gap-2 md:gap-3 p-3 md:p-4">
          {selectedNavItem.map((subItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                paddingLeft: isMobile ? (index + 1) * 10  : (index + 1) * 20 // Responsive padding
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.02, 
                x: 4,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-pointer group"
              onClick={() => handleClick(index)}
              style={{ paddingLeft: isMobile ? (index + 1) * 10 :(index + 1) * 20 }}
            >
              {/* Hover background */}
              {selectedSkill === index && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/1 rounded-lg blur-sm -z-10" />
              )}
              <div className="absolute inset-0 bg-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              
              {/* Selection indicator */}
              {selectedSkill === index && (
                <motion.div
                  layoutId="submenu-highlight"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-full"
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30 
                  }}
                />
              )}
              
              {/* Content */}
              <div 
                className="relative pl-4 py-2 md:py-3 transition-all duration-200"
                style={{ paddingLeft: `max(1rem, var(--pad))` }}
              >
                <Heading 
                  size="xl" 
                  color={selectedSkill === index ? "text-white" : "text-gray-400 group-hover:text-gray-200"}
                  className="font-medium transition-colors duration-200"
                >
                  {subItem}
                </Heading>
                
                {/* Subtle accent line */}
                <div className={`absolute bottom-0 left-4 right-0 h-px bg-gradient-to-r from-white/20 to-transparent transition-opacity duration-200 ${selectedSkill === index ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative gradient */}
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-md pointer-events-none" />
      </div>
    ) : (
      /* Empty state */
      <div className="relative flex flex-col items-center justify-center p-6 md:p-8 text-center min-h-[120px]">
        <div className="absolute inset-0 bg-white/5 rounded-lg backdrop-blur-sm -z-10" />
        
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-3">
          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        <Paragraph className="text-gray-400" size="sm">
          Select a service to view options
        </Paragraph>
      </div>
    )}
  </div>
);
}
export default memo(SubMenu)