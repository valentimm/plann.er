import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface InviteGuestsModalProps {
    emailsToInvite: string[]
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
    removeEmailToInvite: (emailToRemove: string) => void
    setIsGuestsModalOpen: (isOpen: boolean) => void
}


export function InviteGuestsModal({
    emailsToInvite,
    addNewEmailToInvite,
    removeEmailToInvite,
    setIsGuestsModalOpen
}: InviteGuestsModalProps) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center'>
        <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
              <button>
                <X className='size-5 text-zinc-400' onClick={() => setIsGuestsModalOpen(false)} />
              </button>
            </div>
            <p className='text-sm text-zinc-400'>
              Os convidados irão receber e-mails para confirmar a participação da viagem.
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {emailsToInvite.map(email => {
              return (
                <div key={email} className='bg-zinc-800 rounded-lg px-3 py-2 flex items-center gap-2'>
                  <AtSign className='size-5 text-zinc-400' />
                  <span className='text-zinc-400'>{email}</span>
                  <button onClick={() => removeEmailToInvite(email)}>
                    <X className='size-5 text-zinc-400' />
                  </button>
                </div>
              )

            })}
          </div>

          <div className='w-full h-px bg-zinc-800'/>

          <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <AtSign className='size-5 text-zinc-400' />
            <input
              type='email'
              name='email'
              placeholder='Digite o e-mail do convidado'
              className='bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none'
            />

            <button
            type='submit'
            className='text-lime-950 bg-lime-300 rounded-lg py-2 px-5 font-md flex items-center gap-2 hover:bg-lime-400'>
              Convidar
              <Plus className="text-lime-950 size-5" />
            </button>
          </form>
        </div>
      </div>
    )}