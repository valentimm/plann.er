import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const navigate = useNavigate()

  function openGuestsInput() {
    setIsGuestInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
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

  function createTrip (event: FormEvent <HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/1')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
            <DestinationAndDateStep
                isGuestsInputOpen={isGuestsInputOpen}
                openGuestsInput={openGuestsInput}
                closeGuestsInput={closeGuestsInput}
            />

          {isGuestsInputOpen && (
            <InviteGuestsStep
                openGuestsModal={openGuestsModal}
                openConfirmTripModal={openConfirmTripModal}
                emailsToInvite={emailsToInvite}
            />
          )}
        </div>


        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda < br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">política de privacidade</a>.
        </p>
      </div>

        {isGuestsModalOpen && (
            <InviteGuestsModal
              emailsToInvite={emailsToInvite}
              addNewEmailToInvite={addNewEmailToInvite}
              removeEmailToInvite={removeEmailToInvite}
              setIsGuestsModalOpen={setIsGuestsModalOpen}
            />
        )}

        {isConfirmTripModalOpen && (
            <ConfirmTripModal
                setIsConfirmTripModalOpen={setIsConfirmTripModalOpen}
                createTrip={createTrip}
            />
        )}

    </div>
  )
}

