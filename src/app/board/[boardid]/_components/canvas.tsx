'use client'

import Info from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

import { useSelf } from "../../../../../liveblocks.config"
import { useApiMutation } from "../../../../../hooks/use-api-mutation"
import { api } from "../../../../../convex/_generated/api"

interface CanvasProps {
    boardId: string
}


export const Canvas = ({ boardId }: CanvasProps) => {




    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />
            <Participants />
            <Toolbar />
        </main>
    )
}

export default Canvas