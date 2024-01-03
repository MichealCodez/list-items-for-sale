import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((value) => (
        <ServiceCard key={value.label} {...value} />
      ))}
    </div>
  );
};

export default Services;
