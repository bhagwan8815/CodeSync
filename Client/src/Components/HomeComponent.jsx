import React from "react";
import CodeBlock from "./CodeBlock";
import Footer from "./Footer";
import ServiceComponent from "./ServiceComponent";
import { useTypewriter,  } from "react-simple-typewriter";

export default function HomeComponent() {
  const [text1] = useTypewriter({
    words: ["AI Code Reviewer"],
    loop: 0,
    typeSpeed: 110,
    deleteSpeed: 70,
  });
  const [text2] = useTypewriter({
    words: ["Real-Time Code Collaboration"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="flex flex-col dark:bg-gray-700 ">
      {/* section -1 */}
      <div className="flex flex-row pl-[155px] pr-[155px]  gap-[200px]  h-[500px]">
        {/* section -1 */}
        {/* left vala part  */}

        <div className="flex flex-col mt-5 ">
          {/* <img src="/images/img-2.webp" alt="" height="350px" width="350px"/> */}
          <h1 className="text-3xl font-bold  mt-6 leading-[50px] animate-slideInLeft">
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:bg- dark:from-yellow-500 dark:to-red-500">
              {" "}
             {text1}
            </span>{" "}
            and{" "} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:bg- dark:from-yellow-500 dark:to-red-500">
              {" "}
              {text2}
            </span>
            <br />
          </h1>

          <p className="text-lg  font-bold mt-5 animate-slideInBottom">
            Our AI-powered Code Reviewer and Real-time collaboration tool is
            designed to enhance coding efficiency and teamwork. Whether you're
            working solo or collaborating with a team, our platform provides
            instant feedback, optimizations, and seamless real-time editing.
          </p>
          {/* button */}
          <div className="flex flex-row mt-7 gap-6 animate-slideInLeft">
            <a
              className="border p-2 pl-3 bg-primarycolor hover:bg-secondarycolor dark:bg-yellow-300 hover:dark:bg-yellow-400 text-black font-bold rounded-md border-none"
              href="/collbration"
            >
              {" "}
              Code Collbration
            </a>

            <a
              className="border p-2 pl-3 bg-primarycolor hover:bg-secondarycolor dark:bg-yellow-300 hover:dark:bg-yellow-400 text-black font-bold rounded-md border-none"
              href="/review"
            >
              {" "}
              Code Reviewer
            </a>
          </div>
        </div>

        {/* right val div */}
        {/* <div className="mt-8">
          <CodeBlock
            code={`<!DOCTYPE html>
                          <html>
                          <head>
                          <link rel="stylesheet" href="styles.css">
                          </head>
                          <body>
                          <h1>This is a AI Code Reviewer</h1>
                          <p>This is a Real Time Code Collbration Code Editor.</p>
                          <p>This is Type Animation </p>
                          </body>
                          </html>`}
            codeColor={"text-[#FFD700] "}
          ></CodeBlock>
        </div> */}
        <div className="mt-8 animate-slideInRight">
          <CodeBlock
            code={`<!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <h1>This is a AI Code Reviewer</h1>
    <p>This is a Real Time Code Collaboration Code Editor.</p>
    <p>This is Type Animation </p>
    </body>
    </html>`}
            codeColor="text-secondarycolor dark:text-[#FFD700]" // Black in light mode, gold in dark mode
          />
        </div>
      </div>






      {/* section -2 */}
       {/* section -2 */}
        {/* section -2 */}
         {/* section -2**************************************** */}

      <div className="flex flex-row pl-[155px] pr-[155px]  gap-[200px]  h-[500px]">
        {/* left vala part  */}
        <div className="animate-slideInLeft">
          <CodeBlock
            code={`import React from 'react'
                           import { FaArrowRight } from "react-icons/fa"
                           import CTAButton from '../Components/Button';
                           import { TypeAnimation } from 'react-type-animation'
                           
                           const Home = () => {
                           return (
                           <div>Home</div>  
                           )
                           }
                           export default Home`}
            codeColor={"text-secondarycolor dark:text-[#4DFFFF]"}
          ></CodeBlock>
        </div>
        {/* right vala part */}
        <div>
          <h1 className="text-3xl text-primarycolor dark:text-yellow-600 font-bold animate-slideInRight">
            Dive into Hands-On Coding Without Any Setup!
          </h1>
          <p className="mt-5 font-bold animate-slideInBottom ">
            Jump straight into coding with our AI-powered code reviewer and
            real-time collaboration platform. No installations, no complex
            setups—just pure coding, instantly. Whether you're a beginner or an
            experienced developer, our platform provides an interactive,
            AI-driven environment where you can write, review, and optimize your
            code effortlessly
          </p>
        </div>
      </div>
      <ServiceComponent/>
      <Footer/>
    </div>
  );
}
