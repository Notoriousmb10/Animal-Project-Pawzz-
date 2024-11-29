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


const DropDown = ({placeholder}) => (
    <Select>
        <SelectTrigger aria-label="Animal">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Animals</SelectLabel>
                <SelectItem value="dog">Dog</SelectItem>
                <SelectItem value="cat">Cat</SelectItem>
                <SelectItem value="bird">Bird</SelectItem>
                <SelectItem value="fish">Fish</SelectItem>
                <SelectSeparator />
                <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
);

export default DropDown;