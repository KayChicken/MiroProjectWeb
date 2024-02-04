import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";


interface FooterProps {
    title: string,
    authorLabel: string,
    createdAtLabel: string,
    isFavorite: boolean,
    onClick: () => void,
    disabled: boolean
}

const Footer = ({ title, authorLabel, createdAtLabel, isFavorite, onClick, disabled }: FooterProps) => {
    return (
        <div className="relative bg-white p-3">
            <p className="text-[1rem] font-bold truncate max-w-[calc(100%-20px)]">
                {title}
            </p>
            <p>
                {authorLabel} , {createdAtLabel}
            </p>
            <button disabled={disabled} onClick={onClick} className={cn("group-hover:opacity-100 transition absolute top-4 right-3 text-muted-foreground hover:text-blue-600", disabled && "cursor-not-allowed opacity-75")}>
                <Star className={cn("h-5 w-5" , isFavorite && "fill-blue-600 text-blue-600")}/>
            </button>
        </div>
    );
};

export default Footer;