import AssistantIcon from "@/assets/web/images/svg/assistant.svg";

export default function FloatingAssistant() {
  return (
    <div className="fixed bg-white rounded-full w-8 h-8 md:w-12 md:h-12 p-1.5 md:p-2 right-2 md:right-[20px] bottom-2 md:bottom-[20px] z-50 shadow-lg transform hover:-translate-y-2 duration-200">
      <a href="#assistant">
        <AssistantIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
