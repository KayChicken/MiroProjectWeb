"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useMutation } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { useOrganization } from "@clerk/nextjs"
import { useApiMutation } from "../../../../hooks/use-api-mutation"
import { toast } from "sonner"

const EmptyBoards = () => {

    const { mutate, pending } = useApiMutation(api.board.create)
    const { organization } = useOrganization()

    const onClick = () => {
        if (!organization) return



        mutate({
            orgId: organization.id,
            title: "Untited"
        })
            .then((id) => {
                toast.success("Board created");
            })
            .catch(() => toast.error("Failed to created"))
    }

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/note.svg" alt="Empty" height={140} width={140} />
            <h2 className="text-2xl font-semibold mt-6">No boards found!</h2>
            <p className="text-muted-foreground text-sm mt-2">Start by creating a board for organization</p>
            <Button disabled={pending} onClick={onClick} className="mt-5">Create board</Button>
        </div>
    )
}


export default EmptyBoards
