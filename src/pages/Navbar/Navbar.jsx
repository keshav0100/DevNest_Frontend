import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectForm from "../Project/ProjectForm";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Auth/Action";
// import { store } from "@/Redux/Store";

const Navbar = () => {
  const dispatch=useDispatch();
  const handleLogout=()=>{
    dispatch(logout())
  }
  const {auth}=useSelector(store=>store);
  const navigate = useNavigate();

  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/project-manager-svgrepo-com.svg"
          alt="DevNest Logo"
          className="cursor-pointer h-4 w-auto"
          onClick={() => navigate("/")}
        />
        <p
          className="cursor-pointer mr-2 font-extrabold"
          onClick={() => navigate("/")}
        >
          DevNest
        </p>
        <Dialog>
          <DialogTrigger>
            <Button
              variant="ghost"
              className="hover:bg-gray-100 border-[0.5px] font-extrabold"
            >
              New Project
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>Create New Project</DialogHeader>
            <ProjectForm />
          </DialogContent>
        </Dialog>
        <Button variant="ghost" className="font-extrabold" onClick={()=>navigate("/upgrade_plan")}>
          Upgrade
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full ">
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>{auth.user?.fullName}</p>
      </div>
    </div>
  );
};

export default Navbar;
