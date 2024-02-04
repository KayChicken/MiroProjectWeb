"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"


interface BoardsListProps {
    orgId: string,
    query: {
        search?: string,
        favorites?: string
    }
}





export const BoardList = ({ orgId, query }: BoardsListProps) => {
    const data = []


    if (!data?.length && query.search) {
        return (
            <div className="h-full flex flex-col items-center justify-center">
                <Image src="/empty-search.svg" alt="Empty" height={140} width={140} />
                <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
                <p className="text-muted-foreground text-sm mt-2">Try something else</p>
            </div>
        )
    }

    if (!data?.length && query.favorites) {
        return (
            <div className="h-full flex flex-col items-center justify-center">
                <Image src="/empty-favorites.svg" alt="Empty" height={200} width={200} />
                <h2>No favorites found!</h2>
                <p className="text-muted-foreground text-sm mt-2">Try something else</p>
            </div>
        )
    }

    if (!data?.length) {
        return (

            <div className="h-full flex flex-col items-center justify-center">
                <Image src="/note.svg" alt="Empty" height={140} width={140} />
                <h2 className="text-2xl font-semibold mt-6">No boards found!</h2>
                <p className="text-muted-foreground text-sm mt-2">Start by creating a board for organization</p>
                <Button className="mt-5">Create board</Button>
            </div>

        )
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}


export default BoardList