"use client"
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from 'convex/react';
import React from 'react';
import { api } from '../../../../../convex/_generated/api';
import { Id } from '../../../../../convex/_generated/dataModel';

interface InfoProps {
    boardId: string;
}


const Info = ({ boardId }: InfoProps) => {

    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">
    })

    return (
        <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md'>
            Board : {data?.title}
        </div>
    );
};


Info.Skeleton = function InfoSkeleton() {
    return (
        <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md  w-[300px]'>

        </div>
    )
}

export default Info;