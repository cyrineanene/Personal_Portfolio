import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";
import project4 from "../assets/projects/Project-4.png";
import project5 from "../assets/projects/Project-5.png";

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
    image: project1,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Data Engineering",
    date: "October 31, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://www.credly.com/badges/0fa1f4a7-f02f-4ea5-b469-765470be7f20/linked_in_profile",
    image: project1,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    date: "October 19, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://www.credly.com/badges/84cf4b42-2fc4-44e8-9db6-618d6e436ce5/linked_in_profile",
    image: project1,
  },
  {
    title: "Building RAG Agents with LLMs",
    date: "Novembre 7, 2024",
    issuer: "NVIDIA",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.nvidia.com/certificates?id=RVNNNRQbT4KnNlTljm7IAw",
    image: project1,
  },
];