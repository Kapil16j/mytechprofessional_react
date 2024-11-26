
import { refundCancelPolicy } from "../components/common/helper";
import Hero from "../components/privacypolicy/Hero";
import React from "react";

const RefundCancelPolicy = () => {
  return (
    <div>
     

     
        <Hero title="  Cancellation & Refund Policy " />
        <div className="max-w-[1140px] mt-5 sm:mt-24 my-6 w-full mx-auto px-3 xl:px-0">
          <p className="text-center text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            At MyTech Professionals IT Company, we strive to provide exceptional services and
            products to our valued clients. We understand that there may be
            instances where you need to cancel an order or request a refund.
            This Cancellation & Refund Policy outlines the guidelines and
            procedures for canceling services or requesting refunds.
          </p>
          <h2 className="text-center text-primary text-xl font-bold leading-[35px] mt-4">
            Cancellation Policy:
          </h2>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            1. Service Cancellation:
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            a. If you wish to cancel a service, please contact our customer
            support team at okkcode2023@gmail.com as soon as possible.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            b. Cancellation requests must be made within 10 days from the date
            of purchase or before the service delivery, whichever comes first.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            c. Any cancellation request received after the specified time period
            may not be honored, and you may be subject to applicable fees or
            charges.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            2. Product Cancellation:
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            a. If you wish to cancel a product order, please contact our
            customer support team at MyTech@gmail.com within 10 days of
            placing the order.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            b. Product cancellations may be subject to restocking fees or other
            applicable charges as outlined in the terms and conditions of the
            specific product.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            Refund Policy:
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            1. Eligibility:
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            a. Refunds are only applicable for cancellations made within the
            specified time period mentioned in the cancellation policy.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            b. Services or products that have already been delivered, used, or
            consumed are not eligible for a refund unless otherwise specified in
            the terms and conditions.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            2. Refund Process:
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            a. To request a refund, please contact our customer support team at
            MyTech@gmail.com and provide the necessary information,
            including the order number, reason for the refund, and any
            supporting documentation.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            b. Refund requests will be reviewed and processed within 10 business
            days from the date of receipt of the request.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            c. Approved refunds will be issued using the original payment method
            unless otherwise agreed upon by both parties.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            3. Non-refundable Items:
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            a. Certain services or products may be marked as non-refundable, and
            in such cases, refunds will not be provided unless otherwise
            required by applicable laws.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            4. Partial Refunds:
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            a. In some cases, partial refunds may be provided based on the
            specific circumstances of the cancellation or refund request. The
            amount of the partial refund will be determined by MyTech IT
            Company on a case-by-case basis.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            Please note that this Cancellation & Refund Policy is subject to
            change without prior notice. It is your responsibility to review the
            policy periodically for any updates or modifications.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            If you have any questions or need further clarification regarding
            our Cancellation & Refund Policy, please contact our customer
            support team at MyTech2023@gmail.com. We will be glad to assist
            you. Cancellation & Refund Policy
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            At MyTech Professionals IT Company, we strive to provide exceptional services and
            products to our valued clients. We understand that there may be
            instances where you need to cancel an order or request a refund.
            This Cancellation & Refund Policy outlines the guidelines and
            procedures for canceling services or requesting refunds.
          </p>
          <p className=" text-black text-base font-medium mt-4 max-w-[900px] mx-auto">
            Cancellation Policy:
          </p>
          <ul className="list-decimal pl-10">
            {refundCancelPolicy.map((item, index) => (
              <li
                key={index}
                className=" text-black text-base font-medium mt-1 max-w-[900px] mx-auto"
              >
                {item.li}
              </li>
            ))}
          </ul>
        </div>
    
    </div>
  );
};

export default RefundCancelPolicy;
