import { Button } from "@/components/ui/button";

export default function NormalButton({ className, label, onClick, icon }) {
  return (
    <Button type="button" className={className} onClick={onClick}>
      {icon} {label}
    </Button>
  );
}
