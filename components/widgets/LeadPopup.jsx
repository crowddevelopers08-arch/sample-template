"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG as C } from "@/lib/siteConfig";
import LeadForm from "@/components/ui/LeadForm";

// Lead pop-ups: after N seconds + on exit intent (desktop mouseleave / mobile back button)
export default function LeadPopup() {
  const POP = C.popup || {};
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({ title: POP.timerTitle, kicker: POP.timerKicker });
  const openRef = useRef(false);

  const close = () => {
    openRef.current = false;
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (POP.enabled === false) return;
    const mem = {};
    const ss = {
      get: (k) => {
        try { return sessionStorage.getItem(k) || mem[k] || null; } catch (_) { return mem[k] || null; }
      },
      set: (k) => {
        mem[k] = "1";
        try { sessionStorage.setItem(k, "1"); } catch (_) {}
      },
    };
    const open = (title, kicker, key) => {
      if (window.__leadDone || ss.get("lead_done") || ss.get(key) || openRef.current) return;
      ss.set(key);
      setContent({ title, kicker });
      openRef.current = true;
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    const timer = setTimeout(
      () => open(POP.timerTitle || "Book Free Consultation", POP.timerKicker, "pop_timer"),
      (POP.delaySeconds ?? 20) * 1000
    );
    const t0 = Date.now();
    const exit = () =>
      Date.now() - t0 < 5000 ? 0 : open(POP.exitTitle || "Wait! Get a Free Consultation", POP.exitKicker || "Before you go", "pop_exit");

    const onLeave = (e) => { if (e.clientY <= 0) exit(); }; // desktop: cursor leaves toward tab bar
    const onKey = (e) => { if (e.key === "Escape") close(); };
    const onPop = () => {
      if (!ss.get("pop_exit") && !ss.get("lead_done")) {
        exit();
        history.pushState({ ...history.state, p: 1 }, "");
      }
    }; // mobile: back button
    let doneTimer;
    const onDone = () => { doneTimer = setTimeout(close, 2200); };

    document.documentElement.addEventListener("mouseleave", onLeave);
    addEventListener("keydown", onKey);
    addEventListener("lead:done", onDone);
    try {
      history.pushState({ ...history.state, p: 1 }, "");
      addEventListener("popstate", onPop);
    } catch (_) {}

    return () => {
      clearTimeout(timer);
      clearTimeout(doneTimer);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      removeEventListener("keydown", onKey);
      removeEventListener("lead:done", onDone);
      removeEventListener("popstate", onPop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (POP.enabled === false) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      className={`fixed inset-0 z-[100] bg-[rgba(15,23,42,.65)] items-center justify-center p-4 ${
        isOpen ? "flex animate-fade" : "hidden"
      }`}
    >
      <div className="relative w-full max-w-[430px] max-h-[92vh] overflow-auto animate-pop">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-2 right-2.5 z-[2] w-[34px] h-[34px] rounded-full bg-[#f1f5f9] text-[20px] cursor-pointer leading-none"
        >
          &times;
        </button>
        <LeadForm id="form3" title={content.title} kicker={content.kicker} modal />
      </div>
    </div>
  );
}
