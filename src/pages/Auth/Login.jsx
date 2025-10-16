import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/Redux/Auth/Action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data) {
    setLoading(true);
    try {
      await dispatch(login(data));
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        toast.error("Invalid email or password", {
          style: { background: "#f87171", color: "white" },
          position: "top-right",
        });
      } else {
        toast.success("Logged in successfully!", { position: "top-right" });
      }
    } catch (err) {
      toast.error("Invalid email or password", {
        style: { background: "#f87171", color: "white" },
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <Toaster
        position="top-right"
        toastOptions={{ style: { background: "#111827", color: "white" } }}
      />

      <h2 className="text-2xl font-extrabold text-center text-white drop-shadow">
        Login Here
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      autoComplete="current-password"
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

          {/* Brand-colored Login button */}
          <Button
            type="submit"
            className="w-full font-extrabold bg-[#6C2BD9] hover:bg-[#5A23B8] text-white transition-all duration-200 shadow-lg"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
