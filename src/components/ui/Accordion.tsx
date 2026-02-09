"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/icons";
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
    <div className="px-8 py-5 bg-[#FCFCFC] my-4 rounded-lg border border-[#F2F2F2]">
      <button
        onClick={onClick}
        className="w-full text-left transition-colors group"
      >
        <Flex align="center" justify="between">
          <span className="text-xl font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition">
            {question}
          </span>
          <Flex
            align="center"
            justify="center"
            className="rounded-full bg-white shadow-sm p-2"
          >
            {isOpen ? (
              <MinusIcon size="lg" className="text-blue-600 transition-transform duration-300" />
            ) : (
              <PlusIcon size="lg" className="text-blue-600 transition-transform duration-300" />
            )}
          </Flex>
        </Flex>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed mt-4">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ id: string; question: string; answer: string }>;
}

export default function Accordion({ items }: AccordionProps) {
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
