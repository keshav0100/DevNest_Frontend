import { useEffect, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [active, setActive] = useState(false); // false = Login

  // Auth-only background
  useEffect(() => {
    document.body.classList.add("has-auth-bg");
    return () => document.body.classList.remove("has-auth-bg");
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-start px-6 md:px-10">
      {/* Floating form (no background) – shifted a bit left via justify-start */}
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          {/* <h1 className="text-xl font-extrabold text-white drop-shadow-lg">
            Keshav&apos;s DevNest
          </h1> */}
          <p className="text-sm text-white/80 drop-shadow">
            {active ? "Create your account" : "Welcome back"}
          </p>
        </div>

        {/* The form */}
        {active ? <Signup /> : <Login />}

        {/* Auth footer: perfectly centered under the button */}
        <div className="mt-4 flex w-full justify-center">
          <div className="inline-flex items-center gap-2 text-sm text-white leading-none">
            <span className="font-medium">
              {active ? "Already a user?" : "New user?"}
            </span>
            <Button
              type="button"
              onClick={() => setActive(!active)}
              variant="link"
              className="p-0 h-auto align-middle font-bold text-white underline underline-offset-4"
            >
              {active ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
