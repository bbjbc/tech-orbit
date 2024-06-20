'use client'

import { memo } from 'react'
import { useAtom } from 'jotai'
import { ToggleGroupItem } from '@/components/ui/toggle-group'

import { selectedIconsAtom } from '@/atoms/selected-icons'
import type { IconType } from '@/types/icons'
import { cn } from '@/libs/utils'

const IconButton = memo(({ icon }: { icon: IconType }) => {
  const [selectedIcons] = useAtom(selectedIconsAtom)

  const isActive = selectedIcons.includes(icon.title)

  return (
      <ToggleGroupItem
        value={icon.title}
        className={cn('flex aspect-square h-full w-full flex-col', {
          'bg-accent': isActive,
        })}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}"`),
          }}
          className="h-16 w-16"
        />
        <span className="text-xs">{icon.title}</span>
      </ToggleGroupItem>
  )
})

IconButton.displayName = 'IconButton'

export { IconButton }
