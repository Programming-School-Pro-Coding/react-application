import React from 'react';

import logo from "./assets/moh.png";

const Langauges_I_Learned = ["Html, ", "CSS, ", "Javascript, ", "PHP, ", "MYSQL, ", "C#"];
const FrameWorks_I_Learned = ["Nodejs, ", "Reactjs, ", "Nextjs "];


const App = () => {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 bg-gray-dark text-white mt-56">
        <img
          class="w-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={logo}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Hello 👋, I am a Full-Stack Developer, I Learn{" "}
              {Langauges_I_Learned}, And FrameWorks Like {FrameWorks_I_Learned}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Mohamed Ehab</div>
            <div class="text-slate-700 dark:text-slate-500">
              Full-Stack Developer, Egypt
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default App;
