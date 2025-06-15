import SubscriptionCard from "./SubscriptionCard"
import { useEffect } from "react"

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
]

const Subscription = () => {
  return (
    <div className="p-10" >
      <h1 className="text-4xl text-semibold py-5 pb-16 text-center">
        Pricing
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard data={{planName:"Free",features:freePlan,planType:"FREE",price:0,buttonName:true?"Current Plan":"Get Started"}}/>
        <SubscriptionCard data={{planName:"Monthly Paid Plan",features:monthlyPlan,planType:"MONTHLY",price:899,buttonName:true?"Current Plan":"Get Started"}}/>
        <SubscriptionCard data={{planName:"Annual Paid Plan",features:annualPlan,planType:"ANNUAL",price:7199,buttonName:true?"Current Plan":"Get Started"}}/>
      </div>
    </div>
  )
}

export default Subscription
