"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(20);

    const t1 = setTimeout(() => setProgress(55), 150);
    const t2 = setTimeout(() => setProgress(80), 400);
    const t3 = setTimeout(() => setProgress(95), 700);
    const t4 = setTimeout(() => {
      setProgress(100);
      const t5 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(t5);
    }, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#3E50F7] to-[#0062FF] rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
