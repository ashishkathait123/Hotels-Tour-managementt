import { textStyle } from '../../config/typography'

export const Footer = () => {
  const footerLinks = {
    destinations: [
      'Asia', 'Europe', 'Australia & Pacific', 
      'Middle East', 'Africa', 'Americas'
    ],
    deals: [
      'Luxury Hotels', 'All Inclusive', 'Last Minute', 
      'Family Friendly', 'Honeymoons', 'Weekend Escapes'
    ],
    about: [
      'About Us', 'How Luxury Escapes Works', 'Reviews', 
      'Travel Blog', 'Gift Cards', 'Travel Agents'
    ],
    support: [
      'Help Centre', 'Contact Us', 'Booking Conditions', 
      'Privacy Policy', 'Terms of Use', 'Cookie Policy'
    ]
  }

  return (
    <footer className="bg-gray-200 text-black">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Destinations */}
          <div>
            <h3 className={`${textStyle('h5', 'mb-4')}`}>Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((item) => (
                <li key={item}>
                  <a href="#" className={`${textStyle('body.base', 'hover:underline')}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Deals */}
          <div>
            <h3 className={`${textStyle('h5', 'mb-4')}`}>Deals</h3>
            <ul className="space-y-2">
              {footerLinks.deals.map((item) => (
                <li key={item}>
                  <a href="#" className={`${textStyle('body.base', 'hover:underline')}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className={`${textStyle('h5', 'mb-4')}`}>About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((item) => (
                <li key={item}>
                  <a href="#" className={`${textStyle('body.base', 'hover:underline')}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={`${textStyle('h5', 'mb-4')}`}>Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((item) => (
                <li key={item}>
                  <a href="#" className={`${textStyle('body.base', 'hover:underline')}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-light">
          <h3 className={`${textStyle('h5', 'mb-4')}`}>Get the best travel deals</h3>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded text-neutral-1"
            />
            <button className={`${textStyle('button.base', 'btn-secondary px-6 py-3 rounded whitespace-nowrap')}`}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-light flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:opacity-80">
              <img src="/assets/icons/facebook.svg" alt="Facebook" className="h-6" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="/assets/icons/instagram.svg" alt="Instagram" className="h-6" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="/assets/icons/twitter.svg" alt="Twitter" className="h-6" />
            </a>
          </div>
          <p className={`${textStyle('body.sm')}`}>
            © {new Date().getFullYear()} GrandeurNet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}