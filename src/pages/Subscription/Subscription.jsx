import { useSelector, useDispatch } from "react-redux"
import SubscriptionCard from "./SubscriptionCard"
import { useEffect } from "react"
import { getUserSubscription } from "@/Redux/Subscription/Action"

const freePlan=[
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Email Notification"
]

const annualPlan=[
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team members",
    "Advanced Reporting",
    "Priority Support"
]
const monthlyPlan=[
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team members",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Customer Support",
    "Live Monitoring"
]

const Subscription = () => {
  const dispatch = useDispatch();
  const {subscription}=useSelector(store=>store);
  
  useEffect(() => {
    // Fetch user subscription data when component loads
    dispatch(getUserSubscription(localStorage.getItem("jwt")));
  }, [dispatch]);
  
  // Debug: Log subscription data
  console.log("=== SUBSCRIPTION DEBUG ===");
  console.log("Full subscription state:", subscription);
  console.log("User subscription object:", subscription.userSubscription);
  console.log("Plan type:", subscription.userSubscription?.planType);
  console.log("Plan type type:", typeof subscription.userSubscription?.planType);
  console.log("Is loading:", subscription.loading);
  console.log("Error:", subscription.error);
  
  // Check localStorage
  const storedPlanType = localStorage.getItem("currentPlanType");
  console.log("Stored plan type from localStorage:", storedPlanType);
  console.log("All localStorage keys:", Object.keys(localStorage));
  console.log("==========================");
  
  // Determine current plan type based on available data
  let currentPlanType = "FREE"; // Default to FREE
  
  // Check if plan type is stored in localStorage (temporary solution)
  if (storedPlanType) {
    currentPlanType = storedPlanType;
    console.log("Using stored plan type:", storedPlanType);
  }
  
  if (subscription.userSubscription) {
    // If user has subscription data with planType, use it
    if (subscription.userSubscription.planType) {
      currentPlanType = subscription.userSubscription.planType;
      // Store it for future use
      localStorage.setItem("currentPlanType", currentPlanType);
    }
    
  }
  
  console.log("Final current plan type:", currentPlanType);
  
  return (
    <div className="p-10" >
      <h1 className="text-4xl text-semibold py-5 pb-16 text-center">
        Pricing
      </h1>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard 
        data={{planName:"Free",
        features:freePlan,
        planType:"FREE",
        price:0,
        buttonName:currentPlanType === "FREE" ? "Current Plan" : "Get Started"}}/>
        <SubscriptionCard 
        data={{planName:"Monthly Paid Plan",
        features:monthlyPlan,
        planType:"MONTHLY",
        price:899,
        buttonName:currentPlanType === "MONTHLY" ? "Current Plan" : "Get Started"}}/>
        <SubscriptionCard 
        data={{planName:"Annual Paid Plan",
        features:annualPlan,
        planType:"ANNUALLY",
        price:7199,
        buttonName:currentPlanType === "ANNUALLY" ? "Current Plan" : "Get Started"}}/>
      </div>
    </div>
  )
}

export default Subscription
