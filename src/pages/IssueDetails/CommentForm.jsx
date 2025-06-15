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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const CommentForm = ({issueId}) => {
    const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  function onSubmit(data) {
    console.log("Create project data", data);
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
                <div className="flex gap-2">
                    <div>
                    <Avatar>
                        <AvatarFallback>
                            K
                        </AvatarFallback>
                    </Avatar>
                </div>
              <FormControl>
                <Input placeholder="Add comments here" {...field} />
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
  )
}

export default CommentForm
CommentForm