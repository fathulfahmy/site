import { Hero } from "@/components/hero";
import content from "@/content/contact.json";
import { CreateContact } from "@/features/contact/components/create-contact";

export default function ContactPage() {
  return (
    <div>
      <Hero>
        <h1 className="mb-4 text-xl lg:text-2xl xl:text-3xl">{content.hero.title}</h1>
        <p className="text-lg text-neutral-500 xl:text-xl">{content.hero.subtitle}</p>
      </Hero>
      <CreateContact />
    </div>
  );
}
