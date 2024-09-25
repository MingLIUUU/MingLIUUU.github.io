"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl"


export default function Contact() {
  const { ref } = useSectionInView("Contact")

  const activeLocale = useLocale()

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>        {" "}
        {activeLocale === "zh"
          ? "联系"
          : "Contact"}</SectionHeading>
      {activeLocale == "zh" ? (
      <>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        请点击此email地址向我发送邮件联系{" "}
        <a className="underline" href="mailto:example@gmail.com">
          liu.mingzheng@outlook.com
        </a>{" "}。
      </p>
      </>
      ) : (
      <>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          liu.mingzheng@outlook.com
        </a>{" "}.
      </p>
      </>
      )}
    </motion.section>
  );
}
