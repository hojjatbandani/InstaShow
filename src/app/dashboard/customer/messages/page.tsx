"use client";

import {useState} from "react";
import Image from "next/image";
import {Flex} from "@/components/ui";
import {SendIcon, AttachmentIcon} from "@/components/icons";
import avatar1 from "@/assets/web/images/avatarImages/Avatar_Image_2.png";

interface Conversation {
	id: string;
	name: string;
	role: string;
	lastMessage: string;
	time: string;
	avatar: typeof avatar1;
}

interface Message {
	id: string;
	text: string;
	time: string;
	sender: "me" | "other";
}

const conversations: Conversation[] = [
	{
		id: "1",
		name: "BrightBuild Renovations",
		role: "Renovation Contractor",
		lastMessage: "We've reviewed your request and can...",
		time: "10:24",
		avatar: avatar1,
	},
	{
		id: "2",
		name: "RapidFlow Plumbing",
		role: "Plumbing Inspection",
		lastMessage: "Please confirm the address details.",
		time: "10:24",
		avatar: avatar1,
	},
	{
		id: "3",
		name: "BrightBuild Renovations",
		role: "Renovation Contractor",
		lastMessage: "We can reschedule the appointment f...",
		time: "10:24",
		avatar: avatar1,
	},
	{
		id: "4",
		name: "SafeGuard Security",
		role: "Security System Installation",
		lastMessage: "Your system has been successfully ins...",
		time: "10:24",
		avatar: avatar1,
	},
];

const chatMessages: Message[] = [
	{
		id: "1",
		text: "Hi, I wanted to confirm the project start date.",
		time: "10:24",
		sender: "me",
	},
	{
		id: "2",
		text: "We're planning to begin on March 25th.",
		time: "10:42",
		sender: "other",
	},
	{
		id: "3",
		text: "Great! Do you need any specific materials or do you provide everything?",
		time: "10:45",
		sender: "me",
	},
	{
		id: "4",
		text: "We provide all the main materials. Just let us know if you have any specific items in mind.",
		time: "10:50",
		sender: "other",
	},
	{
		id: "5",
		text: "We provide all the main materials. Just let us know if you have any specific items in mind.",
		time: "10:51",
		sender: "me",
	},
	{
		id: "6",
		text: "We provide all the main materials. Just let us know if you have any specific items in mind.",
		time: "10:54",
		sender: "other",
	},
];

export default function MessagesPage() {
	const [activeConversation, setActiveConversation] = useState("1");
	const [messageInput, setMessageInput] = useState("");
	const [showChat, setShowChat] = useState(false);

	const activeChat = conversations.find((c) => c.id === activeConversation);

	const handleConversationSelect = (id: string) => {
		setActiveConversation(id);
		setShowChat(true);
	};

	return (
		<div className="flex flex-col flex-1 min-h-0">
			{/* Page Header */}
			<Flex gap="md" direction="col" className="bg-white p-4 md:p-6 border-b border-gray-200 text-colors-primary shrink-0">
				<h1 className="text-xl md:text-2xl font-bold">Messages</h1>
				<p className="text-sm">Chat with professionals about your bookings</p>
			</Flex>

			{/* Chat Container */}
			<div className="flex flex-1 min-h-0 rounded-xl overflow-hidden bg-white">

				{/* Conversations List */}
				<div className={`${showChat ? "hidden md:flex" : "flex"} w-full md:w-[280px] lg:w-[380px] border-r border-gray-200 flex-col min-h-0 `}>
					<div className="p-4 shrink-0">
						<h3 className="text-base font-semibold text-colors-primary">Conversations</h3>
					</div>
					<div className="flex-1 overflow-y-auto px-3">
						{conversations.map((conv) => (
							<div key={conv.id} className="py-2 first:pt-0 last:border-b-0 border-b border-b-gray-200">
								<button
									onClick={() => handleConversationSelect(conv.id)}
									className={`w-full text-left p-3 md:p-4 transition rounded-lg ${
										activeConversation === conv.id
											? "bg-[#EEF3FE] border-r-[3px] border-r-[#2563EB]"
											: "hover:bg-gray-100 border-r-[3px] border-r-white"
									}`}
								>
									<Flex align="start" gap="sm">
										<Image
											src={conv.avatar}
											alt={conv.name}
											width={44}
											height={44}
											className="rounded-full shrink-0"
										/>
										<div className="flex-1 min-w-0">
											<Flex justify="between" align="center" className="mb-0.5">
												<h4 className="text-sm font-semibold text-colors-primary truncate">
													{conv.name}
												</h4>
												<span className="text-xs text-gray-400 shrink-0 ml-2">{conv.time}</span>
											</Flex>
											<p className="text-xs text-gray-500 mb-1">{conv.role}</p>
											<p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
										</div>
									</Flex>
								</button>
							</div>
						))}
					</div>
				</div>

				{/* Chat Area */}
				<div className={`${showChat ? "flex" : "hidden md:flex"} flex-1 flex-col min-h-0`}>
					{/* Chat Header */}
					{activeChat && (
						<div className="p-4 border-b border-gray-200 flex items-center gap-3 shrink-0">
							<button
								className="md:hidden p-1 text-gray-500 hover:text-gray-700 transition"
								onClick={() => setShowChat(false)}
								aria-label="Back to conversations"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M15 18l-6-6 6-6"/>
								</svg>
							</button>
							<div>
								<h3 className="text-base font-semibold text-colors-primary">{activeChat.name}</h3>
								<p className="text-xs text-gray-500">{activeChat.role}</p>
							</div>
						</div>
					)}

					{/* Messages — scrolls internally */}
					<div className="flex-1 overflow-y-auto p-3 space-y-4 bg-[#F1F1F1]">
						{chatMessages.map((msg) => (
							<div
								key={msg.id}
								className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
							>
								<div
									className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl ${
										msg.sender === "me"
											? "bg-[#2563EB] text-white rounded-br-md"
											: "bg-white text-colors-primary border border-gray-200 rounded-bl-md"
									}`}
								>
									<p className="text-sm">{msg.text}</p>
									<p className={`text-xs mt-1 text-right ${msg.sender === "me" ? "text-blue-200" : "text-gray-400"}`}>
										{msg.time}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Message Input — pinned to bottom */}
					<div className="p-3 md:p-4 border-t border-gray-200 bg-white shrink-0">
						<Flex align="center" gap="sm">
							<button className="p-2 text-gray-400 hover:text-gray-600 transition shrink-0">
								<AttachmentIcon size="md"/>
							</button>
							<input
								type="text"
								value={messageInput}
								onChange={(e) => setMessageInput(e.target.value)}
								placeholder="What do you need?"
								className="flex-1 min-w-0 px-3 md:px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3E50F7]/20 focus:border-[#3E50F7]"
							/>
							<button className="shrink-0 px-3 md:px-5 py-2.5 bg-gradient-to-r from-btn-primary-from to-btn-primary-to text-white rounded-lg text-sm font-light hover:bg-[#3344D9] transition flex items-center gap-2">
								<span className="hidden sm:inline">Send</span>
								<SendIcon size="sm" className="text-white"/>
							</button>
						</Flex>
					</div>
				</div>
			</div>
		</div>
	);
}
