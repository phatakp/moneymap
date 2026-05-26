/** biome-ignore-all lint/a11y/useSemanticElements: <ignore> */
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import { Field } from "@/components/ui/field";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Option = {
	value: string;
	label: string;
};

type Props = {
	options: Option[];
};

const Example = ({ options }: Props) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [items, setItems] = useState(options);
	const [search, setSearch] = useState("");

	const handleCreate = () => {
		if (search && !items.find((i) => i.value === search)) {
			setItems([...items, { value: search.toLowerCase(), label: search }]);
			setValue(search);
			setOpen(false);
			setSearch("");
		}
	};

	return (
		<Field
			// data-invalid={isInvalid}
			className="transition-all duration-500 ease-in-out"
		>
			<Popover onOpenChange={setOpen} open={open}>
				<PopoverTrigger asChild>
					<Button
						aria-expanded={open}
						className="w-full justify-between"
						role="combobox"
						variant="outline"
					>
						{value || "Select or create tag..."}
						<ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-full p-0">
					<Command>
						<CommandInput
							onValueChange={setSearch}
							placeholder="Search or create..."
							value={search}
						/>
						<CommandList>
							<CommandEmpty>
								<Button
									className="w-full justify-start"
									onClick={handleCreate}
									variant="ghost"
								>
									<Plus className="mr-2 size-4" />
									Create "{search}"
								</Button>
							</CommandEmpty>
							<CommandGroup>
								{options.map((item) => (
									<CommandItem
										key={item.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
										value={item.value}
									>
										<Check
											className={cn(
												"mr-2 size-4",
												value === item.value ? "opacity-100" : "opacity-0",
											)}
										/>
										{item.label}
									</CommandItem>
								))}
							</CommandGroup>
							{search &&
								!items.find((i) => i.value === search) &&
								items.length > 0 && (
									<>
										<CommandSeparator />
										<CommandGroup>
											<CommandItem onSelect={handleCreate}>
												<Plus className="mr-2 size-4" />
												Create "{search}"
											</CommandItem>
										</CommandGroup>
									</>
								)}
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</Field>
	);
};

export default Example;
