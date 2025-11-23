'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className="text-white hover:bg-white/10"
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-yellow-300' />
      ) : (
        <MoonIcon className='size-4 text-gray-300' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}