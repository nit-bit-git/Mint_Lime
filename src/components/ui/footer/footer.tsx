import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LinkedInIcon, InstagramIcon, XIcon } from "@/components/icons/icons";
import Image from 'next/image';
// Type definitions
interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  [key: string]: any;
}

interface FooterProps {
  className?: string;
}

interface LinkItem {
  label: string;
  href: string;
}

// Mock Image component for demo - replace with your actual Image import
const ImageProp: React.FC<ImageProps> = ({ src, alt, fill, priority, className, ...props }) => (
  <Image src={src} alt={alt} className={className} fill={fill}{...props} priority={priority} />
);

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      className={cn(
        "relative border-t border-neutral-200 dark:border-neutral-800 lg:h-[250px] overflow-hidden bg-gradient-to-t from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800",
        className
      )}
    >
      {/* Background SVG - positioned at bottom with crop */}
      <div className="absolute bottom-0 left-0 w-full  h-[120%] z-10 blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
            <ImageProp
                src="/images/footer/bgArt.svg"
                alt=""
                fill={true}
                className="object-cover object-bottom w-full h-full opacity-30 dark:opacity-20"
            />
        </motion.div>
      </div>

      {/* Logo - Top Left */}
      <motion.div
        variants={logoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute flex flex-col top-6 left-6 z-10 space-y-3"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* Replace this path with your actual logo */}
          <Image
                        src="/images/logos/logo.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                        priority
                        style={{ width: "auto", height: "auto" }}
                      />
        </motion.div>
         {/* Social Links */}
            <motion.div
                variants={itemVariants}
                className="flex w-fit gap-2 md:gap-4 p-2 md:p-3 bg-white/20 dark:bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-white/30"
              >
              {(
                [
                  { name: "Twitter", href: "#", icon: XIcon },
                  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
                  { name: "Instagram", href: "#", icon: InstagramIcon },
                ] as { name: string; href: string; icon: React.ComponentType<any> }[]
              ).map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit our ${social.name}`}
                  className="p-2 md:p-3 bg-white/0 dark:bg-neutral-700/60 rounded-full hover:bg-white/50 dark:hover:bg-neutral-600 transition-all duration-200 flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute  z-10 flex flex-col top-0 h-full px-6 py-8"
      >
        <div className=" relative text-center space-y-4 md:space-y-8">
          {/* Main Footer Content */}
          <motion.div variants={itemVariants} >
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              Let&lsquo;s Build Something Amazing
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
              Transforming ideas into digital experiences that drive growth and innovation.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            {([
              { label: "mintlime.info@gmail.com", href: "mailto:hello@mintlime.com" },
              { label: "Work with us", href: "/contact" },
              { label: "Our Story", href: "/about" },
            ] as LinkItem[]).map((link: LinkItem, index: number) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

         
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-0 right-0 flex flex-col sm:flex-row items-center justify-between px-6 gap-2 text-xs text-neutral-500 dark:text-neutral-500"
        >
          <div className="flex items-center gap-4">
            <span>© {currentYear} MintLime. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href="/privacy"
              whileHover={{ color: "#3b82f6" }}
              className="hover:underline transition-colors duration-200"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/terms"
              whileHover={{ color: "#3b82f6" }}
              className="hover:underline transition-colors duration-200"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              y: [-20, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              left: `${20 + i * 30}%`,
              bottom: "10%",
            }}
          />
        ))}
      </div>
    </footer>
  );
};