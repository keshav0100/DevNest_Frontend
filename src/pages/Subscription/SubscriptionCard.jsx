import { Button } from "@/components/ui/button"
import { createPayment } from "@/Redux/Payment/Action";
import { useDispatch } from "react-redux"

const SubscriptionCard = ({data}) => {
  const dispatch=useDispatch();
  const handleUpgrade=()=>{
    dispatch(createPayment({
      planType:data.planType,
      price: data.price,
      jwt:localStorage.getItem("jwt"),
      })
    );
  }
  return (
    <div className="rounded-xl bg-[#e0d8d8] bg-opacity-20 shadown-[#14173b] shadow-2xl card p-5 space-y-5  w-[22rem]">
      <p className="text-xl font-extrabold">{data.planName}</p>
      <div>
        {data.planType === "ANNUALLY" ? (
          <div className="space-y-1">
            <p className="text-xl text-extrabold">
              ₹ {data.price} / {data.planType}
            </p>
            <p className="text-red-500 font-bold">-30% off</p>
          </div>
        ) : (
          <p>
            <span className="text-xl text-extrabold">₹ {data.price} / </span>
            <span className="text-md text-extrabold">{data.planType}</span>
          </p>
        )}
      </div>
      <div className="space-y-3">
        {data.features.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black font-extrabold"></div>
            <p className="font-extrabold">{item}</p>
          </div>
        ))}
      </div>
      <Button onClick={handleUpgrade} className="font-extrabold w-full">
        {data.buttonName}
      </Button>
    </div>
  );
}

export default SubscriptionCard
