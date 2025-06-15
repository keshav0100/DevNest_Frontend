const SubscriptionCard = ({data}) => {
  return (
    <div className='rounded-xl bg-[#e0d8d8] bg-opacity-20 shadown-[#14173b] shadow-2xl card p-5 space-y-5  w-[18rem]'>
      <p>
        {data.planName}
        
      </p>
    </div>
  )
}

export default SubscriptionCard
