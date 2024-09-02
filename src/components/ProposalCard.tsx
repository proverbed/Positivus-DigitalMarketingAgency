import Button from "./Button";
import proposal from "../assets/proposal.png";

function ProposalCard() {
  return (
    <div className="m-16 relative max-[425px]:m-2 ">
      <div className="flex flex-row rounded-3xl bg-neutral px-15 py-15 max-[425px]:px-8 max-[425px]:py-8">
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl sm:text-3xl font-medium pb-6">
            Let's make things happen
          </h1>
          <p className="pb-6">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <div className="lg:w-fit w-full">
            <Button title="Get your free proposal" />
          </div>
        </div>
        <div className="md:block hidden">
          <img
            src={proposal}
            alt="propsal illustration"
            className="w-110 object-contain absolute -top-6 md:-right-28 lg:right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default ProposalCard;
