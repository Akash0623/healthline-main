import Link from 'next/link'
import { SiteConfig } from '@/lib/content'

interface FooterProps {
  siteConfig: SiteConfig
}

export default function Footer({ siteConfig }: FooterProps) {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="py-10 lg:py-12">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Newsletter Signup */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "'Proxima Nova Condensed', 'Proxima Nova Condensed Fallback', sans-serif" }}>
                  Get our wellness newsletter
                </h3>
                <p className="text-gray-700 mb-6 text-base lg:text-lg leading-relaxed">
                  Filter out the noise and nurture your inbox with health and wellness advice that's inclusive and rooted in medical expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button
                    className="bg-teal-600 text-white px-6 py-3 rounded-md font-bold uppercase hover:bg-teal-700 transition-colors"
                    style={{ fontFamily: "'Proxima Nova Condensed', 'Proxima Nova Condensed Fallback', sans-serif" }}
                  >
                    {siteConfig.newsletter.buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    {siteConfig.footer.links.slice(0, Math.ceil(siteConfig.footer.links.length / 2)).map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="text-gray-700 hover:text-teal-600 transition-colors font-semibold text-sm"
                          style={{ fontFamily: "'Proxima Nova', 'Proxima Nova Fallback', sans-serif" }}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    {siteConfig.footer.links.slice(Math.ceil(siteConfig.footer.links.length / 2)).map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="text-gray-700 hover:text-teal-600 transition-colors font-semibold text-sm"
                          style={{ fontFamily: "'Proxima Nova', 'Proxima Nova Fallback', sans-serif" }}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-gray-300">
        <div className="container mx-auto px-5 lg:px-0 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Logo */}
            <div className="mb-6 lg:mb-0">
              <Link href="/" className="inline-block">
                <svg className="h-12 text-gray-300" viewBox="0 0 2500 400" fill="currentColor">
                  <title>Healthline</title>
                  <path d="M328.766 388.827H209.127v-189.81c0-19.952-14.278-32.742-31.092-32.742-16.32 0-36.038 13.302-36.038 32.743v189.809H34.617V86.463L0 61.905C39.563 48.603 105.896 19.953 141.997 0v158.6c14.342-17.906 49.39-40.929 93.9-40.929 56.377 0 80.61 37.348 80.61 81.859v160.247c0 4.82 4.086 14.504 12.26 29.05zm1233.178 0h-119.639v-189.81c0-19.952-14.278-32.742-31.092-32.742-16.32 0-36.038 13.302-36.038 32.743v189.809h-107.38V86.463l-34.617-24.558C1272.741 48.603 1339.074 19.953 1375.175 0v158.6c14.342-17.906 49.39-40.929 93.9-40.929 56.377 0 80.61 37.348 80.61 81.859v160.247c0 4.82 4.086 14.504 12.26 29.05zm-971.656-45.14v18.942C566.479 383.106 540.19 400 483.646 400c-89.281 0-143.842-59.896-143.842-133.615 0-88.053 56.049-147.95 138.386-147.95 81.345 0 112.098 55.802 112.098 125.937H441.589c6.448 80.885 51.481 117.745 92.65 117.745 19.84 0 42.16-6.655 56.049-18.43zM473.108 228.46c23.931 0 26.662-6.819 26.662-26.837 0-15.348-2.73-53.18-26.661-53.18-23.93 0-26.661 37.832-26.661 53.18 0 20.018 2.73 26.837 26.66 26.837zM2500 343.609v18.942c-23.808 20.477-50.097 37.371-106.642 37.371-89.28 0-143.842-59.896-143.842-133.615 0-88.053 56.05-147.95 138.386-147.95 81.346 0 112.098 55.802 112.098 125.937h-148.698c6.448 80.886 51.48 117.745 92.65 117.745 19.84 0 42.16-6.655 56.048-18.43zm-117.179-115.228c23.93 0 26.661-6.819 26.661-26.837 0-15.348-2.73-53.18-26.66-53.18-23.931 0-26.662 37.832-26.662 53.18 0 20.018 2.73 26.837 26.661 26.837zM893.751 341.354l11.878 2.522C900.195 365.821 884.362 400 833.422 400c-42.533 0-54.467-26.109-63.369-53.753C762.635 371.844 733.52 400 678.128 400c-49.457 0-76.658-22.013-76.658-63.48 0-46.074 44.941-79.862 157.208-113.138V174.75c0-25.085-13.353-33.788-28.19-33.788-13.354 0-34.556 14.334-34.556 36.86 0 10.75 1.979 18.94 3.462 29.691 0 13.823-15.826 34.812-40.06 34.812-26.706 0-39.565-19.454-39.565-41.979 0-36.859 34.125-81.91 123.642-81.91 92.978 0 122.652 49.147 122.652 96.245v124.912c0 7.679 2.968 15.358 11.375 15.358 7.419 0 12.468-4.217 16.313-13.596zm-134.484-9.444v-92.757c-37.614 15.29-50.635 53.004-50.635 82.055 0 23.444 7.234 34.147 24.594 34.147 15.191 0 26.041-9.684 26.041-23.445zm288.256 56.917H924.01V86.463L891.1 61.905C928.711 48.603 997.822 19.953 1032.142 0v359.777c0 4.595 5.127 14.279 15.38 29.05zm676.806 0h-123.513V86.463l-32.91-24.558C1605.518 48.603 1674.628 19.953 1708.948 0v359.777c0 4.595 5.127 14.279 15.38 29.05zm-491.603-31.332v18.948C1214.728 391.806 1184.89 400 1152.684 400c-53.045 0-71.516-39.432-71.516-72.719V149.354h-25.582L1190.1 31.284v97.3h42.626v20.77H1190.1v192.778c0 15.363 8.999 22.533 19.892 22.533 6.63 0 18.471-3.073 22.734-7.17zm594.239-243.249c-30.57 0-54.931-25.332-54.931-57.123 0-31.79 24.36-57.123 54.93-57.123 30.571 0 54.932 25.333 54.932 57.123s-24.36 57.123-54.931 57.123zm72.303 274.58h-126.086V198.453l-34.695-24.63c39.652-13.342 106.147-42.078 142.329-62.09v248.045c0 4.776 6.15 14.46 18.452 29.05zm342.178 0h-123.517V198.453c0-20.012-14.278-32.84-31.092-32.84-16.32 0-36.038 13.341-36.038 32.84v190.373h-107.38V198.453l-34.617-24.63c39.563-13.342 103.072-42.078 139.174-62.09v52.34c17.803-23.604 52.213-47.209 96.722-47.209 56.378 0 80.61 37.46 80.61 82.102v160.812c0 4.688 5.38 14.372 16.138 29.05z"/>
                </svg>
              </Link>
            </div>

            {/* Social Links and Copyright */}
            <div className="flex flex-col lg:items-end">
              {/* Social Icons */}
              <div className="flex gap-4 mb-4">
                <Link href={siteConfig.socialLinks.facebook} className="text-gray-400 hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href={siteConfig.socialLinks.twitter} className="text-gray-400 hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link href={siteConfig.socialLinks.instagram} className="text-gray-400 hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.541-2.033-4.541-4.54s2.033-4.541 4.541-4.541c2.508 0 4.54 2.033 4.54 4.541s-2.032 4.54-4.54 4.54zm7.107-8.094c-.588 0-1.065-.477-1.065-1.065s.477-1.066 1.065-1.066 1.065.478 1.065 1.066-.477 1.065-1.065 1.065z"/>
                  </svg>
                </Link>
                <Link href={siteConfig.socialLinks.linkedin} className="text-gray-400 hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href={siteConfig.socialLinks.youtube} className="text-gray-400 hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>
              
              {/* Copyright */}
              <div className="flex flex-col lg:items-end text-center lg:text-right">
                <p className="text-sm text-gray-400 mb-2"
                   style={{ fontFamily: "'Proxima Nova', 'Proxima Nova Fallback', sans-serif" }}>
                  {siteConfig.footer.copyright}
                </p>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-xs text-gray-500">
                  <Link href="/additional-information" className="hover:text-teal-400 transition-colors underline">
                    See additional information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 