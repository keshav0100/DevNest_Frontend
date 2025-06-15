import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" 
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

const IssueDetails = () => {
    const {projectId,issueId}=useParams();
  return (
  <div className="px-20 py-8 text-gray-400">
    <div className="flex justify-between border p-10 rounded-lg">
      <ScrollArea className="h-[80vh] w-[60%]">
        <div>
          <h1 className="text-lg text-extrabold text-gray-600">
            Create Navbar
          </h1>
          <div className="py-5">
            <h2 className="text-extrabold text-lg text-gray-600">Description</h2>
            <p className="text-semibold text-md mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
          </div>
          <div className="mt-5">
            <h1 className="pb-3">
              Activity
            </h1>
            <Tabs defaultValue="comments" className="w-[400px]">
              <TabsList className="mb-5">
                <TabsTrigger value="all" className="font-extrabold">All</TabsTrigger>
                <TabsTrigger value="comments" className="font-extrabold">Comments</TabsTrigger>
                <TabsTrigger value="history" className="font-extrabold">History</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="mt-4">
                  All activity content goes here
                </div>
              </TabsContent>
              <TabsContent value="comments">
                <div className="mt-4">
                  <CommentForm issueId={issueId}/>
                </div>
                <div className="mt-8 space-y-6">
                {[1,1,1,1].map((item)=><CommentCard key={item} />)}
                </div>
              </TabsContent>
              <TabsContent value="history">
                <div className="mt-4">
                  History content goes here
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
  );
};

export default IssueDetails;

