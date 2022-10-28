/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import { FaDiscord, FaGlobe, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import mods from '../data/mods.json';
import cheats from '../data/cheats.json';

export default function Home() {
  const [enableCheats, setCheats] = useState(false);
  let cheatText = enableCheats
    ? 'Show Cheats: Enabled'
    : 'Show Cheats: Disabled';
  let cheatColor = enableCheats ? 'border-green-600' : 'border-red-500';
  const [filter, setFilter] = useState('');

  const modsFiltered = mods.filter((mod) =>
    mod.name.toLowerCase().includes(filter.toLowerCase())
  );

  const cheatsFiltered = cheats.filter((cheat) =>
    cheat.name.toLowerCase().includes(filter.toLowerCase())
  );

  const modList = modsFiltered.map((mod: any, i) => (
    <div key={mod.id} className=''>
      <div className='bg-gradient-to-r from-green-600 to-blue-700 p-4 lg:px-6 lg:pt-6 lg:pb-4 rounded-t-3xl flex justify-between'>
        <div className=''>
          <img
            src={mod.icon}
            alt={`${mod.name} Image`}
            className={`w-16 h-16 rounded-3xl`}
          />
        </div>
        <div className='text-lg max-w-xss sm:max-w-none sm:text-2xl align-center h-full my-auto text-right'>
          {mod.name}
        </div>
      </div>
      <div className='bg-black px-8 py-4 rounded-b-3xl shadow-2xl shadow-black min-h-52'>
        <div className='mb-4 min-h-12'>
          <div>Developer: {mod.developers} </div>
          {mod.paid ? (
            <div className='text-red-500'>Price: ${mod.price}</div>
          ) : (
            ''
          )}
        </div>
        <div className='min-h-16'>
          <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
            {mod.website ? (
              <a href={mod.website} className='flex hover:opacity-70'>
                <FaGlobe className='translate-y-1 mr-2' /> Website
              </a>
            ) : (
              ''
            )}
            {mod.discord ? (
              <a href={mod.discord} className='flex hover:opacity-70'>
                <FaDiscord className='translate-y-1 mr-2' /> Discord
              </a>
            ) : (
              ''
            )}
            {mod.github ? (
              <a href={mod.github} className='flex hover:opacity-70'>
                <FaGithub className='translate-y-1 mr-2' /> Github
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='mt-5'>
          {mod.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className='inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));

  const cheatsList = enableCheats
    ? cheatsFiltered.map((mod: any, i) => (
        <div key={mod.id} className=''>
          <div className='bg-gradient-to-r from-green-600 to-blue-700 p-4 lg:px-6 lg:pt-6 lg:pb-4 rounded-t-3xl flex justify-between'>
            <div className=''>
              <img
                src={mod.icon}
                alt={`${mod.name} Image`}
                className={`h-16 w-auto min-w-fit rounded-3xl`}
              />
            </div>
            <div className='text-lg max-w-xss sm:max-w-none sm:text-2xl align-center h-full my-auto text-right'>
              {mod.name}
            </div>
          </div>
          <div className='bg-black px-8 py-4 rounded-b-3xl shadow-2xl shadow-black min-h-52'>
            <div className='mb-4 min-h-12'>
              <div>Developer: {mod.developers} </div>
              {mod.paid ? (
                <div className='text-red-500'>Price: ${mod.price}</div>
              ) : (
                ''
              )}
            </div>
            <div className='min-h-16'>
              <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
                {mod.website ? (
                  <a href={mod.website} className='flex hover:opacity-70'>
                    <FaGlobe className='translate-y-1 mr-2' /> Website
                  </a>
                ) : (
                  ''
                )}
                {mod.discord ? (
                  <a href={mod.discord} className='flex hover:opacity-70'>
                    <FaDiscord className='translate-y-1 mr-2' /> Discord
                  </a>
                ) : (
                  ''
                )}
                {mod.github ? (
                  <a href={mod.github} className='flex hover:opacity-70'>
                    <FaGithub className='translate-y-1 mr-2' /> Github
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className='mt-5'>
              {mod.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className='inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))
    : '';

  return (
    <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
      <Head>
        <title>QOL Hub</title>
        <meta name='description' content='Official Quality of Life Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='my-10 mx-5 h-screen'>
        <div className='text-3xl text-center'>
          A Safe Place To Find Unratted & Useful Hypixel Mods
        </div>
        <div className='justify-center md:flex text-xs sm:text-lg'>
          <div className='text-center mt-4 grid grid-cols-2 gap-4'>
            <a href='https://discord.gg/qolhub'>
              <button className='bg-blue-700 py-3 px-6 rounded-lg h-full my-auto opacity-80 hover:opacity-100 shadow-lg'>
                <FaDiscord className='inline-block mr-3 w-6 translate-y-[-3px]' />
                Join our Discord
              </button>
            </a>
            <button
              className={`py-3 px-6 border ${cheatColor} rounded-lg shadow-lg`}
              onClick={(_e) => {
                setCheats(!enableCheats);
              }}
            >
              {cheatText}
            </button>
          </div>
        </div>
        <div className='relative mx-auto my-10 w-11/12 lg:w-1/2 '>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block p-4 pl-10 w-full text-sm rounded-lg border border-gray-400 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
            placeholder='Search for Mods'
            required
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto md:w-11/12 lg:w-5/6 mb-20'>
          {modList}
          {cheatsList}
        </div>
        <Footer />
      </main>
    </div>
  );
}
