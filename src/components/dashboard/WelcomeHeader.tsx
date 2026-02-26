import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import type {WelcomeHeaderProps} from "@/types/dashboard";

export default function WelcomeHeader({name, actionLabel, actionHref, actionIcon: Icon}: WelcomeHeaderProps) {
	return (
		<Flex direction="col" smDirection="row" align="start" justify="between" gap="md"
					className="mb-6 sm:mb-8 sm:items-center">
			<Flex direction="row" align="center" justify="start" gap="sm">
				<h1 className="text-xl sm:text-2xl font-semibold text-colors-primary">
					Hi, {name} 👋
				</h1>
				<p className="text-sm text-colors-muted mt-0.5">
					Welcome back to InstaFix
				</p>
			</Flex>
			{/*<div>*/}
				<Button
					href={actionHref}
					variant="primary"
					size="sm"
					className="gap-2 !rounded-lg sm:!h-11 sm:!px-5 sm:!text-[13px]"
				>
					<Icon size="sm"/>
					{actionLabel}
				</Button>
			{/*</div>*/}

		</Flex>
	);
}
