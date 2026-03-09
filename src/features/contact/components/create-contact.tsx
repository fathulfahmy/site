import content from "@/content/contact.json";

export const CreateContact = () => {
  return (
    <section className="flex flex-col gap-14 lg:flex-row-reverse lg:gap-0">
      <div className="flex-2">
        <form id="contact_form" action="" method="post" className="flex flex-col gap-5">
          <label htmlFor={content.form.name.name}>
            <p className="mb-1 text-sm text-neutral-500 xl:text-base">{content.form.name.label}</p>
            <input
              type="text"
              name={content.form.name.name}
              id={content.form.name.name}
              placeholder={content.form.name.placeholder}
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
              className="w-full bg-neutral-100 p-2 outline-0 focus:border-b"
            />
          </label>
          <label htmlFor={content.form.message.name}>
            <p className="mb-1 text-sm text-neutral-500 xl:text-base">{content.form.message.label}</p>
            <textarea
              name={content.form.message.name}
              id={content.form.message.name}
              placeholder={content.form.message.placeholder}
              rows={5}
              className="w-full bg-neutral-100 p-2 outline-0 focus:border-b"
            ></textarea>
          </label>
          <button type="submit" className="block bg-black p-4 text-white xl:text-xl">
            {content.form.button}
          </button>
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
