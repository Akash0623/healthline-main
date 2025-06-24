import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ArticleListSection from '@/components/ArticleListSection'
import Footer from '@/components/Footer'
import { getSiteConfig } from '@/lib/content'

export default function Home() {
  const siteConfig = getSiteConfig()
  
  const heroData = {
    title: "Featured Articles",
    featured: [
      {
        title: "The Correct Way to Carb Load",
        description: "Keep these common mistakes in mind, too.",
        url: "/nutrition/carb-loading",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2025/06/The-Correct-Way-to-Carb-Load-homepage-left-thumb-crop-732x673-1.jpg",
        type: "primary" as const
      },
      {
        title: "Rare Appendix Cancer Cases Are Rising in Gen Xers, Millennials",
        description: "However, experts caution that this type of cancer remains exceedingly rare.",
        url: "/health-news/appendix-cancer-rising-young-adults", 
        image: "https://media.post.rvohealth.io/wp-content/uploads/2025/06/female-patient-talking-with-her-doctor-office-732x549-thumbnail.jpg",
        type: "secondary" as const
      }
    ]
  }

  const thisJustInData = {
    title: "THIS JUST IN",
    viewAllUrl: "/health-news",
    articles: [
      {
        title: "An Obesity Medicine Doctor's Approach for Weight Loss and Type 2 Diabetes",
        description: "With the right support, your journey can lead to meaningful improvements.",
        url: "/health/diabetes/how-an-obesity-medicine-doctor-recommends-approaching-weight-loss-for-type-2-diabetes",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2025/05/4344846-How-an-Obesity-Medicine-Doctor-Recommends-Approaching-Weight-Loss-for-Type-2-Diabetes-732x549-thumbnail.jpg",
        date: "2025-01-20"
      },
      {
        title: "5 No-bake Desserts for Hot Summer Days", 
        description: "Don't let the weather stop you from having a sweet treat.",
        url: "/health/no-bake-desserts-for-hot-summer-days",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2025/06/best-no-bake-desserts-732x549-Thumbnail.jpg",
        date: "2025-01-19"
      },
      {
        title: "The Most Effective Ways to Treat Gnat Bites",
        description: "Honestly, they might be more annoying than mosquitos.",
        url: "/health/gnat-bites", 
        image: "https://media.post.rvohealth.io/wp-content/uploads/2019/11/mom-kid-bug-bite-bandaid-cut-732x549-thumbnail.jpg",
        date: "2025-01-18"
      },
      {
        title: "How to Get Out of Bed When Depression Keeps You Down",
        description: "Sometimes the biggest task is starting the day.",
        url: "/health/mental-health/depression-get-out-of-bed",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/9485-woman_bed_home-732x549-thumbnail.jpg", 
        date: "2025-01-17"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header siteConfig={siteConfig} />
      <main>
        <HeroSection {...heroData} />
        <ArticleListSection {...thisJustInData} />
      </main>
      <Footer siteConfig={siteConfig} />
    </div>
  )
}
