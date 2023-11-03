import React from 'react';
import waseem from '../assets/images/waseem.jpg';
import mohan from '../assets/images/mohan.jpg';
import janani from '../assets/images/Janani.jpg';

const DeveloperCard = ({ name, role, avatar ,linkedin,github,instagram , portfolio}) => (

    <div className="text-center text-gray-500 dark:text-gray-400  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Bonnie Avatar" />
    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href={portfolio} target={'_blank'}>{name}</a>
    </h3>
    <p>{role}</p>
    <ul class="flex justify-center mt-4 space-x-4">
        <li>
            <a href={linkedin} target={'_blank'} className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
            </a>
        </li>
        
        <li>
            <a href={github} target={'_blank'} className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
            </a>
        </li>
        <li>
            <a href={instagram} target={'_blank'} className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
        </svg>
            </a> 
        </li> 
    </ul>
</div>
  );

const Team = () => {
  const developers = [
    {
      name: 'Mohamed Waseem A',
      role: 'Research & Development',
      avatar: waseem,
      github: "https://github.com/waseem0605",
      linkedin:'https://www.linkedin.com/in/mohamed-waseem-%E2%80%8E-a52727228',
      instagram: 'https://www.instagram.com/waseem_0605/ ',
      portfolio : 'https://waseem0605.netlify.app'
    },
    {
      name: 'Mohanraj M',
      role: 'Blockchain Developer',
      avatar: mohan,
      github: 'https://github.com/mohanrajmdev',
      linkedin: 'https://www.linkedin.com/in/mohanraj-m-679723238/',
      instagram: 'https://www.instagram.com/moh.an.raj/',
      portfolio : 'https://mohanrajmdev.github.io/portfolio-website/'
    },
    {
      name: 'Janani M',
      role: 'UI/UX DESIGNER',
      avatar: janani,
      github: 'https://github.com/Janani-m17',
      linkedin:'https://www.linkedin.com/in/janani-manikandan-7a01b624a',
      instagram: 'https://instagram.com/jananimanikandan_17/',
      portfolio : ''
    },
  ];

  return (
    <div className="flex w-full justify-center items-center gradient-bg-team pt-[100px] ">
      <div className="flex mf:flex-row flex-col items-center justify-center md:px-20 md:py-7 p-12">
        {/* <div className="flex-1 flex flex-row flex-wrap justify-center items-center"> */}
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          {developers.map((developer, index) => (
            <DeveloperCard
              key={index}
              name={developer.name}
              role={developer.role}
              avatar={developer.avatar}
              github={developer.github}
              linkedin={developer.linkedin}
              instagram={developer.instagram}
              portfolio={developer.portfolio}
            />
          ))}
        </div>
        <div className="flex-1 ml-[100px] py-8 flex flex-col justify-start items-start">
          <h1 className="text-5xl sm:text-8xl text-white text-gradient py-8">
            Meet Our Talented Developers
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-3xl sm:text-3xl">
            Our team is dedicated to crafting top-notch solutions and driving innovation in the
            world of blockchain technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
