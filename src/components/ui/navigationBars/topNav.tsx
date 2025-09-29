"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/lib/componentUtils/navbar";
import { useState } from "react";
import Image from "next/image";

export default function TopNavbar() {
    const navItems = [
            {
        name: "LinkedIn",
        link: "#linkedIn",
        },
        {
        name: "Instagram",
        link: "#instagram",
        },
        {
        name: "X",
        link: "#x",
        },
        {
        name: "Youtube",
        link: "#youtube",
        }
    ]
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo className="flex items-start pointer-events-none ">
            <div className="relative h-16 w-48">
              <Image
              src="/images/logos/logo.svg"
              alt="Logo"
              fill
              priority
            />
            </div>
            <div className="relative h-16 w-16">
              <Image
              src="/images/logos/logoSymbol.svg"
              alt="Logo"
              fill
              className="hidden xl:block"
              priority
            />
            <Image
              src="/images/logos/logoText.svg"
              alt="Logo"
              fill
              className="xl:hidden"
              priority
            />
            </div>
             
            
          </NavbarLogo>
          <NavItems items={navItems}  />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" className="cursor-pointer pointer-events-auto">Contact</NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo className="absolute inset-0 pointer-events-none">
             <Image
              src="/images/logos/logoText.svg"
              alt="Logo"
              fill
              priority
            />
            <Image
              src="/images/logos/logo.svg"
              alt="Logo"
              fill
              priority
            />
             </NavbarLogo>
          <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contact
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
        </Navbar>
        </div>
    )
}