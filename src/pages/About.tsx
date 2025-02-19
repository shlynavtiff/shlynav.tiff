import React from 'react'
import { useCursor } from '../CursorContext';
import Transition from '../Transition';
const About: React.FC = () => {


    const { setCursorVariant } = useCursor();

  return (
    <div className="flex-grow flex-col flex items-center justify-center">
      <div className="flex flex-col max-w-[300px] md:max-w-[500px] lg:max-w-[550px] w-full mx-auto p-6">
        <div className="flex flex-row w-full justify-between items-center text-[44px] md:text-[50px] font-bold mb-8 gap-10">
          <div className="tracking-tight" onMouseEnter={() => setCursorVariant('text')}
           onMouseLeave={() => setCursorVariant('default')}>[ About ]</div>
          <div onMouseEnter={() => setCursorVariant('text')}
           onMouseLeave={() => setCursorVariant('default')}>[1]</div>
        </div>
      </div>

      <div className="max-w-[1080px] w-full leading-extra-tight font-bold text-[20px] sm:text-[30px] md:text-[35px] px-4 ">
        shlynav.tiff <span onMouseEnter={() => setCursorVariant('text')}
           onMouseLeave={() => setCursorVariant('default')}> <a  target="_blank" href="https://en.wikipedia.org/wiki/Baybayin#:~:text=Baybayin%20(%20%E1%9C%8A%E1%9C%8C%E1%9C%94%E1%9C%8A%E1%9C%8C%E1%9C%92%E1%9C%88%E1%9C%94%2CTagalog%20pronunciation%3A,and%20to%20a%20lesser%20extent">[ ᜐ᜔ᜑ᜔ᜎ᜔ᜌ᜔ᜈᜊ᜔ᜆᜒᜉ᜔ᜉ᜔ ]</a></span>  is a passionate developer with a strong focus on building engaging,
        user-friendly digital experiences. Driven by a love for problem-solving and design. Beyond development, he enjoys working
        on side projects, learning new <a href="https://www.techtarget.com/whatis/definition/framework" target="_blank" onMouseEnter={() => setCursorVariant('text')}
           onMouseLeave={() => setCursorVariant('default')} className='underline'>frameworks</a>, and building personalized mechanical keyboards. He is
        currently studying <a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank" onMouseEnter={() => setCursorVariant('text')}
           onMouseLeave={() => setCursorVariant('default')} className='underline'>Computer Science</a> at <a href="https://qcu.edu.ph/" target="_blank" onMouseEnter={() => setCursorVariant('text')}
           onMouseLeave={() => setCursorVariant('default')}  className='underline'>Quezon City University</a>, an experience he holds fondly and
        will cherish for the rest of his life. His goal is to continuously grow as a developer, contribute to open-source  
        projects, and eventually build tools that make technology more accessible to people. If you have an interesting idea,   
        <a href="mailto:naval.ashleyjames.redacto@gmail.com" target="_blank" className="font-bold underline ml-1 "
        onMouseEnter={() => setCursorVariant('text')}
        onMouseLeave={() => setCursorVariant('default')}>
           get in touch <sup className="font-sans leading-[0] md:text-[25px] font-light ">↗</sup>.
        </a>
      </div>
    </div>
  )
}

export default Transition(About)