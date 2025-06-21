import api from "@/config/api"

export const createPayment=async({planType,jwt,price})=>{
try {
    let finalPrice = price;
    
    // Apply 30% discount for annual plans
    if (planType === "ANNUALLY") {
        const originalPrice = 7199;
        finalPrice = Math.round(originalPrice * 0.7); // 30% discount
        console.log("Annual plan - Original price:", originalPrice, "Discounted price:", finalPrice);
    }
    
    const {data}=await api.post(`/api/payments/${planType}`, {
        amount: finalPrice
    })
    if(data.payment_link_url)
        window.location.href=data.payment_link_url;
} catch (error) {
  console.log("Error in payments",error);
}}