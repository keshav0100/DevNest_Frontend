import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSelector } from "react-redux";

const UserList = () => {
  const {project}=useSelector(store=>store);
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <p className="py-2 px-3">{"keshav" || "unassignee"}</p>
        </div>
        {project.projectDetails?.team.map((item, index) => (
          <div
            key={index}
            className="py-2 group hover:bg-slate-100 cursor-pointer flex items-center rounded-md border px-4"
          >
            <Avatar>
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">Keshav Bansal</p>
              <p className="text-sm text-muted-foreground">@keshavbansal</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
