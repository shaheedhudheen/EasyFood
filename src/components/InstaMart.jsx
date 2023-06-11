import { useState } from "react";
import up from "../assets/up.svg";
import down from "../assets/down.svg";

const Panel = ({ title, description, isVisible, onShow, onHide }) => {
  return (
    <section className="py-4">
      <div className="flex items-end">
        <p className="text-2xl font-semibold">{title}</p>
        {isVisible ? (
          <img src={up} alt="up arrow" onClick={onHide} />
        ) : (
          <img src={down} alt="down arrow" onClick={onShow} />
        )}
      </div>

      {isVisible && <p className="text-lg font-medium py-2">{description}</p>}
    </section>
  );
};

const InstaMart = () => {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <p className="text-2xl font-medium text-center">About InstaMart</p>

      <Panel
        title="What is Instamart and how does it work?"
        description=" Instamart is an instant grocery delivery service powered by, delivering groceries to your doorstep in just 15-30 minutes. You can order any time from 6am - 3am and get daily essentials, fresh fruits & veggies, dairy, bread & eggs, snacks & indulgences, and emergency supplies"
        isVisible={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        onHide={() => setActiveIndex()}
      />
      <Panel
        title="What are the benefits of ordering from Instamart?"
        description="You can get groceries delivered in minutes, just as fast as we deliver food.
You can order from supermarkets near & far away from you, with a less than 2 hour delivery time.
You can explore collections like Best Safety Standards, Veg Only, Healthy Food, Pocket Friendly, Premium, and more.
You can save big with our best offers, get freebies, cashbacks, discounts, and other deals sponsored by us, and our host of restaurant, bank, and online wallet partners3.
You can also add a tip for your Delivery Partner with your order."
        isVisible={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        onHide={() => setActiveIndex()}
      />
      <Panel
        title="What are the delivery timings and charges of Instamart?"
        description="The delivery timings of Instamart are from 6am - 3am. The delivery charges vary depending on the distance and the order value. You can check the delivery charges on the app before placing your order"
        isVisible={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
        onHide={() => setActiveIndex()}
      />

      <p className="font-bold text-6xl text-center">Coming Sooon......</p>
    </div>
  );
};

export default InstaMart;
