import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";

const ProjectDetails = () => {
  const handleProjectInvitation = () => {};

  return (
    <>
      <div className="min-h-screen bg-white p-5 lg:px-10 border-4 border-red-500">
        <div className="lg:flex gap-5 justify-between pb-4 bg-white rounded-md border-4 border-green-500">
          <ScrollArea className="max-h-screen lg:w-[69%] pr-2 bg-white rounded-md transform translate-z-0 z-10 border-4 border-blue-500">
            <div className="text-gray-700 pb-10 w-full bg-white border-4 border-purple-500">
              <h1 className="text-lg font-extrabold pb-5">
                Create NLP using Transformers
              </h1>
              <div className="space-y-5 pb-10 text-base">
                <p className="w-full md:max-w-lg lg:max-w-xl text-base font-extrabold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex">
                  <p className="w-36 font-extrabold">Project Lead : </p>
                  <p className="font-extrabold"> Keshav</p>
                </div>
                <div className="flex">
                  <p className="w-36 font-extrabold">Members :</p>
                  <div className="flex items-center gap-2">
                    {[1, 1, 1, 1].map((item) => (
                      <Avatar className="cursor-pointer" key={item}>
                        <AvatarFallback>K</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          size="sm"
                          variant="outline"
                          className="ml-3 font-extrabold"
                          onClick={handleProjectInvitation}
                        >
                          <span>Invite</span>
                          <PlusIcon className="w-3 h-3" />
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Invite User</DialogTitle>
                      </DialogHeader>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex">
                  <p className="w-36 font-extrabold">Category </p>
                  <p className="font-extrabold"> Artificial Intelligence</p>
                </div>
                <div className="flex">
                  <p className="w-36 font-extrabold">Status : </p>
                  <Badge className="font-extrabold"> In Progress</Badge>
                </div>
              </div>
              <section>
                <p className="space-y-5 pb-10 text-base font-extrabold">
                  Tasks
                </p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pending" title="Todo List" />
                  <IssueList status="in_progress" title="In Progress" />
                  <IssueList status="done" title="Done" />
                </div>
              </section>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] rounded-md sticky right-5 top-10 bg-white shadow-lg border-4 border-yellow-500">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
