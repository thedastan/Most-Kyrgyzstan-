"use client";

import Link from "next/link";
import LanguageSelect from "./LanguageModal";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();

  const handleAnchor = (id: string) => {
    if (pathname !== "/") {
      // Перейти на главную с хэшем
      router.push(`/#${id}`);
    } else {
      // На главной просто скроллим
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div
      id="menu-overlay"
      className={`fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-[100vh] z-50 transition-opacity duration-700 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-[100%] h-full bg-white p-4 flex flex-col justify-start gap-4 shadow-lg z-50 transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-col justify-between items-start h-[70ch]">
          <div className="flex flex-col items-start w-[100%] text-start p-[20px] gap-4 mt-16">
            <button onClick={() => handleAnchor("hero")}>{t("hero")}</button>
            <button onClick={() => handleAnchor("about")}>{t("about")}</button>
            <button onClick={() => handleAnchor("project")}>
              {t("projects")}
            </button>
            <button onClick={() => handleAnchor("mission")}>
              {t("mission")}
            </button>
            <button onClick={() => handleAnchor("events")}>
              {t("events")}
            </button>
            <LanguageSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
