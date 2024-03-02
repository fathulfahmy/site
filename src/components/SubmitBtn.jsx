function SubmitBtn({ status }) {
  if (status == "default") {
    return (
      <button
        type="submit"
        className="contact__submit bg-neutral-900 text-neutral-50 transition-all hover:bg-neutral-800"
        form="contact_form"
      >
        Send
      </button>
    );
  }

  if (status == "sending") {
    return (
      <button
        type="submit"
        className="contact__submit animate-pulse bg-neutral-900 text-neutral-50"
        form="contact_form"
      >
        Sending...
      </button>
    );
  }

  if (status == "success") {
    return (
      <button
        type="submit"
        className="contact__submit bg-success"
        form="contact_form"
      >
        Sent!
      </button>
    );
  }

  if (status == "resend") {
    return (
      <button
        type="submit"
        className="contact__submit bg-neutral-300 hover:bg-neutral-200"
        form="contact_form"
      >
        Resend
      </button>
    );
  }

  if (status == "failed") {
    return (
      <button
        type="submit"
        className="contact__submit bg-error"
        form="contact_form"
      >
        Failed!
      </button>
    );
  }

  if (status == "retry") {
    return (
      <button
        type="submit"
        className="contact__submit bg-neutral-300 hover:bg-neutral-200"
        form="contact_form"
      >
        Retry
      </button>
    );
  }
}

export default SubmitBtn;
