import { Card } from "@/components/ui/card";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to project details");
    navigate("/project/3");
  };

  return (
    <Card className="w-full p-5">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1
                onClick={handleClick}
                className="cursor-pointer font-black text-lg"
              >
                Create NLP Project
              </h1>
              <DotFilledIcon />
              <p className="text-base text-gray-500">AI Based Project</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="font-medium text-base">
                    Update
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium text-base">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {[1, 1, 1, 1].map((item, index) => (
            <div
              key={item}
              className="py-1 px-2 group hover:bg-slate-100 cursor-pointer flex items-center rounded-md border border-gray-200"
            >
              <span className="text-xs font-medium">{"AI"}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
