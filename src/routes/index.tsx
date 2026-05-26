import { createFileRoute } from "@tanstack/react-router";
import CreatableSelect from "@/components/inputs/createable-select";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="flex min-h-svh p-6">
			<div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
				<div>
					<h1 className="font-medium">Project ready!</h1>
					<p>You may now add components and start building.</p>
					<p>We&apos;ve already added the button component for you.</p>
					<Button className="mt-2">Button</Button>
				</div>
				<Card>
					<CardHeader>
						<CardTitle className="font-heading">Card Title</CardTitle>
						<CardDescription>
							This is a description of the card.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Input placeholder="Input" className="mb-4" />
						<CreatableSelect
							options={[
								{ value: "option1", label: "Option 1" },
								{ value: "option2", label: "Option 2" },
								{ value: "option3", label: "Option 3" },
							]}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
