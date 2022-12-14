import Image from 'next/image';
import { ArrowUpIcon } from '@heroicons/react/solid';
import { Tooltip } from '@mantine/core';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mx-4 sm:mx-10'>
      <div className='flex justify-center p-2 border-t border-solid border-[#eaeaea] items-center flex-1 py-5'>
        <a
          href='https://www.kieruken.dev'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center text-xs sm:text-lg'
        >
          Developed by{' '}
          <span className='h-4 ml-2 invert -translate-y-1'>
            <Image
              src='/images/kieruken.png'
              alt='Kieruken Logo'
              width={80}
              height={20}
            />
          </span>
        </a>
        <div className='ml-5'>
          <Tooltip label='Back to top'>
            <button className='w-10 h-10 border-2 border-blue-500 rounded-2xl animate-pulse'>
              <Link href='#top' scroll={false}>
                <ArrowUpIcon className='w-5 h-5 ml-2' aria-hidden='true' />
              </Link>
            </button>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}
