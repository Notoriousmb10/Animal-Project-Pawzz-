import Link from "next/link"
import { Button } from "@/components/ui/button"

export function UiButton({ className, label, link = "#" }) {
    return (
        <Button asChild className={className}>
            <Link href={link}>{label}</Link>
        </Button>
    )
}
