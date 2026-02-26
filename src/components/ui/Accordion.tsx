"use client";

import {useState} from "react";
import {PlusIcon, MinusIcon} from "@/components/icons";
import Flex from "./Flex";

interface AccordionItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}

function AccordionItem({
												 question,
												 answer,
												 isOpen,
												 onClick,
											 }: AccordionItemProps) {
	return (
		<div className="px-4 py-2 lg:px-8 lg:py-5 bg-[#FCFCFC] my-4 rounded-lg border border-[#F2F2F2]">
			<button
				onClick={onClick}
				className="w-full text-left transition-colors group"
			>
				<Flex align="center" justify="between">
          <span
						className="text-sm md:text-sm lg:text-md font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition duration-500">
            {question}
          </span>
					<Flex
						align="center"
						justify="center"
						className="rounded-full bg-white shadow-md p-2"
					>
						{isOpen ? (
							<MinusIcon
								size="lg"
								className="text-blue-600"
							/>
						) : (
							<PlusIcon
								size="lg"
								className="text-blue-600"
							/>
						)}
					</Flex>
				</Flex>
			</button>

			<div
				className={`overflow-hidden transition-all duration-500 ${
					isOpen ? "max-h-96 pb-6" : "max-h-0"
				}`}
			>
				<p className="text-sm md:text-sm lg:text-md text-colors-muted leading-relaxed mt-4">
					{answer}
				</p>
			</div>
		</div>
	);
}

interface AccordionProps {
	items: Array<{ id: string; question: string; answer: string }>;
}

export default function Accordion({items}: AccordionProps) {
	const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

	return (
		<>
			{items.map((item) => (
				<AccordionItem
					key={item.id}
					question={item.question}
					answer={item.answer}
					isOpen={openId === item.id}
					onClick={() => setOpenId(openId === item.id ? null : item.id)}
				/>
			))}
		</>
	);
}
