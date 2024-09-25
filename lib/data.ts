import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import { FaCat } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaMedkit } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";
import { CgHeart } from "react-icons/cg";

import ResTablePic from '@/public/projectResTable.png';
import projectRRA from '@/public/projectResRevApp.jpg';
import projectChat from '@/public/projectChat.jpeg'
import projectShiny from '@/public/projectShiny.png'

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
    Contact: "联系",
}

export const experiencesData = [
    {
        title: "Freelance Designer & Illustrator",
        location: "Toronto, Canada",
        description:
            "Developed and grew a successful freelance commission illustration business. Have showcased and sold original artwork at various conventions, including Comic-Con, engaging directly with customers and building a loyal following. Build a personal artwork Profolio website.",
        icon: React.createElement(CgHeart),
        date: "May 2022 - Present",
    },
    {
        title: "Customer Service Representative",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://mandarinrestaurant.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Mandarin Restaurant"),
            ", Toronto, Canada"
        ),
        description:
            "Performed various cutomer service duties to assisting the operating of the restaurant, maintain positive client replationships. Build a live table occupacy visualization online application in React, TypeScript.",
        icon: React.createElement(FaReact),
        date: "Aug 2024 - Present",
    },
    {
        title: "Administrative Support Volunteer,",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.vha.ca/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "VHA Home Healthcare"),
            ", Toronto, Canada"
        ),
        description:
            "Performed various administrative duties to assisting the operating of the clinic, maintain positive client replationships.",
        icon: React.createElement(FaHandHoldingMedical),
        date: "Apr 2024 - Present",
    },
    {
        title: "Pet Sitter,",
        location: "Rover Group. Inc, Toronto, Canada",
        description:
            " Provided attentive care to clients’ pets, draw animal profile arts, maintain positive client replationships.",
        icon: React.createElement(FaCat),
        date: "Sep 2023 - Present",
    },
    {
        title: "Honours BSc in Bioinformatic and Computational Biology Specialist, Physiology Major",
        location: "Univeristy of Toronto (UofT), Canada",
        description:
            "Studied with a heavy course load of two majors of Computer Science and Physiology, and a specialist of Bioinformatic and Computational Biology. Acquired a strong knowledge in Database Design and Management, Software Development, Algorithms,  Machine Learning, Genetics, Bioinformatics, and Human Reproductive Physiology.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2018 - Sep 2023 ",
    },
    {
        title: "Bioinformatic Student Researcher",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://coxsystemsbiology.medicine.utoronto.ca/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Cox Systems Biology Lab"),
            ", UofT, Canada"
        ),
        description:
            "Automated data pipelines in R/RNotebook, enhancing subtype identification research on preeclampsia across extensive patient datasets of 9,068,748 single nucleotide polymorphisms (SNP) from over 3000 preeclamptic patients",
        icon: React.createElement(FaRProject),
        date: "May 2023  - Aug 2023",
    },
    {
        title: "Deep Learning Data Analyst Intern",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://lin.csb.utoronto.ca/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Lin Neuroscience Lab"),
            ", UofT, Canada"
        ),
        description:
            "Developed a Python program that automatically extracted key features from fish response videos using deep learning algorithm, significantly enhanced the data collection and analysis process, leading to improved accuracy in clustering",
        icon: React.createElement(FaPython),
        date: "Sep 2022 - Apr 2023 ",
    },
    {
        title: "Emergency Response Support Intern",
        location: "Center for Disease Control and Prevention (CDC) in Fujian, China",
        description:
            "Supported epidemic response through data management and visualization, improving public awareness response strategies",
        icon: React.createElement(FaMedkit),
        date: "Sep 2021 - Jan 2022",
    },

]

export const experiencesDataZn = [
    {
        title: "自由职业设计师与插画师",
        location: "加拿大，多伦多",
        description:
            "开发并成功发展了自由职业的委托插画业务。曾在各种展会，包括漫展中展示并销售原创作品，直接与顾客互动并建立了忠实的粉丝群体。创建了个人艺术作品集网站。",
        icon: React.createElement(CgHeart),
        date: "2022年5月 - 现在",
    },
    {
        title: "客户服务代表",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://mandarinrestaurant.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Mandarin Restaurant"),
            "，加拿大，多伦多"
        ),
        description:
            "执行各种客户服务职责以协助餐厅的运营，保持积极的客户关系。使用React和TypeScript构建了一个在线桌位占用情况实时可视化应用。",
        icon: React.createElement(FaReact),
        date: "2024年8月 - 现在",
    },
    {
        title: "行政支持志愿者",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.vha.ca/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "VHA Home Healthcare"),
            "，加拿大，多伦多"
        ),
        description:
            "执行各种行政职责以协助诊所的运营，保持积极的客户关系。",
        icon: React.createElement(FaHandHoldingMedical),
        date: "2024年4月 - 现在",
    },
    {
        title: "宠物看护员",
        location: "Rover Group. Inc，加拿大，多伦多",
        description:
            "为客户的宠物提供细心照顾，绘制动物画像，保持积极的客户关系。",
        icon: React.createElement(FaCat),
        date: "2023年9月 - 现在",
    },
    {
        title: "荣誉理学学士，生物信息学与计算生物学专业，生理学主修",
        location: "多伦多大学 (UofT)，加拿大",
        description:
            "修读了计算机科学与生理学双主修课程，并主修生物信息学与计算生物学。掌握了数据库设计与管理、软件开发、算法、机器学习、遗传学、生物信息学以及人类生殖生理学的扎实知识。",
        icon: React.createElement(LuGraduationCap),
        date: "2018年9月 - 2023年9月",
    },
    {
        title: "生物信息学学生研究员",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://coxsystemsbiology.medicine.utoronto.ca/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Cox System Biology Lab"),
            "，多伦多大学，加拿大"
        ),
        description:
            "在R/RNotebook中自动化了数据管道，增强了对3,000多名子痫前期患者的9,068,748个单核苷酸多态性（SNP）数据集的亚型识别研究。",
        icon: React.createElement(FaRProject),
        date: "2023年5月 - 2023年8月",
    },
    {
        title: "深度学习数据分析实习生",
        location: 
        React.createElement("span", {},
            React.createElement("a", {
                href: "https://lin.csb.utoronto.ca/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Lin Neuroscience Lab"),
            "，多伦多大学，加拿大"
        ),
        description:
            "开发了一个Python程序，使用深度学习算法自动提取鱼类反应视频中的关键特征，大大增强了数据收集和分析过程，提高了聚类的准确性。",
        icon: React.createElement(FaPython),
        date: "2022年9月 - 2023年4月",
    },
    {
        title: "应急响应支持实习生",
        location: "中国福建省疾病预防控制中心（CDC）",
        description:
            "通过数据管理和可视化支持疫情响应，改善了公众应对策略的意识。",
        icon: React.createElement(FaMedkit),
        date: "2021年9月 - 2022年1月",
    }
    
]

export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Table Occupancy Visualization App (2024)",
        "title_zh": "餐厅桌位占用率视觉化应用",
        "description":
            "An intuitive and dynamic restaurant table occupancy visualization tool, offering full layout customization. Users can effortlessly add tables, group tables into specific rooms, and calculate total capacity and waiting times for newly-arrived guests. ",
        "desc_zh": "一个直观且动态的餐厅桌位占用率视觉化工具，提供全面的布局定制功能。用户可以轻松添加桌子、调整座位容量、将桌子分组到特定房间，并即时计算餐厅总容量和新到顾客的等待时间。",
        "tags": ["React", "TypeScript", "UI/UX Design", "Data Visualization",],
        "imageUrl": ResTablePic,
        "projectUrl": "https://github.com/MingLIUUU/ResTable",
        "demoUrl": "https://mingliuuu.github.io/ResTable/",
        isLiveDemo: true,
    },
    {
        title: "Friend Chat App on C Server",
        title_zh: "C服务器上的好友聊天应用",
        description:
            "Developed a real-time chat application on a Linux server using C. Leveraged machine-level programming and BASH scripting for efficient server-side operations, ensuring reliable communication between users.",
        desc_zh: "在Linux服务器上使用C语言开发的实时聊天应用。通过机器级编程和BASH脚本实现高效的服务器端操作，使用GDB调试器优化性能和排除故障，确保用户间的可靠通信。",
        tags: ["C Programming", "Linux Server", "Make", "BASH"],
        imageUrl: projectChat,
        projectUrl: 'https://github.com/MingLIUUU/FriendsChat',
        isLiveDemo: true,        
    },
    {
        title: "Bioinfo Sequence Alignment R package ",
        title_zh: "",
        description:
            `Developed a web application using shiny R package and dynamic programming algorithm for sequence variant analysis with functions of multiple sequence alignment.
            `,
        desc_zh: "",
        tags: ["Bioinformatics", "Dynamic Programming", "R", "shiny R", "Visualization"],
        imageUrl: projectShiny,
        projectUrl: 'https://github.com/Codefreyy/Breddit',
        isLiveDemo: true,
    },
    {
        title: "Review & Rate Restaurant App (2020)",
        title_zh: "餐厅评分与点评应用",
        description: "A restaurant rating and review app similar to Yelp, developed in Java. Uses Clean Architecture and Object-Oriented Design for scalable, maintainable code. MySQL is integrated for efficient data storage, retrieval, and manipulation.",
        desc_zh: "一个类似于Yelp的全功能餐厅评分与点评应用，使用Java开发。该项目采用了清晰架构原则和面向对象设计，确保代码的可扩展性和可维护性。通过集成MySQL数据库，保证用户点评和评分的高效存储、检索和处理。此应用为用户提供了发现、评分和点评餐厅的流畅体验。",
        tags: ["Java", "Clean Architecture", "MySQL", "Object-Oriented Design"],
        imageUrl: projectRRA,
        demoUrl: 'https://drive.google.com/file/d/1iGE-8OPxoPayNpQjyaYqUyqSay1z8Rg8/view?usp=sharing',
        isLiveDemo: false,
        
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "MongoDB",
    "Framer Motion",
    "d3",
    "UI/UX"
] 
