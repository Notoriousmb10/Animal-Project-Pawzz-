import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UiButton({ className, label, link = "#", onClick, icon }) {
    const isExternalLink = (url) => {
        return /^(http|https):\/\//.test(url);
    };

    const toLink = (link) => {
        if (isExternalLink(link)) {
            return link;
        } else if (link.length > 10) {
            return "/external-link?url=" + encodeURIComponent(link);
        } else {
            return link;
        }
    };

    return (
        <Button asChild className={className} onClick={onClick}>
            <Link href={toLink(link)} target={isExternalLink(link) ? "_blank" : "_self"} rel="noopener noreferrer">
                {label} {icon}
            </Link>
        </Button>
    );
}
