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

const Navbar = () => {
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/project-manager-svgrepo-com.svg"
          alt="DevNest Logo"
          className="cursor-pointer h-4 w-auto"
        />
        <p className="cursor-pointer mr-2 font-extrabold">DevNest</p>
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
        <Button variant="ghost" className="font-extrabold">
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
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>Keshav </p>
      </div>
    </div>
  );
};

export default Navbar;
