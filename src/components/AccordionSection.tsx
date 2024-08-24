import Accordion from "./Accordion";

const AccordionSection = () => {
  const items = [
    {
      sub_title: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      sub_title: "02",
      title: "Research and Strategy Development",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      sub_title: "03",
      title: "Implementation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      sub_title: "04",
      title: "Monitoring and Optimization",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      sub_title: "05",
      title: "Reporting and Communication",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      sub_title: "06",
      title: "Continual Improvement",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];

  return (
    <div className="lg:my-16 my-8 mx-4">
      <div className="my-16">
        <div className="flex flex-wrap items-center justify-center md:gap-8 lg:gap-10 gap-6">
          {items.map((element) => (
            <Accordion sub_title={element.sub_title} title={element.title}>
              {element.description}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
