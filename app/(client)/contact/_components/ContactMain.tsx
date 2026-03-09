import { ContactForm } from "./ContactForm";
import { OfficeInfo } from "./OfficeInfo";

export function ContactMain() {
  return (
    <section className="py-24 px-6 md:px-10">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          <ContactForm />
          <OfficeInfo />
        </div>
      </div>
    </section>
  );
}