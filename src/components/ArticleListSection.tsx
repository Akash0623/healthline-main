import Image from 'next/image'
import Link from 'next/link'

interface Article {
  title: string
  description: string
  url: string
  image: string
  date?: string
}

interface ArticleListSectionProps {
  title: string
  articles: Article[]
  viewAllUrl?: string
}

export default function ArticleListSection({ title, articles, viewAllUrl }: ArticleListSectionProps) {
  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-5 lg:px-0">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 lg:pb-5 mb-8 lg:mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 uppercase tracking-wide"
              style={{ 
                fontFamily: "'Proxima Nova Condensed', 'Proxima Nova Condensed Fallback', sans-serif",
                color: '#231f20'
              }}>
            {title}
          </h2>
          {viewAllUrl && (
            <Link 
              href={viewAllUrl}
              className="flex items-center text-teal-600 hover:text-teal-700 font-bold text-sm lg:text-base uppercase transition-colors"
              style={{ fontFamily: "'Proxima Nova', 'Proxima Nova Fallback', sans-serif" }}
            >
              View all
              <div className="ml-2">
                <svg height="20" viewBox="0 0 30 30" width="20" fill="currentColor">
                  <path d="M27.963 6.75 30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"/>
                </svg>
              </div>
            </Link>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {articles.slice(0, 8).map((article, index) => (
            <article key={index} className="flex gap-4 lg:gap-6">
              {/* Article Image */}
              <Link href={article.url} className="flex-shrink-0">
                <div className="relative w-24 h-24 lg:w-32 lg:h-24 bg-gray-200 rounded overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              </Link>

              {/* Article Content */}
              <div className="flex-1 min-w-0">
                <Link 
                  href={article.url}
                  className="block group"
                >
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight mb-2 lg:mb-3 group-hover:text-teal-600 transition-colors line-clamp-2"
                      style={{ 
                        fontFamily: "'Proxima Nova Condensed', 'Proxima Nova Condensed Fallback', sans-serif",
                        fontSize: '20px',
                        lineHeight: '26px'
                      }}>
                    {article.title}
                  </h3>
                </Link>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed line-clamp-2 hidden lg:block"
                   style={{ 
                     fontSize: '17px',
                     lineHeight: '22px',
                     marginBottom: '0',
                     marginTop: '10px'
                   }}>
                  <Link 
                    href={article.url}
                    className="hover:text-gray-600 transition-colors"
                  >
                    {article.description}
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Show More Button for Mobile */}
        {viewAllUrl && (
          <div className="text-center mt-8 lg:hidden">
            <Link 
              href={viewAllUrl}
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-bold text-base uppercase transition-colors"
              style={{ fontFamily: "'Proxima Nova', 'Proxima Nova Fallback', sans-serif" }}
            >
              View all articles
              <div className="ml-2">
                <svg height="20" viewBox="0 0 30 30" width="20" fill="currentColor">
                  <path d="M27.963 6.75 30 8.787l-1.018 1.018-12.964 12.963L15 23.787 1.018 9.805 0 8.787 2.037 6.75l1.018 1.018L15 19.713 26.945 7.768l1.018-1.018z"/>
                </svg>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 