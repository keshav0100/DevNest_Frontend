import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod"; 
import { useDispatch } from "react-redux";
import { register } from "@/Redux/Auth/Action";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const formSchema = z.object({
  fullName: z.string().max(10, "Name must be at most 10 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Signup = () => {
  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  async function onSubmit(data) {
    setLoading(true);
    try {
      await dispatch(register(data));
      console.log("Create project data", data);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-extrabold text-center">
        Keshav's DevNest
      </h1>
      <h1 className="text-3xl font-extrabold text-center">
        Register Here
      </h1>
       <div className="space-y-5">

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Full Name" {...field} className="font-extrabold"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} className="font-extrabold"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="font-extrabold pr-10"
                    {...field}
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-center">
          <Button type="submit" className="w-full items-center cursor-pointer font-extrabold" disabled={loading}>
            {loading ? "Loading..." : "Register"}
          </Button>
        </div>
      </form>
    </Form>
    </div>
    </div>
  )
}

export default Signup
