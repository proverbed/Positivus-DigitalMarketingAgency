import icon from "../assets/icon-white.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedIn.png";
import twitterIcon from "../assets/twitter.png";
import Button from "./Button.tsx";
import navItems from "../constants/index.ts";
import { TypeEnum } from "../Type.ts";

function Footer() {
  return (
    <div className="bg-primary md:rounded-t-3xl rounded-none text-white">
      <div className="flex md:justify-between md:flex-row flex-col items-center md:mx-14 md:pt-14 mx-5 md:pb-14 pb-9 pt-12">
        <div className="flex items-center flex-shrink-0">
          <img className="h-5 w-5 mr-2" src={icon} alt="Logo" />
          <span className="text-2xl tracking-tight font-medium">Positivus</span>
        </div>
        <div className="pt-9 md:pt-0">
          <ul className="flex md:flex-row flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.id} className="md:underline no-underline">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-row gap-4 pt-9 md:pt-0 hidden md:flex">
          <img src={linkedinIcon} alt="linkedIn icon" className="w-7 h-7" />
          <img src={facebookIcon} alt="facebook icon" className="w-7 h-7" />
          <img src={twitterIcon} alt="twitter icon" className="w-7 h-7" />
        </div>
      </div>

      <div className="flex mx-5 md:mx-14 md:flex-row flex-col md:pb-14 pb-9">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-secondary rounded-md w-fit text-black mb-7 px-1">
              Contact us:
            </div>
            <div className="mb-5">Email: info@positivus.com</div>

            <div className="mb-5">Phone: 555-567-8901</div>

            <div className="mb-0">Address: 1234 Main St</div>
            <div>Moonstone City, Stardust State 12345</div>
          </div>
        </div>
        <div className="bg-[#292A32] rounded-2xl w-full md:w-1/2 md:px-10 p-7 md:mt-0 mt-9">
          <div className="flex items-center h-full gap-5 md:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <input
                className="bg-[#292A32] border-white border rounded-xl p-4 w-full"
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-1/2 text-xs h-14">
              <Button title="Subscribe to news" type={TypeEnum.Secondary} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pb-9 md:hidden">
        <div className="flex flex-row gap-4">
          <img src={linkedinIcon} alt="linkedIn icon" className="w-7 h-7" />
          <img src={facebookIcon} alt="facebook icon" className="w-7 h-7" />
          <img src={twitterIcon} alt="twitter icon" className="w-7 h-7" />
        </div>
      </div>

      <div className="border-t border-white md:mx-14 mx-5 md:pt-14 pt-9 pb-12">
        <div className="flex md:flex-row flex-col items-center">
          <div className="">© 2024 Positivus. All Rights Reserved.</div>
          <div className="md:ml-14 ml-0 md:pt-0 pt-5">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
