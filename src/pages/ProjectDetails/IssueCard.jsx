import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue } from "@/Redux/Issue/Action";


const IssueCard = ({ item, projectId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIssueDelete = () => {
    dispatch(deleteIssue(item.id));
  }
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1">
        <div className="flex text-xs justify-between items-center">
          <CardTitle
            onClick={() => navigate(`/project/${projectId}/issue/${item.id}`)}
            className="text-base font-extrabold cursor-pointer"
          >
            {item.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleIssueDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">FBP-{1}</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-black cursor-pointer"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <UserList issueDetails={item}/>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
