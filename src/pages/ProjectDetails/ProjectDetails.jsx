import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogClose } from "@radix-ui/react-dialog";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const handleProjectInvitation = () => {};

  return (
    <div className="mt-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
          <div className="text-gray-700 pb-10 w-full">
            <h1 className="text-lg font-bold pb-5">
              Create NLP using Transformers
            </h1>
            <div className="space-y-5 pb-10">
              <p className="w-full md:max-w-lg lg:max-w-xl text-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex">
                <p className="w-36">Project Lead : </p>
                <p> Keshav</p>
              </div>
              <div className="flex">
                <p className="w-36">Members :</p>
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
                        className="ml-3"
                        onClick={handleProjectInvitation}
                      >
                        <span>Invite</span>
                        <PlusIcon className="w-3 h-3" />
                      </Button>
                    </DialogClose>
                  </DialogTrigger>
                </Dialog>
              </div>
              <div className="flex">
                <p className="w-36">Category </p>
                <p> Artificial Intelligence</p>
              </div>
              <div className="flex">
                <p className="w-36">Status : </p>
                <Badge> In Progress</Badge>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ProjectDetails;
