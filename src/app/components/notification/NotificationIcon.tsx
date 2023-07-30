import { ElementType } from "react"

interface NotificationIconProps {
  icon: ElementType
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return (
    <Icon className='w-[1.5rem] h-[1.5rem] text-violet-500 mt-3' />
  )
}