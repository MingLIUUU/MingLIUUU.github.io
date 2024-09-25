"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./sectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <p className="mb-3">
          毕业于 <a href="https://www.utoronto.ca/" target="_blank" className="underline text-blue-500">多伦多大学</a>，获得<span className="font-medium">计算机科学、生物信息学与计算生物学，以及生理学</span>学位后，我一直在磨练我的<span className="font-medium">软件开发、生物数据分析，和问题解决</span>技能。我热衷于<span className="font-medium">全栈开发</span>，喜欢创造高效且可扩展的解决方案，并产生实实在在的影响。除了技术能力，我还通过担任多个职位，培养了强大的<span className="font-medium">沟通、合作，适应，和客服能力</span>。作为一名<span className="underline">活跃的自由插画师</span>（<a href="https://weibo.com/u/5424711627" target="_blank" className="underline text-blue-500">我的微博</a>），我还建立了一家结合我的创意与技术专长的业务。我的技术栈包括<span className="font-medium">Python、React、Node.js、MongoDB、C, Java, R</span>，并且我总是渴望探索新技术。目前，我正在寻找一份<span className="font-medium">全职软件开发人员职位</span>，希望能为创新项目做出贡献并不断专业成长。
        </p>

      ) : (
        <>
          <p className="mb-3">
            After graduating with a degree from <a href="https://www.utoronto.ca/" target="_blank" className="underline text-blue-500">UofT</a> in <span className="font-medium">Computer Science, Bioinformatics and Computational Biology, and Physiology</span>, I have been honing my skills in <span className="font-medium">software development, biological data analysis, and problem-solving</span>. I have a passion for <span className="font-medium">full-stack development</span> and enjoy creating efficient, scalable solutions that make a tangible impact. Along with my technical abilities, I’ve developed strong <span className="font-medium">communication, collaboration, adaptability, and customer service skills</span> from working in various roles. As an <span className="font-medium">active Freelance Illustrator</span> (my <a href="https://mingliuuu.github.io/MingoLia/" target="_blank" className="underline text-blue-500">art profolio</a>, <a href="https://linktr.ee/mingolia" target="_blank" className="underline text-blue-500">linktree</a>), I’ve also built a business that blends my creativity with technical expertise. My core stack includes <span className="font-medium">Python, React, Node.js, MongoDB, C, Java, and R</span>, and I am always eager to explore new technologies. I am currently seeking a <span className="font-medium">full-time position</span> as a software developer where I can contribute to innovative projects and continue growing professionally.
        </p>
        </>
      )}
    </motion.section>
  )
}
