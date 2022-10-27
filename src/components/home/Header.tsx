/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UserCircleIcon,
  MailIcon,
  DesktopComputerIcon,
} from '@heroicons/react/solid';
import { Popover } from '@headlessui/react';
import Link from 'next/link';

export default function Header() {
  return (
    <div id='top'>
      <nav className='relative flex justify-between w-full mt-5 px-5'>
        <div className='md:ml-5'>
          {' '}
          <img
            src='/images/logo.png'
            alt='QOL Hub Logo'
            className='rounded-full w-20'
          />
        </div>
        <div className='text-5xl font-bold h-full my-auto hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
          Official Quality of Life Hub Website
        </div>
        <div className='text-2xl font-bold h-full my-auto md:hidden text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
          QOL Hub
        </div>
      </nav>
    </div>
  );
}
