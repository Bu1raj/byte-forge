import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

import React from "react";

export default function SelectMenu({topic , options , setState}) {
  return (
    <Select onValueChange={(value)=> setState(value)}>
      <SelectTrigger className="w-[180px] rounded">
        <SelectValue placeholder={`${options[0]}`} />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
            {
                options.map((option , index) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                ))
            }
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
