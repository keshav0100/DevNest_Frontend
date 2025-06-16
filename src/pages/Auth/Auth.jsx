import { useEffect, useState } from 'react'
import Signup from './Signup';
import Login from './Login';
import { Button } from '@/components/ui/button';
import { getUser } from '@/Redux/Auth/Action';

const Auth = () => {
  const [active,setActive]=useState(true);
  return (
    <div className='loginContainer flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='box h-[30rem[ w-[25rem]'>
                <div className='loginBox w-full px-10 space-y-5'>
                    {active?<Signup/>:<Login/>}
                </div>
            <div className="flex items-center justify-center gap-2 mt-5">
    <span>{active ? "Already a user ?" : "New user ?"} </span>
    <Button onClick={()=>setActive(!active)} variant="ghost" className="font-extrabold">
        {active?"Sign In":"Sign Up"}
    </Button>
</div>
</div>
</div>
  )
}

export default Auth
