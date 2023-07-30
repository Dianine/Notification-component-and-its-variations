import { ButtonHTMLAttributes, ElementType } from "react"
import { twMerge } from 'tailwind-merge'

interface NotificationActionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NotificationAction({ icon: Icon, ...rest }: NotificationActionsProps) {
  return (
    <button {...rest}
      className={twMerge('w-8 h-8 flex justify-center items-center rounded bg-zinc-800 hover:bg-zinc-700', rest.className)}
    >
      <Icon className='w-3 h-3 text-zinc-50' />
    </button>
  )
}