import { ComponentType, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const withCart = (IncomingComponent: ComponentType<any>) => {
  return function OutgoingComponent(p: any) {
    const data = useContext(CartContext);
    return <IncomingComponent {...p} {...data} />;
  };
};
export default withCart;
