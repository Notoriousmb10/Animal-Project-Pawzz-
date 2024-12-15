import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
} from "../ui/select";

const DropDown = ({ placeholder, onChange, className, data, value }) => (
    <Select onValueChange={onChange}>
        <SelectTrigger aria-label="Animal"  className={className}>
            <SelectValue placeholder={placeholder} value={value || ""} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                {data.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
                <SelectSeparator />
                <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
);

export default DropDown;