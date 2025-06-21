import { Card } from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserSubscription } from "@/Redux/Subscription/Action";

const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subscription } = useSelector(store => store);
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("planType");
  
  const [subscriptionDates, setSubscriptionDates] = useState({
    startDate: null,
    endDate: null
  });

  useEffect(() => {
    // Only fetch user subscription data after payment success
    // Don't call upgrade again as payment is already completed
    dispatch(getUserSubscription(localStorage.getItem("jwt")));
  }, []);

  useEffect(() => {
    if (planType) {
      const startDate = new Date();
      let endDate = new Date();
      
      if (planType === "MONTHLY") {
        endDate.setMonth(endDate.getMonth() + 1);
      } else if (planType === "ANNUALLY") {
        endDate.setFullYear(endDate.getFullYear() + 1);
      }
      
      const formattedStartDate = startDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const formattedEndDate = endDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      setSubscriptionDates({
        startDate: formattedStartDate,
        endDate: formattedEndDate
      });
      
      // Console logging for debugging
      console.log("=== Subscription Details ===");
      console.log("Plan Type:", planType);
      console.log("Start Date:", formattedStartDate);
      console.log("End Date:", formattedEndDate);
      console.log("===========================");
    }
  }, [planType]);

  return (
    <div className="flex justify-center">
      <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <CheckCircledIcon className="h-9 w-9 text-green-600" />
          <p className="text-2xl font-extrabold">Plan upgraded successfully!</p>
        </div>
        <div className="space-y-3 text-center">
          <div>
            <p className="text-green-500 font-semibold">Subscription Start Date:</p>
            <p className="text-gray-700">{subscriptionDates.startDate || "Loading..."}</p>
          </div>
          <div>
            <p className="text-red-500 font-semibold">Subscription End Date:</p>
            <p className="text-gray-700">{subscriptionDates.endDate || "Loading..."}</p>
          </div>
          <div>
            <p className="font-semibold">Plan Type:</p>
            <p className="text-blue-600 font-bold">{planType || "Loading..."}</p>
          </div>
        </div>
        <Button onClick={() => navigate("/")} className="font-extrabold">
          Go to Dashboard
        </Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
