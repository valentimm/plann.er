import { Mail, Plus, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
    setIsConfirmTripModalOpen: (isOpen: boolean) => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal ({
    setIsConfirmTripModalOpen,
    createTrip,
}: ConfirmTripModalProps) {
    return(
        <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center'>
        <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
              <button>
                <X className='size-5 text-zinc-400' onClick={() => setIsConfirmTripModalOpen(false)} />
              </button>
            </div>
            <p className='text-sm text-zinc-400'>
              Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
            </p>
          </div>

          <form onSubmit={createTrip} className='space-y-3'>
            <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <User className='size-5 text-zinc-400' />
              <input
                type='text'
                name='Name'
                placeholder='Seu nome completo'
                className='bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none'
              />
            </div>

            <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <Mail className='size-5 text-zinc-400' />
              <input
                type='email'
                name='email'
                placeholder='Seu email pessoal'
                className='bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none'
              />
            </div>
            <Button type="submit">
                Convidar
                <Plus className="size-5" />
            </Button>
          </form>
        </div>
    </div>
    )
}
