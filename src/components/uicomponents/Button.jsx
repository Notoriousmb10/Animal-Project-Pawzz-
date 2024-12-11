import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UiButton({ className, label, link = "#", onClick, icon }) {
    
    return (
        <Button asChild className={className} onClick={onClick}>
            <Link href={link}>{label} {icon}</Link>
        </Button>
    )
}
