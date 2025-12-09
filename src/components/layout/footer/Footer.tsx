"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="p-5 border border-t">
      <div className="container">
        <div className="flex justify-center items-center">
          <Link
            target="_blank"
            className="text-[14px] text-gray-500"
            href="https://www.instagram.com/dastan.mukeev/"
          >
            {t("developed")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
