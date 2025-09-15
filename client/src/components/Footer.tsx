'use client'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12 px-6'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-xl font-bold text-blue-400 mb-4'>SavingsHub</h3>
          <p className='text-gray-300 text-sm'>
            Making group savings simple, secure, and social through WhatsApp
            integration.
          </p>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>Product</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Features
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Security
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                API
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>Support</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Help Center
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Status
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Community
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>Company</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400'>
        <p>&copy; 2024 SavingsHub. All rights reserved.</p>
      </div>
    </footer>
  )
}
