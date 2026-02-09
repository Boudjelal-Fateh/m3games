"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Set initial hash
    setActiveHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#web3", label: "Web3" },
    { href: "#ai", label: "AI" },
    { href: "#plans", label: "Plans" },
    { href: "#contact", label: "Contact" },
  ];

  const languages = [
    { value: "en", label: "EN", flag: "./united-states.svg" },
    { value: "es", label: "ES", flag: "./spain.svg" },
  ];

  const isActive = (href: string) => activeHash === href;

  const handleLinkClick = (href: string) => {
    setActiveHash(href);
  };

  const currentLanguage = languages.find((lang) => lang.value === language);

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="sticky top-0 z-50 w-full border-b border-[#ffffff]/6 px-4 lg:px-[100px] bg-black py-6 xl:px-[330px]">
        <div className="">
          <div className="flex self-stretch items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-onest text-lg font-semibold text-[#E6E6E6] leading-[23px] tracking-wide">
                M3 Games
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`font-onest text-center text-base leading-6 tracking-wide ${
                    isActive(link.href)
                      ? "font-medium text-white underline"
                      : "font-normal text-[#9C9C9D]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden gap-[14px] md:flex items-center">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-auto border-[#191919] rounded-[8px] bg-[#101010] text-[#9C9C9D] font-onest text-[15px] leading-[19px] font-[500] tracking-[0.2px]  px-3 py-[10px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black border-[#ffffff]/20">
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang.value}
                      value={lang.value}
                      className="text-[#9C9C9D] font-onest text-[15px] leading-[19px] font-[500] tracking-[0.2px]  "
                    >
                      <Image
                        width={20}
                        height={20}
                        className="mr-2"
                        src={lang.flag}
                        alt={lang.label}
                      />
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="flex h-9 min-h-[36px] leading-[16px] font-[500] tracking-[0.2px] text-[14px] text-[#2f3031]  cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-[#E6E6E6] px-3 py-[10px] font-onest   shadow-[0_0_0_2px_rgba(0,0,0,0.50),0_0_14px_0_rgba(255,255,255,0.19),inset_0_-1px_0.4px_0_rgba(0,0,0,0.20),inset_0_1px_0.4px_0_#FFF] hover:bg-[#d0d0d0] transition-colors">
                Get Started Today
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="pb-4 md:hidden">
              <div className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      handleLinkClick(link.href);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 font-onest text-base ${
                      isActive(link.href)
                        ? "font-medium text-white underline"
                        : "font-normal text-[#9C9C9D]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-[#ffffff]/6 px-4 py-2 space-y-2">
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-full border-[#ffffff]/20 bg-black text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black  border-[#ffffff]/20">
                      {languages.map((lang) => (
                        <SelectItem
                          key={lang.value}
                          value={lang.value}
                          className="text-white  "
                        >
                          <Image
                            width={20}
                            height={20}
                            className="mr-2"
                            src={lang.flag}
                            alt={lang.label}
                          />
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button className="w-full bg-white text-black hover:bg-zinc-200 font-onest font-medium">
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
