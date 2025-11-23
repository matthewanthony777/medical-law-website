# Video LFS Migration Guide

## Root Cause of Video Issues

The video files in this repository are tracked using Git LFS (Large File Storage), but they are **not being properly deployed to production**. The file `public/videos/future-insights/tenet-edit.MP4` is only 132 bytes locally - this is a Git LFS pointer file, not the actual video content.

When the production deployment tries to load the video, it receives this pointer file instead of the actual video, causing the video to fail to load and display placeholder icons.

## Immediate Fixes Applied

All video components have been updated with:
1. **Proper error handling** - Videos that fail to load now gracefully fall back to images
2. **Enhanced logging** - Console errors now provide detailed information about video loading failures
3. **High-quality fallback images** - No broken icons are ever shown to users
4. **Consistent implementation** - All pages handle video failures the same way

### Components Fixed:
- ✅ `components/hero-media.tsx` - Homepage hero section
- ✅ `app/expertise/page.tsx` - Expertise page video background
- ✅ `components/media-display.tsx` - Future Insights article thumbnails

## Long-Term Solutions

### Option 1: Configure Git LFS in Production (Recommended for Vercel/Netlify)

If deploying to Vercel or Netlify, you need to ensure Git LFS files are pulled during deployment:

#### For Vercel:
1. Install Git LFS in your build environment:
   ```bash
   # Add to package.json scripts
   {
     "scripts": {
       "vercel-build": "git lfs pull && next build"
     }
   }
   ```

2. Or use Vercel's Git LFS integration:
   - Go to Project Settings → Git
   - Enable "Git LFS" support
   - Redeploy

#### For Netlify:
1. Add a `netlify.toml` file:
   ```toml
   [build]
     command = "git lfs pull && npm run build"
   ```

2. Or enable in Netlify UI:
   - Go to Site Settings → Build & Deploy → Build Settings
   - Enable Git LFS

### Option 2: Move Videos to CDN/Cloud Storage (Recommended for Large Videos)

This is the most reliable solution for production deployments:

#### Step 1: Upload Videos to Cloud Storage

**Using Cloudinary:**
```bash
# Sign up for free account at cloudinary.com
# Upload your videos via their dashboard or API
```

**Using AWS S3:**
```bash
# Upload to S3 bucket
aws s3 cp public/videos/future-insights/tenet-edit.MP4 s3://your-bucket/videos/tenet-edit.MP4 --acl public-read
```

**Using Vercel Blob:**
```bash
npm install @vercel/blob
# Follow Vercel Blob documentation to upload videos
```

#### Step 2: Update Video Paths

Update all video references to use the CDN URLs:

**In `app/page.tsx`:**
```tsx
<HeroMedia
  video="https://your-cdn.com/videos/tenet-edit.MP4"
  image="/images/future-insights/ai-legal-practice.jpg"
  alt="Legal Futurism - Where Law, AI, and Media Converge"
/>
```

**In `app/expertise/page.tsx`:**
```tsx
<video
  src="https://your-cdn.com/videos/tenet-edit.MP4"
  poster="/images/future-insights/ai-legal-practice.jpg"
  // ... other props
/>
```

**In MDX frontmatter (`content/future-insights/*.mdx`):**
```yaml
---
video: https://your-cdn.com/videos/tenet-edit.MP4
---
```

#### Step 3: Remove Videos from Git LFS

```bash
# Remove videos from LFS tracking
git lfs untrack "*.mp4"
git lfs untrack "*.MP4"

# Remove video files from repository
git rm public/videos/future-insights/tenet-edit.MP4

# Commit changes
git add .gitattributes
git commit -m "Migrate videos to CDN, remove from Git LFS"
```

### Option 3: Convert Videos to Smaller Files (Quick Fix)

If videos are not too large, you can convert them to smaller files that don't require LFS:

```bash
# Using ffmpeg to compress video
ffmpeg -i public/videos/future-insights/tenet-edit.MP4 \
  -vcodec libx264 -crf 28 \
  -preset medium \
  -vf scale=1280:-2 \
  public/videos/future-insights/tenet-edit-compressed.mp4

# Remove from LFS
git lfs untrack "*.mp4"
git lfs untrack "*.MP4"

# Add compressed video directly to git
git add public/videos/future-insights/tenet-edit-compressed.mp4
git commit -m "Replace LFS video with compressed version"
```

Then update video paths to use the `-compressed.mp4` files.

## Verifying the Fix

### In Development:
1. Clear browser cache
2. Run `npm run dev`
3. Check browser console for video loading errors
4. Verify fallback images display when videos fail

### In Production:
1. Deploy changes
2. Open browser developer tools
3. Check Console tab for detailed error messages
4. Check Network tab to see if video files are 404 or returning LFS pointers
5. Verify professional images are displayed instead of broken icons

## Testing Checklist

- [ ] Homepage hero section shows content (video or image, never broken icon)
- [ ] Expertise page hero shows content (video or image, never broken icon)
- [ ] Future Insights article cards show content (video or image, never broken icon)
- [ ] Browser console shows helpful error messages if videos fail
- [ ] All pages are responsive and performant
- [ ] No placeholder icons are ever visible to users

## Current Video Files

```
public/videos/future-insights/tenet-edit.MP4 (132 bytes - LFS pointer)
```

Referenced in:
- `components/hero-media.tsx` (default prop)
- `app/page.tsx` (explicit prop)
- `app/expertise/page.tsx`
- `content/future-insights/article-two-matt.mdx`

Additional video reference:
- `content/future-insights/introduction-to-mdx.mdx` - `/video/ai-legal-practice.mp4` (file doesn't exist)

## Recommended Immediate Action

1. **Upload the actual video file** (`tenet-edit.MP4`) to a cloud storage service
2. **Update all video paths** in the codebase to use the CDN URL
3. **Test in production** to verify videos play correctly
4. **Keep the fallback images** - they provide excellent UX when videos can't load

## Questions?

If you need help with any of these migration steps, please check:
- [Git LFS Documentation](https://git-lfs.github.com/)
- [Vercel Git LFS Guide](https://vercel.com/guides/how-to-configure-git-lfs-with-vercel)
- [Netlify Large Media](https://docs.netlify.com/large-media/overview/)
