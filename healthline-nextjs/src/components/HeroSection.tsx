import Image from 'next/image'
import Link from 'next/link'

interface FeaturedArticle {
  title: string
  description: string
  url: string
  image: string
  type: 'primary' | 'secondary'
}

interface HeroSectionProps {
  title: string
  featured: FeaturedArticle[]
}

export default function HeroSection({ title, featured }: HeroSectionProps) {
  const primaryArticle = featured.find(article => article.type === 'primary')
  const secondaryArticle = featured.find(article => article.type === 'secondary')

  return (
    <div className="container mx-auto px-5 lg:px-0 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Primary Featured Article */}
        {primaryArticle && (
          <div className="lg:row-span-2">
            <Link href={primaryArticle.url} className="group cursor-pointer block">
              <div 
                className="relative w-full h-72 lg:h-96 bg-cover bg-center rounded-lg overflow-hidden mb-6 lg:mb-8"
                style={{ 
                  backgroundImage: `url(${primaryArticle.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-teal-600 transition-colors">
                      {primaryArticle.title}
                    </h1>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      {primaryArticle.description}
                    </p>
                    <div className="mt-4 lg:hidden">
                      <svg 
                        className="h-6 w-6 text-teal-600 transform rotate-180" 
                        viewBox="0 0 30 30" 
                        fill="currentColor"
                      >
                        <path d="M27.963 6.75 30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Secondary Featured Article */}
        {secondaryArticle && (
          <div className="lg:col-start-2">
            <Link href={secondaryArticle.url} className="group cursor-pointer block">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={secondaryArticle.image}
                    alt={secondaryArticle.title}
                    fill
                    className="object-cover group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="p-6 bg-gray-100">
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-teal-600 transition-colors">
                    {secondaryArticle.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-0">
                    {secondaryArticle.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 