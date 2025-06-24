import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Article {
  title: string
  description: string
  url: string
  image: string
  date?: string
}

export interface FeaturedArticle extends Article {
  type: 'primary' | 'secondary'
}

export interface SiteConfig {
  title: string
  description: string
  navigation: Array<{
    title: string
    dropdown?: boolean
  }>
  newsletter: {
    buttonText: string
  }
  socialLinks: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
    youtube: string
    flipboard: string
  }
  footer: {
    copyright: string
    links: Array<{
      title: string
      url: string
    }>
  }
}

export interface HeroSection {
  title: string
  featured: FeaturedArticle[]
}

export interface ArticleSection {
  title: string
  viewAllUrl?: string
  articles: Article[]
}

export interface ContentItem {
  slug: string
  frontmatter: any
  content: string
}

export function getSiteConfig(): SiteConfig {
  try {
    const configPath = path.join(contentDirectory, 'config', 'site.md')
    const fileContents = fs.readFileSync(configPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      title: data.title || "Healthline: Medical information and health advice you can trust.",
      description: data.description || "We're committed to being your source for expert health guidance.",
      navigation: data.navigation || [
        { title: "Health Conditions", dropdown: true },
        { title: "Wellness", dropdown: true },
        { title: "Tools", dropdown: true },
        { title: "Featured", dropdown: true },
        { title: "Connect", dropdown: true }
      ],
      newsletter: data.newsletter || { buttonText: "Subscribe" },
      socialLinks: data.socialLinks || {
        facebook: "http://www.facebook.com/pages/Healthline/173263326992",
        twitter: "https://twitter.com/healthline",
        instagram: "http://www.instagram.com/healthline",
        linkedin: "https://www.linkedin.com/company/healthline-media/",
        youtube: "https://www.youtube.com/channel/UC7snF15Idi7px6XujWe_h9A",
        flipboard: "https://flipboard.com/@healthline"
      },
      footer: data.footer || {
        copyright: "© 2025 Healthline Media LLC. All rights reserved.",
        links: []
      }
    }
  } catch (error) {
    console.error('Error reading site config:', error)
    // Return default config
    return {
      title: "Healthline: Medical information and health advice you can trust.",
      description: "We're committed to being your source for expert health guidance.",
      navigation: [
        { title: "Health Conditions", dropdown: true },
        { title: "Wellness", dropdown: true },
        { title: "Tools", dropdown: true },
        { title: "Featured", dropdown: true },
        { title: "Connect", dropdown: true }
      ],
      newsletter: { buttonText: "Subscribe" },
      socialLinks: {
        facebook: "http://www.facebook.com/pages/Healthline/173263326992",
        twitter: "https://twitter.com/healthline",
        instagram: "http://www.instagram.com/healthline",
        linkedin: "https://www.linkedin.com/company/healthline-media/",
        youtube: "https://www.youtube.com/channel/UC7snF15Idi7px6XujWe_h9A",
        flipboard: "https://flipboard.com/@healthline"
      },
      footer: {
        copyright: "© 2025 Healthline Media LLC. All rights reserved.",
        links: []
      }
    }
  }
}

export function getHeroSection(): HeroSection {
  try {
    const heroPath = path.join(contentDirectory, 'sections', 'hero.md')
    const fileContents = fs.readFileSync(heroPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      title: data.title || "Featured Articles",
      featured: data.featured || [
        {
          title: "The Correct Way to Carb Load",
          description: "Keep these common mistakes in mind, too.",
          url: "/nutrition/carb-loading",
          image: "https://media.post.rvohealth.io/wp-content/uploads/2025/06/The-Correct-Way-to-Carb-Load-homepage-left-thumb-crop-732x673-1.jpg",
          type: "primary"
        },
        {
          title: "Rare Appendix Cancer Cases Are Rising in Gen Xers, Millennials",
          description: "However, experts caution that this type of cancer remains exceedingly rare.",
          url: "/health-news/appendix-cancer-rising-young-adults",
          image: "https://media.post.rvohealth.io/wp-content/uploads/2025/06/female-patient-talking-with-her-doctor-office-732x549-thumbnail.jpg",
          type: "secondary"
        }
      ]
    }
  } catch (error) {
    console.error('Error reading hero section:', error)
    // Return default hero
    return {
      title: "Featured Articles",
      featured: [
        {
          title: "The Correct Way to Carb Load",
          description: "Keep these common mistakes in mind, too.",
          url: "/nutrition/carb-loading",
          image: "https://media.post.rvohealth.io/wp-content/uploads/2025/06/The-Correct-Way-to-Carb-Load-homepage-left-thumb-crop-732x673-1.jpg",
          type: "primary"
        },
        {
          title: "Rare Appendix Cancer Cases Are Rising in Gen Xers, Millennials",
          description: "However, experts caution that this type of cancer remains exceedingly rare.",
          url: "/health-news/appendix-cancer-rising-young-adults",
          image: "https://media.post.rvohealth.io/wp-content/uploads/2025/06/female-patient-talking-with-her-doctor-office-732x549-thumbnail.jpg",
          type: "secondary"
        }
      ]
    }
  }
}

export function getThisJustInSection(): ArticleSection {
  try {
    const sectionPath = path.join(contentDirectory, 'sections', 'this-just-in.md')
    const fileContents = fs.readFileSync(sectionPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      title: data.title || "THIS JUST IN",
      viewAllUrl: data.viewAllUrl,
      articles: data.articles || []
    }
  } catch (error) {
    console.error('Error reading this-just-in section:', error)
    // Return default articles
    return {
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
  }
}

export function getAllArticles(): Article[] {
  try {
    const articlesDirectory = path.join(contentDirectory, 'articles')
    
    if (!fs.existsSync(articlesDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(articlesDirectory)
    const articles = filenames
      .filter((filename) => filename.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(articlesDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)
        
        return {
          title: data.title || '',
          description: data.description || '',
          url: data.url || `/${filename.replace('.md', '')}`,
          image: data.image || '',
          date: data.date
        }
      })

    return articles
  } catch (error) {
    console.error('Error reading articles:', error)
    return []
  }
}

export async function getContentByType(type: string): Promise<ContentItem[]> {
  const sectionsDirectory = path.join(contentDirectory, 'sections')
  const filenames = fs.readdirSync(sectionsDirectory)
  
  const allContent = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(sectionsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      // Process markdown content
      const processedContent = await remark()
        .use(html)
        .process(content)
      const contentHtml = processedContent.toString()
      
      return {
        slug,
        frontmatter: data,
        content: contentHtml,
      }
    })
  )
  
  // Filter by type and sort by order
  return allContent
    .filter(item => !type || item.frontmatter.type === type)
    .sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0))
}

export async function getAllSections(): Promise<ContentItem[]> {
  const sectionsDirectory = path.join(contentDirectory, 'sections')
  const filenames = fs.readdirSync(sectionsDirectory)
  
  const allSections = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(sectionsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      // Process markdown content
      const processedContent = await remark()
        .use(html)
        .process(content)
      const contentHtml = processedContent.toString()
      
      return {
        slug,
        frontmatter: data,
        content: contentHtml,
      }
    })
  )
  
  // Sort by order
  return allSections.sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0))
}

export async function getArticles(): Promise<ContentItem[]> {
  const articlesDirectory = path.join(contentDirectory, 'articles')
  
  // Check if articles directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(articlesDirectory)
  
  const allArticles = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      // Process markdown content
      const processedContent = await remark()
        .use(html)
        .process(content)
      const contentHtml = processedContent.toString()
      
      return {
        slug,
        frontmatter: data,
        content: contentHtml,
      }
    })
  )
  
  return allArticles
}

export async function getArticleBySlug(slug: string): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(contentDirectory, 'articles', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown content
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      frontmatter: data,
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
} 