import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { createComment } from "@/Redux/Comment/Action";
import { zodResolver } from "@hookform/resolvers/zod";
// import { use } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CommentForm = ({ issueId }) => {
  const dispatch = useDispatch();
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(createComment({ content: data.content, issueId }));
    console.log("Create project data", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end gap-2 text-gray-900"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-2 text-gray-800">
                <div>
                  <Avatar>
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                </div>
                <FormControl>
                  <Input
                    placeholder="Add comments here"
                    {...field}
                    className="font-extrabold"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mb-[2px] font-extrabold">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default CommentForm;
