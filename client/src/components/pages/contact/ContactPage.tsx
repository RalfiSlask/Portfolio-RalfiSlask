import BuiltWith from './ui/BuiltWith';
import ContactForm from './ContactForm';
import Copyright from './ui/Copyright';
import ContactIntro from './ui/ContactIntro';

const ContactPage = () => {
  return (
    <>
      <div className="relative w-full flex h-full flex-col gap-40 items-center">
        <div className="max-w-[1200px] w-full flex-col gap-40 items-center">
          <div className="flex flex-col gap-10 items-center sm:items-center xl:items-start">
            <ContactIntro />

            <div>
              <ContactForm />
            </div>
          </div>
          <BuiltWith />
        </div>
        <div className="flex flex-col gap-40">
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
