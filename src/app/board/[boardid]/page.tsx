import React from 'react';
import Canvas from './_components/canvas';
import { Room } from '@/components/room';
import Loading from './_components/loading';

interface BoardIdPageProps {
    params: {
        boardid: string
    }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {



    return (
        <div className='h-full w-full'>
            <Room roomId={params.boardid} fallback={<Loading />}>
                <Canvas boardid={params.boardid} />
            </Room>
        </div>
    );
};

export default BoardIdPage;