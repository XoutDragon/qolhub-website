import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import { useState } from 'react';
import axios from 'axios';

export default function WebhookDeletor() {
  const [webhook, setWebhook] = useState('');
  const [successText, setSuccessText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [showConfirmPanel, setShowConfirmPanel] = useState(false);

  const confirmDelete = () => {
    if (webhook === '') {
      setSuccessText('');
      setErrorText('Please enter a webhook');
      return;
    }

    setShowConfirmPanel(true);
  };

  const deleteWebhook = () => {
    setShowConfirmPanel(false);
    axios
      .delete(webhook)
      .then((res: any) => {
        setSuccessText('Webhook deleted successfully');
        setErrorText('');
        setWebhook('');
      })
      .catch((err: any) => {
        setSuccessText('');
        setErrorText(`Webhook deletion failed ${err}`);
      });
  };

  return (
    <>
      <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
        <Header />
        {showConfirmPanel ? (
          <div className='absolute h-full w-full z-10 px-5'>
            <div className='flex flex-col justify-center items-center translate-y-[120%] bg-blue-700 opacity-95 rounded-md py-3'>
              <div className='text-lg md:text-2xl text-center'>
                Are you sure you want to delete this webhook?
              </div>
              <div className='grid grid-cols-2 gap-x-2 mt-4'>
                <button
                  className='bg-red-600 py-3 px-6 rounded-lg h-full my-auto opacity-80 hover:opacity-100 shadow-lg'
                  onClick={() => {
                    setShowConfirmPanel(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className='bg-green-600 py-3 px-6 rounded-lg h-full my-auto opacity-80 hover:opacity-100 shadow-lg'
                  onClick={() => {
                    deleteWebhook();
                    setShowConfirmPanel(false);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className='h-5/6 px-1'>
          <div className='text-center text-3xl my-10'>Webhook Deletor</div>
          <div className='text-center max-w-xs md:max-w-md w-full text-md p-3 mx-auto mb-12 bg-gray-800 outline-gray-900 outline-4 shadow-sm rounded-md'>
            Many ratted mods send user information through a webhook. You can
            delete webhooks to stop this.
          </div>
          <div className='relative m-auto w-11/12 lg:w-1/2'>
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
              placeholder='Delete a webhook'
              required
              onChange={(e) => {
                setWebhook(e.target.value);
              }}
            />
          </div>
          <div className='relative m-auto w-11/12 lg:w-1/2 mt-2 text-sm text-green-400 font-semibold'>
            {successText}
          </div>
          <div className='relative m-auto w-11/12 lg:w-1/2 mt-2 text-sm text-red-600 font-semibold'>
            {errorText}
          </div>
          <div className='relative m-auto w-11/12 lg:w-1/2 mt-2'>
            <button
              className='w-full text-center border border-blue-700 font-bold hover:bg-blue-700 p-3 rounded-lg'
              onClick={confirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
