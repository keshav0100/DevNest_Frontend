import React from "react";
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
import { useDispatch } from "react-redux";
import { createIssue } from "@/Redux/Issue/Action";
import { useParams } from "react-router-dom";

const IssueForm = ({ status }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      issueName: "",
      description: "",
    },
  });

  const onSubmit=(data) =>{
    data.projectId = id;

    dispatch(
      createIssue({
        title: data.issueName,
        description: data.description,
        projectId: id,
        status,
      })
    );
    console.log("Create issue data", data);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="issueName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Issue Name"
                    {...field}
                    className="font-extrabold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Description"
                    {...field}
                    className="font-extrabold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-4 items-center cursor-pointer font-extrabold"
            >
              Create Issue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default IssueForm;
