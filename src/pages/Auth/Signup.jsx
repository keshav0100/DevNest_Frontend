// src/pages/Signup.jsx
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { register as registerUser } from "@/Redux/Auth/Action";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  fullName: z
    .string()
    .max(10, "Name must be at most 10 characters")
    .refine((val) => /^[A-Za-z ]+$/.test(val), {
      message: "Kindly enter a valid name!",
    }),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[^A-Za-z0-9]/.test(val), {
      message: "Password must contain at least one special character",
    }),
});

const Signup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", password: "" },
  });

  async function onSubmit(data) {
    setLoading(true);
    try {
      await dispatch(registerUser(data));
      toast.success("Account created!");
    } catch (e) {
      toast.error("Could not register. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      {/* ✅ Toast fixed on top-right like Login */}
      <Toaster
        position="top-right"
        toastOptions={{ style: { background: "#111827", color: "white" } }}
      />

      {/* ✅ Styled similar to Login for consistency */}
      <h2 className="text-2xl font-extrabold text-center text-white drop-shadow">
        Register Here
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    {...field}
                    className="font-extrabold"
                    autoComplete="name"
                  />
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
                  <Input
                    placeholder="Email"
                    {...field}
                    className="font-extrabold"
                    autoComplete="email"
                    inputMode="email"
                  />
                </FormControl>
                <FormMessage />
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
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword((p) => !p)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ✅ Purple brand button like Login */}
          <Button
            type="submit"
            className="w-full font-extrabold bg-[#6C2BD9] hover:bg-[#5A23B8] text-white transition-all duration-200 shadow-lg"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
