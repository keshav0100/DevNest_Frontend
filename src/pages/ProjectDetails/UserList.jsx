import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <p className="py-2 px-3">{"keshav" || "unassignee"}</p>
        </div>
        <div>
          <Avatar>
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm leading-none">@Keshav</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
UserList;
