"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import NotificationDropdown from "./NotificationDropdown";
import {Flex} from "@/components/ui";
import avatar from "@/assets/web/images/avatarImages/Avatar_Image_2.png";

export default function DashboardHeader({ userType }: { userType?: "customer" | "professional" }) {
  const profileHref = userType ? `/dashboard/${userType}/profile` : "/dashboard";

  return (
    <header className="bg-white border-b border-gray-200 shadow-md z-10">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src={logo} alt="InstaFix" className="h-8 w-auto" />
        </Link>

        {/* Right Actions */}
        <Flex gap="md" align="center" justify="center" className="sm:gap-4">
          <NotificationDropdown />

          {/* User Avatar */}
          <Link href={profileHref}>
            <div className="h-9 w-9 rounded-full bg-gradient-to-r from-btn-primary-from to-btn-primary-to flex items-center justify-center text-white text-sm font-medium overflow-hidden">
              <Image
                src={avatar}
                alt="User"
                width={36}
                height={36}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.textContent = "A";
                }}
              />
            </div>
          </Link>
        </Flex>
      </div>
    </header>
  );
}
