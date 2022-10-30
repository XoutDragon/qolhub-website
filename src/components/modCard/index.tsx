/* eslint-disable @next/next/no-img-element */
import { FaDiscord, FaGlobe, FaGithub } from 'react-icons/fa';

export function ModCard(mods: any) {
  const modList = mods.map((mod: any, i: any) => (
    <div key={mod.id} className=''>
      <div
        className={`${
          mod.tags.includes('cheats')
            ? 'bg-gradient-to-r from-red-600 to-yellow-500'
            : 'bg-gradient-to-r from-green-600 to-blue-700 '
        } p-4 ${
          mod.name.length > 15 ? 'lg:px-5' : 'lg:px-6'
        } lg:pt-6 lg:pb-4 rounded-t-3xl flex justify-between items-center`}
      >
        <div className=''>
          <img
            src={mod.icon}
            alt={`${mod.name} Image`}
            className={`w-16 h-16 rounded-3xl`}
          />
        </div>
        <div className='text-lg max-w-xss sm:max-w-sm sm:text-2xl align-center h-full my-auto text-right'>
          {mod.name}
        </div>
      </div>
      <div className='bg-black px-8 py-4 rounded-b-3xl shadow-2xl shadow-black min-h-64'>
        <div className='mb-4 min-h-12'>
          <div>
            Developer{mod.developers.split(', ').length > 1 ? 's' : ''}:{' '}
            {mod.developers}{' '}
          </div>
          {mod.paid ? (
            <div className='text-red-500'>Price: ${mod.price}</div>
          ) : (
            ''
          )}
        </div>
        <div className='min-h-16'>
          <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
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

  return modList;
}
