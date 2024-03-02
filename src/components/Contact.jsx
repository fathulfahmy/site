import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SubmitBtn from "./SubmitBtn";

function Input({ id, label, type, placeholder }) {
  return (
    <div className="mb-8 md:mb-12">
      <label htmlFor={id} className="pb-1">
        {label}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        className="input"
        required
      />
    </div>
  );
}

function Form() {
  // emailJS
  const YOUR_SERVICE_ID = "service_vq8b86a";
  const YOUR_TEMPLATE_ID = "contact_form";
  const YOUR_PUBLIC_KEY = "6IeDkt_ZMpydWNUp9";

  const form = useRef();

  const [status, setStatus] = useState("default");

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
            form.current.reset();
            setStatus("resend");
          }, 3000);
        },
        (error) => {
          console.log("FAILED!", error.text);
          setStatus("failed");

          setTimeout(() => {
            setStatus("retry");
          }, 3000);
        },
      );
  };

  return (
    <form id="contact_form" ref={form} onSubmit={sendEmail}>
      <div className="block p-4 md:p-8">
        <Input id="user_name" type="text" label="Name" placeholder="John Doe" />
        <Input
          id="user_email"
          type="email"
          label="Email"
          placeholder="john@doe.com"
        />
        <div className=" mb-8 md:mb-12">
          <label htmlFor="message" className="">
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Hello Fathul ..."
            className="input"
            required
          ></textarea>
        </div>
      </div>
      <SubmitBtn status={status} />
    </form>
  );
}

function SocialBtn({ href, platform }) {
  return (
    <div className="mb-4">
      <a href={href} target="_blank">
        <div className="button w-1/2 text-center">{platform}</div>
      </a>
    </div>
  );
}

function Socials() {
  return (
    <div className="p-4 max-md:text-center md:p-8">
      <h3 className="mb-6">Socials</h3>
      <SocialBtn
        href="https://www.behance.net/fathulfahmy"
        platform="Behance"
      />
      <SocialBtn href="https://github.com/fathulfahmy" platform="GitHub" />
      <SocialBtn
        href="https://instagram.com/fathulfahmy"
        platform="Instagram"
      />
      <SocialBtn
        href="https://www.linkedin.com/in/fathulfahmy/"
        platform="LinkedIn"
      />
    </div>
  );
}

function Contact() {
  return (
    <div className="md:grid md:grid-cols-12">
      <div className="md:col-span-8">
        <Form />
      </div>
      <div className="md:col-span-4 md:border-l">
        <div className="md:col-start-1">
          <Socials />
        </div>
      </div>
    </div>
  );
}
export default Contact;
