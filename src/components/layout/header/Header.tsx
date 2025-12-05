"use client";
import Link from "next/link";
import LanguageSelect from "./LanguageModal";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-[#ffffff] sticky top-0 left-0 w-full border-transparent z-50 py-3">
      <div className="container">
        <div className="flex justify-between md:flex-row flex-row-reverse items-center">
          <div className="flex gap-[40px] items-center">
            <Image src={logo} alt="img" />
            <div className="hidden items-center md:flex">
              <LanguageSelect />
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center">
            <div className="burger__button">
              <label>
                <input type="checkbox" checked={isOpen} onChange={toggleBox} />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>
          <div className="md:flex hidden items-center gap-[27px] text-gray-600">
            <Link href="/#hero">{t("hero")}</Link>
            <Link href="/">{t("about")}</Link>
            <Link href="/">{t("projects")}</Link>
            <Link href="/">{t("mission")}</Link>
            <Link href="/">{t("events")}</Link>
          </div>
        </div>
      </div>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
