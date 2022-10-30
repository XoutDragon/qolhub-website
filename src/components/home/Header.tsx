/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { MenuIcon, XIcon, HomeIcon } from '@heroicons/react/solid';
import { FaGithub } from 'react-icons/fa';
import { TbWebhook } from 'react-icons/tb';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { locale, pathname } = router;

  const onWebhookPage = pathname === '/webhook-deletor';
  const onHomePage = pathname === '/';

  return (
    <div id='top'>
      <nav className='relative flex justify-between w-full mt-5 px-5'>
        <div className='md:ml-5'>
          <Link href='/' className='flex'>
            {' '}
            <img
              src='/images/logo.png'
              alt='QOL Hub Logo'
              className='rounded-full w-20'
            />
            <div className='ml-5 translate-y-4'>
              <div className='text-4xl font-bold h-full my-auto hidden 2xl:block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
                Official Quality of Life Hub Website
              </div>
              <div className='text-4xl font-bold h-full my-auto hidden xl:block 2xl:hidden text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
                Quality of Life Hub
              </div>
              <div className='text-2xl font-bold h-full my-auto xl:hidden text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
                QOL Hub
              </div>
            </div>
          </Link>
        </div>
        <div className='text-center md:w-3/5 xl:w-2/5 translate-y-4 border-b border-blue-500 max-h-10 rounded-bl-lg hidden md:block'>
          <ul className='flex justify-evenly'>
            <li>
              <Link
                href='/'
                className={`text-lg font-bold ${
                  onHomePage
                    ? 'text-gray-700 cursor-default'
                    : 'text-blue-700 opacity-75 hover:opacity-100'
                } `}
              >
                <HomeIcon className='inline-block mr-1 -translate-y-1 w-5' />
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/webhook-deletor'
                className={`text-xl font-bold ${
                  onWebhookPage
                    ? 'text-gray-700 cursor-default'
                    : 'text-blue-700 opacity-75 hover:opacity-100'
                } `}
              >
                <TbWebhook className='inline-block mr-1 text-2xl -translate-y-1' />
                Webhook Deletor
              </Link>
            </li>
            <li className='text-xl font-bold text-blue-700 opacity-75 hover:opacity-100'>
              <a href='https://github.com/XoutDragon/qolhub-website'>
                <FaGithub className='inline-block mr-1 text-2xl -translate-y-1' />
                <span className='inline-block'>Github</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className='mt-4 mr-5 sm:mr-10 sm:hidden'>
          <Popover className='w-11/12'>
            {({ open }) => (
              <>
                <Popover.Button className=''>
                  <MenuIcon className='w-6 h-6' aria-hidden='true' />
                </Popover.Button>
                <Popover.Overlay className='fixed inset-0 bg-black opacity-10' />
                {open && (
                  <div className=''>
                    <Popover.Panel
                      static
                      className='fixed z-10 px-4 ml-0 -mt-12 transform -translate-x-1/2 rounded-md bg-gray-900 min-h-72 first-line:px-0 left-1/2 w-11/12'
                    >
                      {({ close }) => (
                        <div className=''>
                          <div className='flex justify-between'>
                            <div className=''>
                              <img
                                src='/images/logo.png'
                                alt='QOL Hub Logo'
                                className='rounded-full w-20 translate-y-4'
                              />
                            </div>
                            <div className='text-3xl font-bold h-full my-auto xl:hidden text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
                              QOL Hub
                            </div>
                            <button
                              className=''
                              onClick={async () => {
                                close();
                              }}
                            >
                              <XIcon className='w-6 h-6' aria-hidden='true' />
                            </button>
                          </div>
                          <ul className='w-full font-medium mt-10'>
                            <li>
                              <Link
                                href='/'
                                className={`text-3xl font-bold ${
                                  onHomePage
                                    ? 'text-gray-700 cursor-default'
                                    : 'text-blue-700 opacity-75 hover:opacity-100'
                                } `}
                              >
                                <HomeIcon className='inline-block mr-3 -translate-y-1 w-8' />
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link
                                href='/webhook-deletor'
                                className={`text-xl font-bold ${
                                  onWebhookPage
                                    ? 'text-gray-700 cursor-default'
                                    : 'text-blue-700 opacity-75 hover:opacity-100'
                                } `}
                              >
                                <TbWebhook className='inline-block mr-3 text-3xl -translate-y-1' />
                                <span className='text-2xl'>
                                  Webhook Deletor
                                </span>
                              </Link>
                            </li>
                            <li className='text-xl font-bold text-blue-700 opacity-75 hover:opacity-100'>
                              <a href='https://github.com/XoutDragon/qolhub-website'>
                                <FaGithub className='inline-block mr-3 text-3xl -translate-y-1' />
                                <span className='inline-block text-2xl'>
                                  Github
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </Popover.Panel>
                  </div>
                )}
              </>
            )}
          </Popover>
        </div>
      </nav>
    </div>
  );
}
