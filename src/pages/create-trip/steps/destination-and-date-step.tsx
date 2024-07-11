import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    openGuestsInput: () => void
    closeGuestsInput: () => void
}

export function DestinationAndDateStep ({
    isGuestsInputOpen,
    openGuestsInput,
    closeGuestsInput
}: DestinationAndDateStepProps) {
    return (
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
    )
}