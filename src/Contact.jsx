import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import SubmitBtn from "./SubmitBtn"

function Contact() {
  // emailJS
  const YOUR_SERVICE_ID = "service_vq8b86a";
  const YOUR_TEMPLATE_ID = "contact_form";
  const YOUR_PUBLIC_KEY = "6IeDkt_ZMpydWNUp9";

  const form = useRef();

  const sendEmail = (e) => {
    setStatus("sending");
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");

          setTimeout(() => {
            setStatus("default");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("failed");

          setTimeout(() => {
            setStatus("default");
          }, 3000);
        }
      );
  };

  const [status, setStatus] = useState("default");
  return (
    <>
      <div className="lg:grid grid-cols-12">
        <div className="col-span-8">
          <form
            id="contact_form"
            className="flex flex-col px-[16px] lg:px-[40px] py-[64px] lg:py-[64px] gap-[64px]"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <label htmlFor="user_name" className="contact__heading">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="John Doe"
                className="contact__input"
                required
              />
            </div>
            <div>
              <label htmlFor="user_email" className="contact__heading">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="john@doe.com"
                className="contact__input"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="contact__heading">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Hello Fathul ... "
                className="contact__input"
                required
              ></textarea>
            </div>
          </form>
          {/* <button
            type="submit"
            className="w-full h-[64px] border-y-[1px] bg-neutral-300 hover:bg-neutral-200"
            form="contact_form"
          >
            Send
          </button> */}
          <SubmitBtn status={status} />
        </div>
        <div className="col-span-1 lg:border-b-[1px] lg:border-l-[1px] "></div>
        <div className="border-b-[1px] col-span-3 flex flex-col gap-[32px] py-[64px] max-lg:px-[16px] lg:pr-[40px] max-lg:text-center">
          <h3 className="font-semibold tracking-tight">Socials</h3>
          <a
            href="https://www.behance.net/fathulfahmy"
            target="_blank"
            className="underline hover:no-underline"
          >
            Behance
          </a>
          <a
            href="https://github.com/fathulfahmy"
            target="_blank"
            className="underline hover:no-underline"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/fathulfahmy"
            target="_blank"
            className="underline hover:no-underline"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/fathulfahmy/"
            target="_blank"
            className="underline hover:no-underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
export default Contact;
