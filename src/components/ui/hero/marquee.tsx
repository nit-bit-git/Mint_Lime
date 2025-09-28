import FMMarquee from "@/lib/componentUtils/marQ"
import { Heading } from "@/lib/componentUtils/text"
import { useMediaQuery } from "@/lib/mediaQuery";

export const Marquee = () => {
     const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");
    return (
        <>
        {isMobile ? (

            <FMMarquee duration={40}>
              <Heading variant="outlined" size="2xl" level={1} className='italic'>WEB DEVELOPMENT</Heading>
              <Heading color="text-black" size="2xl" level={1} className='italic'>MOBILE APPS</Heading>
              <Heading variant="outlined" size="2xl" level={1} className='italic'>UI/UX DESIGN</Heading>
              <Heading color="text-black" size="2xl" level={1} className='italic'>E-COMMERCE</Heading>
              <Heading variant="outlined" size="2xl" level={1} className='italic'>DIGITAL MARKETTING</Heading>
              <Heading color="text-black" size="2xl" level={1} className='italic'>SEO OPTIMIZATION</Heading>
              <Heading variant="outlined" size="2xl" level={1} className='italic'>CONTENT CREATION</Heading>
              <Heading color="text-black" size="2xl" level={1} className='italic'>IT CONSULTING</Heading>
        </FMMarquee>
        ) : (

            <FMMarquee duration={40}>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>WEB DEVELOPMENT</Heading>
              <Heading color="text-black" size="7xl" level={1} className='italic'>MOBILE APPS</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>UI/UX DESIGN</Heading>
              <Heading color="text-black" size="7xl" level={1} className='italic'>E-COMMERCE</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>DIGITAL MARKETTING</Heading>
              <Heading color="text-black" size="7xl" level={1} className='italic'>SEO OPTIMIZATION</Heading>
              <Heading variant="outlined" size="7xl" level={1} className='italic'>CONTENT CREATION</Heading>
              <Heading color="text-black" size="7xl" level={1} className='italic'>IT CONSULTING</Heading>
        </FMMarquee>
       
        )}
        </>
 )  }