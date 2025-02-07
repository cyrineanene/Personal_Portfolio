import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";
import project4 from "../assets/projects/Project-4.png";
import project5 from "../assets/projects/Project-5.png";

import certificate1 from "../assets/certificates/nvidia.webp";
import certificate2 from "../assets/certificates/data_engineering.png";
import certificate3 from "../assets/certificates/cloud.png";
import certificate4 from "../assets/certificates/machine_learning.png";

import volunteering1 from "../assets/volunteering/ieee.jpg";
import volunteering2 from "../assets/volunteering/indabax.jpg";
import volunteering3 from "../assets/volunteering/sje.jpg";
import volunteering4 from "../assets/volunteering/tsyp12.png";
import volunteering5 from "../assets/volunteering/tsyp11-1.jpg";
import volunteering6 from "../assets/volunteering/citd.jpg";
import volunteering7 from "../assets/volunteering/ils.jpg";
import volunteering8 from "../assets/volunteering/mts.png";
import volunteering9 from "../assets/volunteering/ieeeday.jpg";

export const HERO_CONTENT = `Ambitious and forward-thinking final-year engineering student at the Higher School of Communication of Tunis (SUPCOM), with hands-on experience in AI fields. 
I have developed multiple projects based on LLMs, pipelines with RAG architectures, and worked on several innovative solutions. 
Proficient in Python, machine learning frameworks, and streaming tools, I excel in applying AI to solve complex challenges. 
Through various leadership roles have strengthened my teamwork, project management, and problem-solving skills. 
Dedicated to driving innovation and creating meaningful change through technology, I am actively pursuing opportunities to contribute to cutting-edge AI advancements.`;

export const ABOUT_TEXT = `An AI enthusiast with a deep passion for innovation and technological advancement. 
My perspective blends technical curiosity with strong interpersonal skills. 
Dedicated to continuous growth, I strive to maintain a balanced and dynamic lifestyle, embracing new challenges that drive both personal and professional development. `;

export const EXPERIENCES = [
  {
    year: "Fev 2025 - Present",
    role: "End-of-Studies Intern",
    company: "Amaris Consulting",
    description: `Develop and enhance a 5G network eligibility solution by integrating AI-based features for:<br />
    1. Front-office operations: Responding to queries on network eligibility with the integration of voice recognition technology for user interactions and creating a notification system that alerts users about the eligibility of a new network based on their geographic address.<br />
    2. Back-office operations: Extracting Key Performance Indicators and analytics with an AI-based predictive analytics module to anticipate and optimize network planning.`,
    technologies: ["Python", "NLP", "Voice Recognition"],
  },
  {
    year: "Sep 2024 - Jan 2024",
    role: "Generative AI Intern",
    company: "EY Tunisia",
    description: `Developed an LLM-based Code Converter that translates code from one programming language to another using Open Source LLMs. Developed a User-friendly Graphical Interface to interact with this tool.`,
    technologies: ["Python", "HuggingFace", "LangChain", "Pytorch", "StarCoder2-3B", "Llama3.2-3B-Instruct", "Gradio"],
  },
  {
    year: "Jul 2024 - Aug 2024",
    role: "Generative AI & Data Engineering Intern",
    company: "Orthlane Tunisia",
    description: `Developed an Intelligent Conversational Assistant based on GPT-4o's API from Microsoft AzureOpenAI using a naive RAG architecture.
    Implemented a pipeline using Langchain libraries to ensure the retrieval of relevant informations from the vector database and the generation of the response.
    Developed a User-friendly Graphical Interface to interact with this assistant.`,
    technologies: ["Python", "Microsoft AzureOpenAI", "GPT-4o","Langchain", "Apache Nifi", "Pinecone", "Docker", "Streamlit"],
  },
  {
    year: "Jul 2023",
    role: "Data Analyst Intern",
    company: "Monitoring & Diagnostic Center of Tunisian Company of Electricity and Gas",
    description: `Collected and analyzed data from the center's monitoring application.
    Designed and implemented an interactive dashboard showing the achievements in predictive maintenance of the M&D center.`,
    technologies: ["Python", "Power BI"],
  },
  {
    year: "Jul 2023",
    role: " Part-Time Python Instructor",
    company: "GOMYCODE Tunisia",
    description: `Taught children the fundamentals of Python and its most commun and used libraries such as Pandas, Numpy, Tkinter, etc.`,
    technologies: ["Python", "Pandas", "Numpy"],
  },
];

export const PROJECTS = [
  {
    title: "LLM-based Code Converter",
    image: project1,
    description:
      "A tool that enables users to convert and translate code from one programming language to another. Currently works on translating from Python to Java.",
    github: "https://github.com/cyrineanene/LLM-based-Code-Converter",
    date: `September 2024 - January 2025`,
  },
  {
    title: "Air Polluants and Global AQI Forecasting",
    image: project2,
    description:
      "This project aims to predict the Air Polluants and the global Air Quality Index (AQI) of a given country based on historical pollutant data. Using time-series forecasting model, this project estimate AQI values for multiple pollutants and derive an overall global AQI for a given country. The forecasting model relies on Facebook's Prophet, a robust and widely used forecasting tool for time-series analysis.",
    github: "https://github.com/cyrineanene/Air-Polluants-and-Global-AQI-Forecasting",
    date: `November 2024`,
  },
  {
    title: "Multimodal Chatbot",
    image: project3,
    description:
      "This project aims to create a multimodal chatbot designed to handle various types of data, including audio, images, and text-based files like PDFs. The chatbot integrates several state-of-the-art LLMs to process and understand different types of input.",
    github: "https://github.com/cyrineanene/Multimodal-Chatbot",
    date: `August 2024`,
  },
  {
    title: "Voice Assistant Application",
    image: project4,
    description:
      "This voice assistant allows users to interact through a combination of audio and images. You can ask your desired question in the form of audio input and insert an image. The assistant will transform your audio into text, analyze the image, generate a descriptive text response, and then convert that response back into audio. All interactions are facilitated through an intuitive Gradio interface.",
    github: "https://github.com/cyrineanene/Voice-Assistant-App",
    date: `August 2024`,
  },
  {
    title: "Parking Spot Classification",
    image: project5,
    description:
      "This project aims to create a solution for detecting different parking spots, classifing them into empty or not and counting all the available spots in the parking lot. The system utilizes a Support Vector Classifier to determine whether a parking spot is empty or occupied, based on video input.",
    github: "https://github.com/cyrineanene/Parking-Spot-Classification",
    date: `November 2024`,
  },
];

export const CONTACT = {
  address: "Tunis, Tunisia",
  phoneNo: "+219 29 020 501 ",
  email: "cyrine.anene@supcom.tn",
};

export const CERTIFICATES = [
  {
    title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    date: "October 17, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have completed the AWS Academy Machine Learning Foundations course.",
    credlyLink: "https://www.credly.com/badges/ea624abd-d57e-4f72-958d-626242f1af80/linked_in_profile",
    image: certificate4,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Data Engineering",
    date: "October 31, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://www.credly.com/badges/0fa1f4a7-f02f-4ea5-b469-765470be7f20/linked_in_profile",
    image: certificate2,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    date: "October 19, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://www.credly.com/badges/84cf4b42-2fc4-44e8-9db6-618d6e436ce5/linked_in_profile",
    image: certificate3,
  },
  {
    title: "Building RAG Agents with LLMs",
    date: "Novembre 7, 2024",
    issuer: "NVIDIA",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.nvidia.com/certificates?id=RVNNNRQbT4KnNlTljm7IAw",
    image: certificate1,
  },
];

export const events = [
  {
    title: "Vice-Chairperson - IEEE SUP'COM Student Branch",
    description: "As the Vice-Chairperson of IEEE SUP'COM SB, I played a key role in leading and coordinating the branch's activities. I worked closely with the executive team to organize events, manage projects, and foster collaboration between members. My role involved ensuring smooth communication between different committees and representing the branch in IEEE events.",
    date: "May 2023",
    image: volunteering1,
  },
  {
    title: "IndabaX Tunisia 2023 - Organizer & Design Manager",
    description: "I worked on event branding, ensuring a cohesive visual theme across promotional materials. Additionally, I collaborated with teams to manage logistics and to create an engaging experience for AI and ML enthusiasts in Tunisia.",
    date: "May 13 & 14, 2023",
    image: volunteering2,
  },
  {
    title: "Marketing & Communication Department Manager - SUPCOM Junior Entreprise",
    description: "I led the Marketing & Communication Department, ensuring seamless collaboration between team members and the executive board. My responsibilities included overseeing internal communication, managing promotional strategies, and scheduling regular meetings to align the department's activities with the organization's goals.",
    date: "March 2022",
    image: volunteering3,
  },
  {
    title: "IEEE Tunisian Student & Young Professional Congress, 11th Edition",
    description: "Representing IEEE SUPCOM SB, I participated in the 11th edition of TSYP as a vice chairperson. I was also responsible for the SMC Challenge, where my team secured 5th place among 10+ Student Branches.",
    date: "December 18-19-20, 2022",
    image: volunteering4,
  },
  {
    title: "IEEE Tunisian Student & Young Professional Congress, 10th Edition",
    description: "During the 10th edition of TSYP, I actively contributed to multiple challenges, including pitching for the CAS Challenge and supporting the development of the STAR Program and HAC Challenge.",
    date: "December 19-20-21, 2022",
    image: volunteering5,
  },
  {
    title: "IEEE Day Tunisia Ambassador 2023",
    description: "As an IEEE Day Tunisia Ambassador, I acted as the key liaison between the Tunisian IEEE Day organizers and Student Branches. I facilitated communication, ensured the smooth flow of information, and actively participated in the tasks given by the IEEE Day Global organization committee.",
    date: "October 14, 2023",
    image: volunteering9,
  },
  {
    title: "Code In the Dark 2.0 - Organizer & Media Manager",
    description: "In my role as Media Manager, I focused on maximizing the event's visibility through strategic media campaigns. I managed the event's online presence, crafted engaging content, and ensured broad coverage across social media platforms.",
    date: "February 11, 2022",
    image: volunteering6,
  },
  {
    title: "IEEE Wie International Leadership Summit Tunisia 2022 - Logistics Member",
    description: "As a logistics team member, I played a crucial role in ensuring the smooth execution of the event. I coordinated venue setup, managed schedules, and provided on-site support to enhance the overall experience for participants and speakers.",
    date: "November 5 & 6, 2022",
    image: volunteering7,
  },
  {
    title: "Metaverse Tunisian Summit 2.0 - Organizer & Media Manager",
    description: "I was responsible for planning and executing event logistics while also handling media coverage. I ensured effective event promotion, engaged the audience through digital channels, and helped create a strong presence for the summit in the tech community.",
    date: "November 24-25-26, 2023",
    image: volunteering8,
  },
  
];