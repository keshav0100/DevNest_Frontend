import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { fetchIssueById, updateIssueStatus } from "@/Redux/Issue/Action";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "@/Redux/Comment/Action";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();
  const dispatch = useDispatch();
  const { issue, comment } = useSelector((store) => store);

  const handleUpdateIssueStatus = (status) => {
    dispatch(updateIssueStatus({ status, id: issueId }));
    console.log(status);
  };
  useEffect(() => {
    dispatch(fetchIssueById(issueId));
    dispatch(fetchComments(issueId));
  }, [issueId]);
  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg text-extrabold text-gray-600">
              {issue.issueDetails?.title}
            </h1>
            <div className="py-5">
              <h2 className="text-extrabold text-lg text-gray-600">
                Description
              </h2>
              <p className="text-semibold text-md mt-3">
                {issue.issueDetails?.description || "No description provided."}
              </p>
            </div>
            <div className="mt-5">
              <h1 className="pb-3">Activity</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value="all" className="font-extrabold">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="comments" className="font-extrabold">
                    Comments
                  </TabsTrigger>
                  <TabsTrigger value="history" className="font-extrabold">
                    History
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <div className="mt-4">All activity content goes here</div>
                </TabsContent>
                <TabsContent value="comments">
                  <div className="mt-4">
                    <CommentForm issueId={issueId} />
                  </div>
                  <div className="mt-8 space-y-6 text-gray-800">
                    {comment.comments.map((item) => {
                      console.log(item); // See what properties are present
                      return <CommentCard item={item} key={item.id} />;
                    })}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  <div className="mt-4">History content goes here</div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>
        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus} defaultValue="todo">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">To Do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg">
            <p className="border-b py-3 px-5 text-extrabold">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex items-center gap-10 ">
                  <p className="w-[7rem] text-gray-800">Assignee</p>
                  {issue.issueDetails?.assignee?.fullName ? (
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 text-xs flex items-center justify-center bg-gray-200 rounded-full">
                        <AvatarFallback className="flex items-center justify-center text-gray-600 rounded-full">
                          {issue.issueDetails?.assignee?.fullName.charAt(0) ||
                            "U"}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-gray-800">
                        {issue.issueDetails?.assignee?.fullName}
                      </p>
                    </div>
                  ) : (
                    <p>Unassigneed</p>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] text-gray-800">Labels</p>
                  <p>None</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] text-gray-800">Status</p>
                  <Badge className="font-extrabold">
                    {issue.issueDetails?.status}
                  </Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem] text-gray-800">Release</p>
                  <p>15-06-2025</p>
                </div>
                <div className="flex items-center gap-10 ">
                  <p className="w-[7rem] text-gray-800">Reporter</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs flex items-center justify-center bg-gray-200 rounded-full">
                      <AvatarFallback className="flex items-center justify-center text-gray-600 rounded-full">
                        K
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-gray-800">Keshav Bansal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
