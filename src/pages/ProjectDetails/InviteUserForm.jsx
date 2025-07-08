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
import { inviteToProject } from "@/Redux/Project/Action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as z from "zod";

const InviteUserForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("InviteUserForm - Sending:", { email: data.email, projectId: id });
    dispatch(inviteToProject({ email: data.email, projectId: id }));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-extrabold">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter user email" {...field} className="font-extrabold"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="px-4 items-center cursor-pointer font-extrabold">
            Send Invitation
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InviteUserForm;
