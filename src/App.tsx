import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function App() {
  const [isGuestsInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'meduardo.valentim@gmail.com'
  ])

  function openGuestsInput() {
    setIsGuestInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function addNewEmailToInvite(event: FormEvent <HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string

    if(!email) {
      return
    }

    if(emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailToInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
          <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className="text-zinc-400 size-5" />
              <input disabled={isGuestsInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" type="text" placeholder="Para onde você vai?" />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className="text-zinc-400 size-5" />
              <input disabled={isGuestsInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" type="text" placeholder="Quando?" />
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestsInputOpen ? (
              <button className='text-zinc-200 bg-zinc-800 rounded-lg py-2 px-5 font-md flex items-center gap-2 hover:bg-zinc-700 outline-none' onClick={closeGuestsInput}>
                Alterar local/data
                <Settings2 className="size-5" />
                </button>
            ) : (
              <button className='text-lime-950 bg-lime-300 rounded-lg py-2 px-5 font-md flex items-center gap-2 hover:bg-lime-400' onClick={openGuestsInput}>
                Continuar
                <ArrowRight className="text-lime-950 size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
                    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
                    <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 outline-none'>
                      <UserRoundPlus className="text-zinc-400 size-5" />
                      <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estará na viagem?</span>
                    </button>

                    <div className='w-px h-6 bg-zinc-800' />

                    <button className='text-lime-950 bg-lime-300 rounded-lg py-2 px-5 font-md flex items-center gap-2 hover:bg-lime-400' >
                      Confirmar Viagem
                      <ArrowRight className="text-lime-950 size-5" />
                    </button>
                  </div>
          )}
        </div>


        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda < br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">política de privacidade</a>.
        </p>
      </div>

        {isGuestsModalOpen && (
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
    </div>
  )
}

