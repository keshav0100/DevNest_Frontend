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
    <Card className="w-full md:w-[300px] lg:w-[310px]">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1
                onClick={handleClick}
                className="cursor-pointer font-extrabold text-sm"
              >
                Create NLP Project
              </h1>
              <DotFilledIcon />
              <p className="text-xs text-gray-400 font-extrabold">
                AI Based Project
              </p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="font-extrabold text-sm">
                    Update
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-extrabold text-sm">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-gray-500 text-xs font-extrabold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {[1, 1, 1, 1].map((item, index) => (
            <Badge
              key={index}
              variant="outline"
              className="font-extrabold text-xs"
            >
              {"AI"}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
