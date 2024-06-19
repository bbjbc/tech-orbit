'use client'

import { memo } from 'react'
import { useAtom } from 'jotai'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import { selectedIconsAtom } from '@/atoms/selected-icons'
import type { IconType } from '@/types/icons'
import { cn } from '@/libs/utils'

const IconButton = memo(({ icon }: { icon: IconType }) => {
  const [selectedIcons, setSelectedIcons] = useAtom(selectedIconsAtom)

  const isActive = selectedIcons.includes(icon.title)

  const handleValueChange = (value: string[]) => {
    setSelectedIcons(value)
  }

  return (
    <ToggleGroup
      value={selectedIcons}
      onValueChange={handleValueChange}
      type="multiple"
      className="flex flex-col gap-4"
    >
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
    </ToggleGroup>
  )
})

IconButton.displayName = 'IconButton'

export { IconButton }
