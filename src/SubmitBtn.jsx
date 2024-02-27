function SubmitBtn(props) {
  if (props.status == "default") {
    return (
      <button
        type="submit"
        className="contact__submit bg-neutral-300 hover:bg-neutral-200"
        form="contact_form"
      >
        Send
      </button>
    );
  }
  if (props.status == "sending") {
    return (
      <button
        type="submit"
        className="contact__submit font-semibold bg-yellow-300"
        form="contact_form"
      >
        Sending...
      </button>
    );
  }
  if (props.status == "success") {
    return (
      <button
        type="submit"
        className="contact__submit font-semibold bg-green-300"
        form="contact_form"
      >
        Sent!
      </button>
    );
  }
  if (props.status == "failed") {
    return (
      <button
        type="submit"
        className="contact__submit font-semibold bg-red-300"
        form="contact_form"
      >
        Failed!
      </button>
    );
  }
}

export default SubmitBtn;
