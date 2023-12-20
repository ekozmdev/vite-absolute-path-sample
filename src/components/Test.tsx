import { callHello } from "@/services/feature1/feature1Service";

const Test = () => {
  return <p>{callHello()}</p>;
};

export default Test;
