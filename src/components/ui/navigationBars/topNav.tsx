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
          <NavbarLogo className="pointer-events-none">
            <Image
              src="/images/logos/logo.svg"
              alt="Logo"
              width={150}
              height={150}
              priority
              style={{ width: "auto", height: "auto" }}
            />
             <Image
              src="/images/logos/logoSymbol.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </NavbarLogo>
          <NavItems items={navItems}  />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" className="cursor-pointer pointer-events-auto">Book a call</NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
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
                className="relative text-neutral-600 dark:text-neutral-300"
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
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
        </Navbar>
        </div>
    )
}