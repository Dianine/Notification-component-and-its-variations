'use client'

import { AlarmClock, Rocket, Activity, AlertCircleIcon, X, Check, ArrowBigRight, ArrowBigLeft } from 'lucide-react'
import { Notification } from './notification'

export function Widget() {
  return (
    <div className="w-[28rem] rounded overflow-hidden">
      {/*Header */}
      <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/*Recent Section */}
      <div>
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
          Recentes
        </div>

        <div className='divide-y-2 divide-zinc-950'>
          <Notification.Root>
            <Notification.Icon
              icon={Rocket}
            />

            <Notification.Content
              text='Demonstração de uma notificação que contém todos os compoentes criados'
              categoria='Indicação'
              tempo='Há 1 minuto'
            />

            <Notification.Actions>
              <Notification.Action
                onClick={() => { }}
                icon={X}
                title='Recusar'
              />

              <Notification.Action
                onClick={() => { }}
                icon={Check}
                title='Aceitar'
                className='bg-violet-500 hover:bg-violet-400'
              />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon
              icon={AlertCircleIcon}
            />
            <Notification.Content
              text='Demonstração de uma notificação que contém apenas botão de cancelar.'
              categoria='Alerta'
              tempo='Há 2 minuto'
            />
            <Notification.Actions>
              <Notification.Action
                onClick={() => { }}
                icon={X}
                title='Recusar'
                className='bg-red-500 hover:bg-red-600'
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>

      {/*Antigas Section */}
      <div>
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
          Antigas
        </div>
        <div className='divide-y-2 divide-zinc-950'>
          <Notification.Root>
            <Notification.Icon
              icon={AlarmClock}
            />
            <Notification.Content
              text='Demonstração de uma notificação que contém apenas botão de Aceitar.'
              categoria='Alerta'
              tempo='Há 3 minuto'
            />
            <Notification.Actions>
              <Notification.Action
                onClick={() => { }}
                icon={Check}
                title='Aceitar'
                className='bg-emerald-500 hover:bg-emerald-400'

              />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Content
              text='Demonstração de uma notificação sem Icone.'
              categoria='Indicação'
              tempo='Há 1 minuto'
            />
            <Notification.Actions>
              <Notification.Action
                onClick={() => { }}
                icon={ArrowBigLeft}
                title='Voltar'
              />

              <Notification.Action
                onClick={() => { }}
                icon={ArrowBigRight}
                title='Avançar'
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </div>
  )
}