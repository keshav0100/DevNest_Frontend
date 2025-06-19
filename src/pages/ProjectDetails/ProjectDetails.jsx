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
import { useEffect } from "react";
import { fetchProjectById } from "@/Redux/Project/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const handleProjectInvitation = () => {};
  const {id}=useParams();
  const {project}=useSelector(store=>store)
  const dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchProjectById(id))
  },[id])
  return (
    <>
      <div className="min-h-screen bg-white p-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4 bg-white rounded-md">
          <ScrollArea className="max-h-screen lg:w-[69%] pr-2 bg-white rounded-md transform translate-z-0 z-10">
            <div className="text-gray-700 pb-10 w-full bg-white">
              <h1 className="text-lg font-extrabold pb-5">
                {project.projectDetails?.name}
              </h1>
              <div className="space-y-5 pb-10 text-base">
                <p className="w-full md:max-w-lg lg:max-w-xl text-base font-extrabold">
                  {project.projectDetails?.description}
                </p>
                <div className="flex">
                  <p className="w-36 font-extrabold">Project Lead : </p>
                  <p className="font-extrabold">{project.projectDetails?.owner.fullName} </p>
                </div>
                <div className="flex">
                  <p className="w-36 font-extrabold">Members :</p>
                  <div className="flex items-center gap-2">
                    {project.projectDetails?.team.map((member) => (
                      <Avatar className="cursor-pointer" key={member.id}>
                        <AvatarFallback>{member.fullName?.charAt(0) || 'N/A'}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          size="sm"
                          variant="outline"
                          className=" gap-2 font-extrabold"f
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
                  <p className="font-extrabold">{project.projectDetails?.category} </p>
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
          <div className="lg:w-[30%] rounded-md sticky right-5 top-10 bg-white shadow-lg">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
