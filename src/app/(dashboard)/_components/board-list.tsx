"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import EmptySearch from "./empty-search"
import EmptyFavorites from "./empty-favorites"
import EmptyBoards from "./empty-boards"


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
            <EmptySearch />
        )
    }

    if (!data?.length && query.favorites) {
        return (
            <EmptyFavorites />
        )
    }

    if (!data?.length) {
        return (

            <EmptyBoards />

        )
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}


export default BoardList