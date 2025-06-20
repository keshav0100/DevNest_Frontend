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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssue } from "@/Redux/Issue/Action";
import { useParams } from "react-router-dom";


const IssueList = ({ title, status }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { issue } = useSelector(store => store);
  useEffect(() => {
    dispatch(fetchIssue(id));
  }, [id]);
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px] font-extrabold">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {issue.issues.filter((issue=>issue.status==status)).map((item) => (
                <IssueCard key={item.id} projectId={id} item={item} />
              ))}
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
          <IssueForm status={status}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
