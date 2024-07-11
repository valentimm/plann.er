import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    openConfirmTripModal: () => void
    emailsToInvite: string[]
}

export function InviteGuestsStep ({
    openGuestsModal,
    openConfirmTripModal,
    emailsToInvite
} : InviteGuestsStepProps) {
    return (
        <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
            <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 outline-none'>
              <UserRoundPlus className="text-zinc-400 size-5" />
              {emailsToInvite.length > 0 ? (
                <span className='text-zinc-100 text-lg flex-1 text-left'>
                  {emailsToInvite.length} {emailsToInvite.length > 1 ? 'pessoas convidadas' : 'pessoa convidada'}
                </span>
              ): (
                <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estará na viagem?</span>
              )}

            </button>

            <div className='w-px h-6 bg-zinc-800' />

            <button onClick={openConfirmTripModal} className='text-lime-950 bg-lime-300 rounded-lg py-2 px-5 font-md flex items-center gap-2 hover:bg-lime-400' >
              Confirmar Viagem
              <ArrowRight className="text-lime-950 size-5" />
            </button>
        </div>
    )
}