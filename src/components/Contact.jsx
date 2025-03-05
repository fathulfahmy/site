import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SubmitBtn from "./SubmitBtn";

function Input({ id, label, type, placeholder }) {
  return (
    <div className="mb-8 lg:mb-12">
      <label htmlFor={id} className="mb-1">
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
      <div className="block p-4 lg:p-8">
        <Input id="user_name" type="text" label="Name" placeholder="John Doe" />
        <Input
          id="user_email"
          type="email"
          label="Email"
          placeholder="john@doe.com"
        />
        <div className=" mb-8 lg:mb-12">
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
    <div className="p-4 max-lg:text-center lg:p-8">
      <h3 className="mb-6">Socials</h3>
      <SocialBtn
        href="https://www.linkedin.com/in/fathulfahmy/"
        platform="LinkedIn"
      />
      <SocialBtn href="https://github.com/fathulfahmy" platform="GitHub" />
      <SocialBtn
        href="https://www.behance.net/fathulfahmy"
        platform="Behance"
      />
    </div>
  );
}

function Contact() {
  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <Form />
      </div>
      <div className="lg:col-span-4 lg:border-l">
        <Socials />
      </div>
    </div>
  );
}
export default Contact;
