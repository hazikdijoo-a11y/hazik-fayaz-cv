"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { formEndpoint, needs, whatsappLink, type NeedKey } from "@/lib/services";
import { buttonClasses } from "../ui/Button";
import { NEED_EVENT } from "./NeedLink";

type Errors = Partial<Record<string, string>>;

const required: Record<string, string> = {
  name: "Please tell me your name.",
  company: "Please add your business name, or “Not started yet”.",
  email: "Please add an email so I can reply.",
  need: "Pick the closest option, or “Not sure yet”.",
  problem: "A sentence or two about the problem is enough.",
};

const inputCls =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#10182a] placeholder:text-[#7a8190] focus:outline-2 focus:outline-offset-1 focus:outline-accent";

function Field({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-[#10182a]">
        {label} {optional && <span className="font-normal text-[#5c6472]">(optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-[#5c6472]">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-[#a33a22]">
          {error}
        </p>
      )}
    </div>
  );
}

export function IntakeForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const confirmRef = useRef<HTMLHeadingElement>(null);
  const [need, setNeed] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  // Preselect from buttons on this page, or from ?need= when arriving from another page
  useEffect(() => {
    const pick = (key: string | null) => {
      const opt = needs.find((n) => n.key === key);
      if (opt) {
        setNeed(opt.value);
        setErrors((e) => ({ ...e, need: undefined }));
      }
    };
    pick(new URLSearchParams(window.location.search).get("need"));
    const onNeed = (e: Event) => pick((e as CustomEvent<NeedKey>).detail);
    window.addEventListener(NEED_EVENT, onNeed);
    return () => window.removeEventListener(NEED_EVENT, onNeed);
  }, []);

  useEffect(() => {
    if (state === "sent") confirmRef.current?.focus();
  }, [state]);

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Errors = {};
    for (const [key, msg] of Object.entries(required)) {
      if (!String(data.get(key) ?? "").trim()) next[key] = msg;
    }
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter an email address like name@example.com.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
    return !first;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (state === "sending" || !validate(form)) return;
    setState("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setNeed("");
      setState("sent");
    } catch {
      setState("failed");
    }
  }

  const clear = (name: string) => errors[name] && setErrors((e) => ({ ...e, [name]: undefined }));
  const a11y = (id: string, name: string, hint?: boolean) => ({
    id,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-error` : hint ? `${id}-hint` : undefined,
    onInput: () => clear(name),
    className: `${inputCls} ${errors[name] ? "border-[#a33a22]" : "border-[#d9d4c7]"}`,
  });

  if (state === "sent") {
    return (
      <div className="animate-fade-up rounded-3xl bg-[#faf8f4] p-7 text-[#3d4452] md:p-10">
        <p className="grid h-12 w-12 place-items-center rounded-full bg-[#e3f1e8] text-xl font-bold text-[#2f7d5a]" aria-hidden="true">
          ✓
        </p>
        <h3 ref={confirmRef} tabIndex={-1} className="font-headline mt-5 text-3xl text-[#10182a] outline-none">
          Thanks, your details are in.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed">
          I read every enquiry myself and reply by email, or on WhatsApp if you left a number.
        </p>
        <ol className="mt-5 grid list-decimal gap-1.5 pl-5 text-sm">
          <li>I reply with any questions.</li>
          <li>We have a short call to agree the first version.</li>
          <li>You get a written proposal with scope, price and timeline.</li>
        </ol>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={whatsappLink("Hi Hazik, I just sent an enquiry from your portfolio.")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("primary", "!bg-[#25D366] !text-[#0a0d16]")}
          >
            Message me on WhatsApp now<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button type="button" onClick={() => setState("idle")} className="min-h-11 text-sm font-medium text-[#10182a] underline underline-offset-4">
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-3xl bg-[#faf8f4] p-6 text-[#3d4452] md:p-8">
      <fieldset className="grid gap-5">
        <legend className="mb-4 font-mono-tight text-[11px] uppercase text-[#5c6472]">About you</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="p-name" label="Your name" error={errors.name}>
            <input type="text" autoComplete="name" maxLength={120} {...a11y("p-name", "name")} />
          </Field>
          <Field id="p-business" label="Business name" error={errors.company}>
            <input type="text" autoComplete="organization" maxLength={120} {...a11y("p-business", "company")} />
          </Field>
          <Field id="p-email" label="Email" error={errors.email}>
            <input type="email" inputMode="email" autoComplete="email" maxLength={200} placeholder="you@business.com" {...a11y("p-email", "email")} />
          </Field>
          <Field id="p-wa" label="WhatsApp number" optional>
            <input type="tel" inputMode="tel" autoComplete="tel" maxLength={20} placeholder="+91 98765 43210" {...a11y("p-wa", "whatsapp")} />
          </Field>
        </div>
        <Field id="p-site" label="Current website" optional>
          <input type="text" inputMode="url" autoComplete="url" maxLength={200} placeholder="yourbusiness.com, or leave blank" {...a11y("p-site", "website")} />
        </Field>
      </fieldset>

      <fieldset className="mt-8 grid gap-5 border-t border-[#e4e0d5] pt-7">
        <legend className="mb-4 font-mono-tight text-[11px] uppercase text-[#5c6472]">What you need</legend>
        <Field id="p-need" label="What do you need?" error={errors.need}>
          <select
            value={need}
            {...a11y("p-need", "need")}
            onChange={(e) => {
              setNeed(e.target.value);
              clear("need");
            }}
          >
            <option value="">Choose one</option>
            {needs.map((n) => (
              <option key={n.key} value={n.value}>
                {n.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="p-problem" label="What’s the problem right now?" error={errors.problem}>
          <textarea
            rows={4}
            maxLength={1500}
            placeholder="e.g. We take bookings over WhatsApp and keep missing some."
            {...a11y("p-problem", "problem")}
          />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="p-budget" label="Approximate budget" optional hint="Helps me suggest a sensible first version.">
            <select defaultValue="" {...a11y("p-budget", "budget", true)}>
              <option value="">Choose one</option>
              <option>Under ₹15,000</option>
              <option>₹15,000 – ₹30,000</option>
              <option>₹30,000 – ₹75,000</option>
              <option>₹75,000 – ₹1,50,000</option>
              <option>Above ₹1,50,000</option>
              <option>Not sure yet</option>
            </select>
          </Field>
          <Field id="p-timeline" label="Timeline" optional>
            <select defaultValue="" {...a11y("p-timeline", "timeline")}>
              <option value="">Choose one</option>
              <option>As soon as possible</option>
              <option>Within a month</option>
              <option>In 1–3 months</option>
              <option>Flexible or not sure</option>
            </select>
          </Field>
        </div>
      </fieldset>

      <input type="hidden" name="_subject" value="New project enquiry from the portfolio" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === "sending"} className={buttonClasses("primary", "!bg-[#10182a] !text-[#faf8f4]")}>
          {state === "sending" ? "Sending…" : "Send my enquiry"}
        </button>
        <span className="text-xs text-[#5c6472]">Used only to reply to you.</span>
      </div>
      <p className="mt-4 min-h-5 text-sm" role="status" aria-live="polite">
        {Object.values(errors).some(Boolean) && <span className="text-[#a33a22]">A few details are missing. Check the highlighted fields.</span>}
        {state === "failed" && (
          <span className="text-[#a33a22]">
            That didn’t go through. Please try again, or email{" "}
            <a className="underline" href="mailto:hazikdijoo@gmail.com">
              hazikdijoo@gmail.com
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
}
