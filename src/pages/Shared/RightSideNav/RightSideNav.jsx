import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import ads from '../../../assets/bg1.png'

const RightSideNav = () => {
  return (
    <div>
      {/* log in */}
      <div>
        <h2 className="text-2xl text-gray-800  font-medium">Login with</h2>
        <button
          type="button"
          className="mt-4 lg:w-56 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Facebook
        </button>
        {/* github */}
        <button
          type="button"
          className=" lg:w-56 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Github
        </button>
      </div>
      {/* Find us */}
      <div className="mt-5">
        <h2 className="text-2xl text-gray-800  font-medium">Find Us On</h2>
        {/* button */}
        <div className="flex flex-col">
          {/* Facebook Button */}
          <button
            type="button"
            className="text-[#1877F2] border border-[#1877F2] hover:bg-[#1877F2] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#1877F2]/50 font-medium rounded-t-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition duration-200"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            Find us on Facebook
          </button>

          {/* Instagram Button */}
          <button
            type="button"
            className="text-[#E4405F] border-x border-[#E4405F] hover:bg-[#E4405F] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#E4405F]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center transition duration-200"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.303 3.608 1.278.975.975 1.216 2.242 1.278 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.303 2.633-1.278 3.608-.975.975-2.242 1.216-3.608 1.278-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.303-3.608-1.278-.975-.975-1.216-2.242-1.278-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.303-2.633 1.278-3.608.975-.975 2.242-1.216 3.608-1.278C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.743 0 8.332.012 7.052.07c-1.637.076-3.087.373-4.25 1.535C1.64 2.769 1.342 4.219 1.265 5.856.94 6.677.903 7.598.903 12c0 4.402.037 5.323.362 6.144.077 1.637.374 3.087 1.535 4.25 1.163 1.162 2.613 1.459 4.25 1.535C8.332 23.988 8.743 24 12 24s3.668-.012 4.948-.07c1.637-.076 3.087-.373 4.25-1.535 1.162-1.163 1.459-2.613 1.535-4.25.076-1.637.09-1.966.09-6.345 0-4.379-.014-4.708-.09-6.345-.076-1.637-.373-3.087-1.535-4.25-1.163-1.163-2.613-1.459-4.25-1.535C15.668.012 15.257 0 12 0z"
                clipRule="evenodd"
              />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="18.5" cy="5.5" r="1.5" />
            </svg>
            Find us on Instagram
          </button>

          {/* Twitter Button */}
          <button
            type="button"
            className="text-[#1DA1F2] border border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#1DA1F2]/50 font-medium rounded-b-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition duration-200"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M24 4.557a9.823 9.823 0 0 1-2.828.775 4.928 4.928 0 0 0 2.165-2.724 9.863 9.863 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.37 4.482A13.939 13.939 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.896 4.896 0 0 1-2.228-.615v.062a4.916 4.916 0 0 0 3.946 4.82 4.908 4.908 0 0 1-2.224.085 4.919 4.919 0 0 0 4.59 3.415A9.866 9.866 0 0 1 0 19.539a13.905 13.905 0 0 0 7.548 2.212c9.056 0 14.01-7.512 14.01-14.01 0-.213-.005-.425-.014-.636A10.016 10.016 0 0 0 24 4.557z"
                clipRule="evenodd"
              />
            </svg>
            Find us on Twitter
          </button>
        </div>
      </div>
      {/* Q-zone */}
      <div className="mt-5 bg-gray-200 rounded-sm p-4">
      <h2 className="text-2xl text-gray-800  font-medium">Q-zone</h2>
      <div>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      </div>
      {/* ads */}
      <div className='mt-10'>
        <img src={ads} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
