"use client";

import content from "@/content/contact.json";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect, SubmitEvent } from "react";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

type SendStatus = "default" | "sending" | "retry" | "success" | "error";

export const CreateContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sendStatus, setSendStatus] = useState<SendStatus>("default");
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (sendStatus === "success" || sendStatus === "error") {
      const timer = setTimeout(() => {
        if (sendStatus === "success") {
          setSendStatus("default");
          formRef.current?.reset();
          setIsSent(true);
        } else if (sendStatus === "error") {
          setSendStatus("retry");
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sendStatus]);

  const sendEmail = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || sendStatus === "sending") return;

    setSendStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
      )
      .then((response) => {
        setSendStatus("success");
        console.log("EmailJS:!", response.status, response.text);
      })
      .catch((error) => {
        setSendStatus("error");
        console.error("EmailJS:", error);
      });
  };

  const sendButton = {
    sending: { text: "Sending", color: "bg-neutral-400", disabled: true },
    success: { text: "Sent", color: "bg-emerald-700", disabled: true },
    error: { text: "Failed", color: "bg-red-700", disabled: true },
    retry: { text: "Try again", color: "bg-neutral-900", disabled: false },
    default: { text: "Send", color: "bg-neutral-900", disabled: false },
  }[sendStatus];

  return (
    <section className="flex flex-col gap-14 lg:flex-row-reverse lg:gap-0">
      <div className="flex-2">
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
          <label htmlFor={content.form.name.name}>
            <p className="mb-1 text-sm text-neutral-500 xl:text-base">{content.form.name.label}</p>
            <input
              type="text"
              name={content.form.name.name}
              id={content.form.name.name}
              placeholder={content.form.name.placeholder}
              required
              className="w-full bg-neutral-100 p-2 outline-0 focus:border-b"
            />
          </label>
          <label htmlFor={content.form.email.name}>
            <p className="mb-1 text-sm text-neutral-500 xl:text-base">{content.form.email.label}</p>
            <input
              type="email"
              name={content.form.email.name}
              id={content.form.email.name}
              placeholder={content.form.email.placeholder}
              required
              className="w-full bg-neutral-100 p-2 outline-0 focus:border-b"
            />
          </label>
          <label htmlFor={content.form.message.name}>
            <p className="mb-1 text-sm text-neutral-500 xl:text-base">{content.form.message.label}</p>
            <textarea
              name={content.form.message.name}
              id={content.form.message.name}
              placeholder={content.form.message.placeholder}
              required
              rows={5}
              className="w-full bg-neutral-100 p-2 outline-0 focus:border-b"
            ></textarea>
          </label>

          <div className="flex flex-col gap-2">
            <p
              className={`text-sm font-semibold transition-opacity ${
                isSent && sendStatus === "default" ? "visible" : "invisible"
              }`}
            >
              Message received! Send another?
            </p>
            <button
              type="submit"
              disabled={sendButton.disabled}
              className={`block p-4 text-white transition-all xl:text-xl ${sendButton.color} ${
                sendStatus === "sending" ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {sendButton.text}
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <div className="text-lg xl:text-xl">
          <p className="mb-0.5">{content.contact.title}</p>
          <p className="text-neutral-500">{content.contact.email}</p>
        </div>
      </div>
    </section>
  );
};
