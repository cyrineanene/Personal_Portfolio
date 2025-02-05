import {ABOUT_TEXT} from "../constants";

const AboutMe = () => {
    return (
      <div className="border-b border-neutral-900 pb-12 lg:mb-20">
        <h2 className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
          About Me
        </h2>
        <p className="my-2 max-w-xl py-6 text-center max-w-3xl mx-auto text-neutral-400 text-xl font-llight tracking-tight mb-12">
            {ABOUT_TEXT}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-6 border border-neutral-700 rounded-xl bg-neutral-900 bg-opacity-10 text-center shadow-lg shadow-purple-400/30">
            <div className="text-4xl text-blue-400 mb-4">🧑‍💻</div>
            <h3 className="text-white text-xl font-semibold mb-2">Passion for AI Innovation</h3>
            <p className="text-neutral-400 text-sm">
            Driven by a strong passion for artificial intelligence, I am deeply fascinated by its potential to revolutionize industries and improve lives.   
            I am eager to explore its many applications, from machine learning and generative AI to solving real-world challenges, and to play a part in advancing this exciting field.
            </p>
          </div>
          <div className="p-6 border border-neutral-700 rounded-xl bg-neutral-900 bg-opacity-10 text-center shadow-lg shadow-purple-400/30">
            <div className="text-4xl text-blue-400 mb-4">👥</div>
            <h3 className="text-white text-xl font-semibold mb-2">Interpersonal and Leadership Skills</h3>
            <p className="text-neutral-400 text-sm">
            Throughout my experiences, I have developed a wide range of interpersonal and leadership skills essential for thriving in collaborative environments. 
            I continuously strive to enhance my communication, problem-solving, and adaptability, ensuring that I am well-equipped to lead projects, and navigate complex tasks efficiently.
            </p>
          </div>
          <div className="p-6 border border-neutral-700 rounded-xl bg-neutral-900 bg-opacity-10 text-center shadow-lg shadow-purple-400/30">
            <div className="text-4xl text-blue-400 mb-4">🌿</div>
            <h3 className="text-white text-xl font-semibold mb-2">Commitment to Personal Development</h3>
            <p className="text-neutral-400 text-sm">
            Committed to continuous personal and professional development, I actively seek out new challenges that foster growth and self-improvement. 
            I believe in maintaining a healthy work-life balance, staying active, and setting aside time for personal interests and well-being. 
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  