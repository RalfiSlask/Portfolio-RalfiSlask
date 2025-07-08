import ContactForm from './ContactForm';
import ContactIntro from './ui/ContactIntro';

const ContactPage = () => {
  return (
    <>
      <div className="grid-4812 grid-fill-4812 w-full  place-items-center text-white ">
        <div className="flex flex-col max-w-[400px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[800px] col-span-4 md:col-span-8 xl:col-span-12 w-full gap-6 sm:gap-10 place-items-center xl:place-items-start">
          <ContactIntro />
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
