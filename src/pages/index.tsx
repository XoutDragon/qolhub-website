/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import { useState } from 'react';
import { filterMods } from '../helpers/filterMods';
import { FaExclamationTriangle, FaDiscord } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { ModCard } from '../components/modCard';
import { IoClose } from 'react-icons/io5';
import { Popover } from '@headlessui/react';

export default function Home() {
  const [enableCheats, setCheats] = useState(false);
  const [filter, setFilter] = useState('');
  const [enablePaid, setPaid] = useState(true);

  const cheatText = enableCheats ? 'Hide Cheats' : 'Show Cheats';
  const cheatColor = !enableCheats ? 'border-green-600' : 'border-red-600';
  const cheatBGColor = !enableCheats
    ? 'hover:bg-green-600'
    : 'hover:bg-red-600';

  const paidText = enablePaid ? 'Hide Paid' : 'Show Paid';
  const paidColor = !enablePaid ? 'border-green-600' : 'border-red-600';
  const paidBGColor = !enablePaid ? 'hover:bg-green-600' : 'hover:bg-red-600';

  const allMods: any = filterMods(filter, enableCheats, enablePaid);
  const modList: any = ModCard(allMods);

  const [hideSettings, setHideSettings] = useState(false);

  return (
    <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
      <Head>
        <title>QOL Hub</title>
        <meta name='description' content='Official Quality of Life Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='my-10 mx-5 h-screen'>
        <div className='text-xl text-center'>
          A Safe Place To Find Unratted & Useful Hypixel Mods
        </div>
        <div className='text-sm text-center bg-gray-800 outline-gray-900 outline-4 shadow-sm rounded-md my-4 sm:w-3/5 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='text-yellow-600 translate-y-1 h-14 text-xl' />{' '}
            <div className='m-2 max-w-xss xs:max-w-xs'>
              {' '}
              We do not support cheating, please use at your own risk. These
              mods are here so people don't get ratted from unreliable sources
            </div>{' '}
            <FaExclamationTriangle className='text-yellow-600 translate-y-1 h-14 text-xl' />
          </div>
        </div>
        <div className='justify-center md:flex text-xs sm:text-lg'>
          <div
            className={`text-center mt-4 flex justify-evenly md:grid md:grid-cols-3 gap-4`}
          >
            <a href='https://discord.gg/qolhub'>
              <button className='bg-blue-700 py-3 px-6 rounded-lg h-full my-auto opacity-80 hover:opacity-100 shadow-lg'>
                <FaDiscord
                  className={`inline-block mr-3 w-6 translate-y-[-3px]`}
                />
                Join Discord
              </button>
            </a>
            <button
              className={`py-3 px-6 border-2 ${cheatColor} rounded-lg shadow-lg ${cheatBGColor} hidden md:block`}
              onClick={(_e) => {
                setCheats(!enableCheats);
              }}
            >
              {cheatText}
            </button>
            <button
              className={`py-3 px-6 border-2 ${paidColor} rounded-lg shadow-lg ${paidBGColor} hidden md:block`}
              onClick={(_e) => {
                setPaid(!enablePaid);
              }}
            >
              {paidText}
            </button>
            <div className='md:hidden'>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      onMouseEnter={() => {
                        setHideSettings(true);
                      }}
                    >
                      <BsGearFill className={`text-3xl translate-y-1`} />
                    </Popover.Button>
                    {open && (
                      <Popover.Panel static>
                        {({ close }) => (
                          <div className='fixed z-10 w-full px-4 ml-0 -mt-12 transform -translate-x-1/2 rounded-md bg-black min-h-72 left-1/2 opacity-75'>
                            <div className='py-5 justify-between flex'>
                              <div className='text-center text-3xl'>
                                Settings
                              </div>
                              <div>
                                <button
                                  onClick={async () => {
                                    setHideSettings(false);
                                    close();
                                  }}
                                >
                                  <IoClose className='text-3xl translate-y-1' />{' '}
                                </button>
                              </div>
                            </div>
                            <div className='grid grid-rows-2 gap-6'>
                              <div>
                                <button
                                  className={`py-3 px-6 border-2 ${cheatColor} rounded-lg shadow-lg ${cheatBGColor} w-full`}
                                  onClick={(_e) => {
                                    setCheats(!enableCheats);
                                  }}
                                >
                                  {cheatText}
                                </button>
                              </div>
                              <div>
                                <button
                                  className={`py-3 px-6 border-2 ${paidColor} rounded-lg shadow-lg ${paidBGColor} w-full`}
                                  onClick={(_e) => {
                                    setPaid(!enablePaid);
                                  }}
                                >
                                  {paidText}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    )}
                  </>
                )}
              </Popover>
            </div>
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
        <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto md:w-11/12 lg:w-5/6 mb-20'>
          {modList}
        </div>
        <Footer />
      </main>
    </div>
  );
}
