export const ServicesCarousel = ({className}: {className: string})=> {

    return (
        <div className={className}>
         <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
  <defs>
    
    <clipPath id="tShape">
      
      <rect x="30" y="40" width="340" height="150"/>
     
      <rect x="100" y="40" width="200" height="220"/>
    </clipPath>
   
    <pattern id="placeholderImage" patternUnits="userSpaceOnUse" width="100" height="100">
      <rect width="100" height="100" fill="#f3f4f6"/>
      <circle cx="50" cy="50" r="20" fill="#d1d5db"/>
      <rect x="40" y="35" width="20" height="15" fill="#9ca3af" rx="2"/>
      <polygon points="35,60 65,60 50,75" fill="#9ca3af"/>
    </pattern>
  </defs>
  
  <rect x="10" y="10" width="380" height="280" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2" rx="4"/>
  
  <rect x="0" y="0" width="400" height="300" fill="url(#placeholderImage)" clipPath="url(#tShape)"/>
  
  <text x="200" y="285" textAnchor="middle" fill="#6b7280" fontFamily="Arial, sans-serif" fontSize="12">T-Shape Image</text>
</svg>
        </div>
    )
}