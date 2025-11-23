import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'future-insights')

// Ensure the directory exists
try {
  if (!fs.existsSync(rootDirectory)) {
    fs.mkdirSync(rootDirectory, { recursive: true })
  }
} catch (error) {
  console.error('Error creating directory:', error)
}

// Function to normalize media paths
export function normalizeMediaPath(path: string | undefined): string | undefined {
  if (!path) return undefined;
  
  // Ensure paths start with "/"
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  // Replace video/ with videos/ if needed (match your actual structure)
  if (path.startsWith('/video/')) {
    path = '/videos' + path.substring(6);
  }
  
  // Add more path normalizations as needed based on your file structure
  
  return path;
}

export type FutureInsight = {
  metadata: FutureInsightMetadata
  content: string
}

export type FutureInsightMetadata = {
  title?: string
  summary?: string
  image?: string
  video?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getFutureInsightBySlug(slug: string): Promise<FutureInsight | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    
    // Normalize media paths
    const normalizedData = {
      ...data,
      image: normalizeMediaPath(data.image as string),
      video: normalizeMediaPath(data.video as string)
    }
    
    return { metadata: { ...normalizedData, slug }, content }
  } catch (error) {
    console.error(`Error reading insight ${slug}:`, error)
    return null
  }
}

export async function getFutureInsights(limit?: number): Promise<FutureInsightMetadata[]> {
  try {
    // Get all files in the directory
    const files = fs.readdirSync(rootDirectory)
    
    // Filter for MDX files only
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))
    
    if (mdxFiles.length === 0) {
      console.log('No MDX files found in future-insights directory')
      return []
    }

    const insights = mdxFiles
      .map(file => {
        try {
          return getFutureInsightMetadata(file)
        } catch (error) {
          console.error(`Error processing file ${file}:`, error)
          return { slug: file.replace(/\.mdx$/, '') } as FutureInsightMetadata
        }
      })
      .filter(metadata => metadata !== null)
      .sort((a, b) => {
        if (!a.publishedAt || !b.publishedAt) return 0
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      })

    console.log(`Found ${insights.length} future insights`)

    if (limit && limit > 0) {
      return insights.slice(0, limit)
    }

    return insights
  } catch (error) {
    console.error('Error getting future insights:', error)
    return []
  }
}

export function getFutureInsightMetadata(filepath: string): FutureInsightMetadata {
  try {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    
    // Normalize media paths
    const normalizedData = {
      ...data,
      image: normalizeMediaPath(data.image as string),
      video: normalizeMediaPath(data.video as string)
    }
    
    return { ...normalizedData, slug }
  } catch (error) {
    console.error(`Error reading metadata for ${filepath}:`, error)
    return { slug: filepath.replace(/\.mdx$/, '') }
  }
}