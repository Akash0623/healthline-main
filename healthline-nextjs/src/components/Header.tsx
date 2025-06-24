'use client'

import Link from 'next/link'
import { SiteConfig } from '@/lib/content'

interface HeaderProps {
  siteConfig: SiteConfig
}

export default function Header({ siteConfig }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="mx-6 max-w-full">
        <div className="flex items-center justify-between h-14 lg:h-18">
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              aria-label="Main Menu"
              className="bg-transparent border-none w-6 h-4 relative flex items-center mr-4"
            >
              <span className="block absolute h-0.5 w-full bg-white rounded-sm left-0 top-0"></span>
              <span className="block absolute h-0.5 w-full bg-white rounded-sm left-0 top-1/2 transform -translate-y-1/2"></span>
              <span className="block absolute h-0.5 w-full bg-white rounded-sm left-0 bottom-0"></span>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center lg:flex-initial">
            <h1 className="m-0 text-0 leading-0 inline-block">
              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="text-white no-underline flex items-center"
                >
                  <svg className="h-6 lg:h-7 logo" viewBox="0 0 2500 400">
                    <title>Healthline</title>
                    <path
                      fill="currentColor"
                      d="M328.766 388.827H209.127v-189.81c0-19.952-14.278-32.742-31.092-32.742-16.32 0-36.038 13.302-36.038 32.743v189.809H34.617V86.463L0 61.905C39.563 48.603 105.896 19.953 141.997 0v158.6c14.342-17.906 49.39-40.929 93.9-40.929 56.377 0 80.61 37.348 80.61 81.859v160.247c0 4.82 4.086 14.504 12.26 29.05zm1233.178 0h-119.639v-189.81c0-19.952-14.278-32.742-31.092-32.742-16.32 0-36.038 13.302-36.038 32.743v189.809h-107.38V86.463l-34.617-24.558C1272.741 48.603 1339.074 19.953 1375.175 0v158.6c14.342-17.906 49.39-40.929 93.9-40.929 56.377 0 80.61 37.348 80.61 81.859v160.247c0 4.82 4.086 14.504 12.26 29.05zm-971.656-45.14v18.942C566.479 383.106 540.19 400 483.646 400c-89.281 0-143.842-59.896-143.842-133.615 0-88.053 56.049-147.95 138.386-147.95 81.345 0 112.098 55.802 112.098 125.937H441.589c6.448 80.885 51.481 117.745 92.65 117.745 19.84 0 42.16-6.655 56.049-18.43zM473.108 228.46c23.931 0 26.662-6.819 26.662-26.837 0-15.348-2.73-53.18-26.661-53.18-23.93 0-26.661 37.832-26.661 53.18 0 20.018 2.73 26.837 26.66 26.837zM2500 343.609v18.942c-23.808 20.477-50.097 37.371-106.642 37.371-89.28 0-143.842-59.896-143.842-133.615 0-88.053 56.05-147.95 138.386-147.95 81.346 0 112.098 55.802 112.098 125.937h-148.698c6.448 80.886 51.48 117.745 92.65 117.745 19.84 0 42.16-6.655 56.048-18.43zm-117.179-115.228c23.93 0 26.661-6.819 26.661-26.837 0-15.348-2.73-53.18-26.66-53.18-23.931 0-26.662 37.832-26.662 53.18 0 20.018 2.73 26.837 26.661 26.837zM893.751 341.354l11.878 2.522C900.195 365.821 884.362 400 833.422 400c-42.533 0-54.467-26.109-63.369-53.753C762.635 371.844 733.52 400 678.128 400c-49.457 0-76.658-22.013-76.658-63.48 0-46.074 44.941-79.862 157.208-113.138V174.75c0-25.085-13.353-33.788-28.19-33.788-13.354 0-34.556 14.334-34.556 36.86 0 10.75 1.979 18.94 3.462 29.691 0 13.823-15.826 34.812-40.06 34.812-26.706 0-39.565-19.454-39.565-41.979 0-36.859 34.125-81.91 123.642-81.91 92.978 0 122.652 49.147 122.652 96.245v124.912c0 7.679 2.968 15.358 11.375 15.358 7.419 0 12.468-4.217 16.313-13.596zm-134.484-9.444v-92.757c-37.614 15.29-50.635 53.004-50.635 82.055 0 23.444 7.234 34.147 24.594 34.147 15.191 0 26.041-9.684 26.041-23.445zm288.256 56.917H924.01V86.463L891.1 61.905C928.711 48.603 997.822 19.953 1032.142 0v359.777c0 4.595 5.127 14.279 15.38 29.05zm676.806 0h-123.513V86.463l-32.91-24.558C1605.518 48.603 1674.628 19.953 1708.948 0v359.777c0 4.595 5.127 14.279 15.38 29.05zm-491.603-31.332v18.948C1214.728 391.806 1184.89 400 1152.684 400c-53.045 0-71.516-39.432-71.516-72.719V149.354h-25.582L1190.1 31.284v97.3h42.626v20.77H1190.1v192.778c0 15.363 8.999 22.533 19.892 22.533 6.63 0 18.471-3.073 22.734-7.17zm594.239-243.249c-30.57 0-54.931-25.332-54.931-57.123 0-31.79 24.36-57.123 54.93-57.123 30.571 0 54.932 25.333 54.932 57.123s-24.36 57.123-54.931 57.123zm72.303 274.58h-126.086V198.453l-34.695-24.63c39.652-13.342 106.147-42.078 142.329-62.09v248.045c0 4.776 6.15 14.46 18.452 29.05zm342.178 0h-123.517V198.453c0-20.012-14.278-32.84-31.092-32.84-16.32 0-36.038 13.341-36.038 32.84v190.373h-107.38V198.453l-34.617-24.63c39.563-13.342 103.072-42.078 139.174-62.09v52.34c17.803-23.604 52.213-47.209 96.722-47.209 56.378 0 80.61 37.46 80.61 82.102v160.812c0 4.688 5.38 14.372 16.138 29.05z"
                    />
                  </svg>
                </Link>
              </div>
            </h1>
          </div>

          {/* Desktop Search Icon */}
          <div className="hidden lg:block mr-6">
            <svg
              className="h-6 transition-colors duration-200 cursor-pointer hover:text-yellow-400"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 mr-6">
            <ul className="flex list-none gap-6 ml-5">
              {siteConfig.navigation.map((item, index) => (
                <li key={index} className="flex items-center mb-0">
                  <button
                    className="bg-transparent border-none text-white font-bold text-lg lg:text-xl uppercase transition-colors duration-200 hover:text-yellow-400 cursor-pointer flex items-center font-['Proxima_Nova_Condensed',_Arial_Narrow,_helvetica,_arial,_system-ui,_sans-serif]"
                    style={{ fontFamily: "'Proxima Nova Condensed', Arial Narrow, helvetica, arial, system-ui, sans-serif" }}
                  >
                    <span>{item.title}</span>
                    {item.dropdown && (
                      <svg height="30" viewBox="0 0 30 30" width="30" className="ml-1">
                        <path
                          fill="currentColor"
                          d="M27.963 6.75 30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Button */}
          <div className="flex items-center ml-1.5 mr-1.5 order-4 justify-end cursor-pointer lg:ml-0 lg:order-3 lg:justify-normal">
            <button className="bg-transparent border border-white rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-white font-bold text-xs lg:text-sm uppercase transition-colors duration-200 hover:text-yellow-400 hover:border-yellow-400 cursor-pointer font-['Proxima_Nova_Condensed',_Arial_Narrow,_helvetica,_arial,_system-ui,_sans-serif]"
                    style={{ fontFamily: "'Proxima Nova Condensed', Arial Narrow, helvetica, arial, system-ui, sans-serif" }}>
              <span className="flex items-center">
                {siteConfig.newsletter.buttonText}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 