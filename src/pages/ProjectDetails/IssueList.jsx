import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import IssueForm from "./IssueForm";

const IssueList = ({ title, status }) => {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px] font-extrabold">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {[1,1,1,1].map((item)=><IssueCard key={item} />)}
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger asChild>
              <Button
                className="w-full flex items-center gap-2 font-extrabold"
                variant="outline"
              >
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <IssueForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
