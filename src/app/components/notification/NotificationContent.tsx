interface NotificationContentProps {
  text: string;
  categoria: string;
  tempo: string;
}


export function NotificationContent({ text, categoria, tempo }: NotificationContentProps) {
  return (
    <div className='flex-1 flex flex-col gap-2'>
      <p className='text-sm leading-relaxed text-zinc-100'>
        {text}
      </p>
      <div className='text-xxs text-zinc-400 flex items-center gap-6'>
        <span>{categoria}</span>
        <time>{tempo}</time>
      </div>
    </div>
  )
}