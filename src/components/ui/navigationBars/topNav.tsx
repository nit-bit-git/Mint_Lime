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
        name: "Pricing",
        link: "#pricing",
        },
        {
        name: "Contact",
        link: "#contact",
        }
    ]
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo>
            <Image
              src="http://192.168.29.250:3000/images/logos/logo.svg"
              alt="Logo"
              width={150}
              height={150}
              priority
              style={{ width: "auto", height: "auto" }}
            />
             <Image
              src="http://192.168.29.250:3000/images/logos/logoSymbol.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </NavbarLogo>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Xplore</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>
        </Navbar>
        </div>
    )
}