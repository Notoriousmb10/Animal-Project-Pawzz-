import Link from "next/link"
import { Button } from "@/components/ui/button"

export function UiButton({ className, label }) {
    return (
        <Button asChild className={className}>
            <Link href="/login">{label}</Link>
        </Button>
    )
}
