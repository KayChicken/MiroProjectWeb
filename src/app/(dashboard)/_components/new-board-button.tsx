import { cn } from '@/lib/utils';
import { useMutation } from 'convex/react';
import { Plus } from 'lucide-react';
import React from 'react';
import { api } from '../../../../convex/_generated/api';
import { useApiMutation } from '../../../../hooks/use-api-mutation';
import { toast } from 'sonner';

interface NewBoardButtonProps {
    orgId: string,
    disabled?: boolean
}


const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {

    const { mutate, pending } = useApiMutation(api.board.create)


    const onClick = () => {
        mutate({
            orgId,
            title: "United"
        })
            .then((id) => {
                toast.success("Board created")
            })
            .catch(() => toast.error("Fail"))
    }

    return (
        <button disabled={pending || disabled} onClick={onClick} className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6", disabled && "opacity-75")}>
            <div />
            <Plus className="h-12 w-12 text-white stroke-1" />
            <p className='text-sm text-white font-light'>
                New Board
            </p>
        </button>
    );
};

export default NewBoardButton;