import { Input, Textarea, Radio } from "@material-tailwind/react";
import contactUsIllustration from "../assets/Illustration_contact_us.png";
import Button from "./Button.tsx";
import { TypeEnum } from "../Type.ts";

function ContactUsSection() {
  return (
    <>
      <div className="bg-neutral rounded-3xl lg:my-16 my-8 mx-4">
        <div className="flex">
          <div className="w-full">
            <div className="md:w-128 w-full px-7 m-auto md:m-0 my-10">
              <div className="flex flex-col gap-6 md:ml-24 md:mt-14">
                <div className="flex">
                  <div className="w-1/2">
                    <Radio
                      name="type"
                      label="Say Hi"
                      color="green"
                      defaultChecked
                    />
                  </div>
                  <div className="w-1/2">
                    <Radio name="type" label="Get a Quote" color="green" />
                  </div>
                </div>

                <Input label="Name" />
                <Input label="Email" required />
                <Textarea label="Message" />
                <div className="md:block hidden">
                  <Button title="Send a message" type={TypeEnum.Primary} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit">
            <img src={contactUsIllustration} className="md:block hidden" alt="contact us illustration" />
          </div>
        </div>
      </div>
      <div className="lg:my-16 my-8 mx-4 md:hidden block">
        <Button title="Send a message" type={TypeEnum.Primary} />
      </div>
    </>
  );
}

export default ContactUsSection;
