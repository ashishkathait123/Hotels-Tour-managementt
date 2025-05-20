import React from 'react';

// Benefit data
const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M7.5 6a1.5 1.5 0 1 0 0 3.0001 1.5 1.5 0 0 0 0-3Zm13.62 4.71-8.41-8.42A.9989.9989 0 0 0 12 2H3a1 1 0 0 0-1 1v9a.9998.9998 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L21.12 15a3 3 0 0 0 0-4.24v-.05Zm-1.41 2.82-6.18 6.17a.9997.9997 0 0 1-1.41 0L4 11.59V4h7.59l8.12 8.12a.9984.9984 0 0 1 .29.71.9995.9995 0 0 1-.29.7Z"></path>
      </svg>
    ),
    text: "Unlock exclusive offers you won't find elsewhere."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.78 3.62a.9996.9996 0 0 0 .12-1.05A1.0007 1.0007 0 0 0 21 2H3a1 1 0 0 0-.9.57 1 1 0 0 0 .12 1.05L11 14.6V20H5.25a1.0002 1.0002 0 0 0-.7071 1.7071 1 1 0 0 0 .707.2929H18.75a1.0001 1.0001 0 0 0 0-2H13v-5.4l8.78-10.98ZM5.08 4h13.84l-2.4 3h-9L5.08 4ZM12 12.65 9.08 9h5.84L12 12.65Z"></path>
      </svg>
    ),
    text: "Enjoy bonus handpicked inclusions, curated just for you"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.1032 15.6314c-.1432-.1909-.315-.3627-.4581-.5059-.0764-.0764-1.0118-.9927-1.0023-1.0022.5632-.6491 1.0213-1.4031 1.3554-2.224.8018-1.9567.7827-4.1138-.0382-6.061-.8304-1.9471-2.3671-3.4552-4.3238-4.257-1.9662-.7922-4.1138-.7731-6.061.0477-.8018.3436-1.5272.7923-2.1571 1.365-.4677-.4678-.9068-.964-1.3936-1.4222-.4009-.3723-.9163-.6777-1.403-.191-4.2953 4.2952-4.2953 11.2916 0 15.5868 1.7848 1.7849 4.0279 2.8253 6.3473 3.1308v1.1835H9.5921a.8555.8555 0 0 0-.859.8591c0 .4772.3817.859.859.859h6.4714a.8555.8555 0 0 0 .8591-.859.8555.8555 0 0 0-.8591-.8591h-2.3767v-1.0976c2.7299-.0669 5.4406-1.1359 7.5214-3.2167.4295-.4295.2195-.9258-.105-1.3362Z" />
      </svg>
    ),
    text: "Get destination insights that help you travel smarter"
  }
];

const HeroSection = () => {
  return (
    <div className="bg-white lg:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900">
              Exclusive prices and <i>more</i> with every booking
            </h2>

            {/* Mobile view - vertical list */}
            <div className="md:hidden">
              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-gray-700">
                      {benefit.icon}
                    </div>
                    <p className="text-base text-gray-900">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop view - carousel */}
            <div className="hidden md:block">
              <div className="flex overflow-x-auto gap-5 pb-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 min-w-[200px]">
                    <div className="text-gray-700 text-2xl">
                      {benefit.icon}
                    </div>
                    <p className="text-base text-gray-900 text-center">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4 justify-end">
            <a
              href="/in/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-black-600 hover:underline"
            >
              Learn more about us
            </a>
            <button className="bg-transparent bg-yellow-600 hover:bg-yellow-700  text-white font-medium py-2 px-6 ">
              Sign up and save
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 my-6"></div>
      </div>
    </div>
  );
};

export default HeroSection;
