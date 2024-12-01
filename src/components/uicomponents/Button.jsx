import Link from "next/link"
import { Button } from "@/components/ui/button"

export function UiButton({ className, label, link = "#", onClick }) {
    return (
        <Button asChild className={className} onClick={onClick}>
            <Link href={link}>{label}</Link>
        </Button>
    )
}
