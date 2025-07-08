const ContactIntro = () => {
  return (
    <>
      <h2 className="text-[4rem]">
        Contact <span className="text-blueColor">.</span>
      </h2>
      <div className="flex">
        <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] w-full sm:max-w-[500px] md:max-w-[600px] leading-7 sm:leading-9">
          Have a project in mind or just want to chat about software development? Feel free to reach out below. Your
          message is <span className="text-blueColor">important to me</span>, and I'll make sure to get back to you as
          soon as possible.
        </p>
      </div>
    </>
  );
};

export default ContactIntro;
