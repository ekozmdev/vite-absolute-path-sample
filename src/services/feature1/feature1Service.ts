import { getHello } from "@/services/common";

export const callHello = () => {
  return `getHello: ${getHello()}`;
};
