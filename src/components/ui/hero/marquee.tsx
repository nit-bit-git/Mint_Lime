import FMMarquee from "@/lib/componentUtils/marQ"
import { Heading } from "@/lib/componentUtils/text"

export const Marquee = () => {
    return (
        <FMMarquee duration={40}>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>WEB DEVELOPMENT</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>MOBILE APPS</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>UI/UX DESIGN</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>E-COMMERCE</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>DIGITAL MARKETTING</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>SEO OPTIMIZATION</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>CONTENT CREATION</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>IT CONSULTING</Heading>
            </FMMarquee>
            
            )  }