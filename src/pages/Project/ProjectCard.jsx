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
import { useDispatch } from "react-redux";
import { deleteProject, fetchProjectById } from "@/Redux/Project/Action";
import { useEffect } from "react";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleDelete=()=>{
    dispatch(deleteProject(project.id))
  }
  
  const handleClick = () => {
    console.log("Navigating to project details");
    navigate(`/project/${project.id}`);
  };

  const formatCategory = (category) => {
    if (category === 'full') {
      return 'Full Stack';
    }
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <Card className="w-full p-5">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1
                onClick={()=>navigate("/project/"+project.id)}
                className="cursor-pointer font-black text-lg"
              >
                {project.name}
              </h1>
              <DotFilledIcon />
              <p className="text-base text-gray-500">
                {formatCategory(project.category)}
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
                  <DropdownMenuItem className="text-extrabold text-base">
                    Update
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-extrabold text-base" onClick={handleDelete}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-gray-600 text-base">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {project.tags && project.tags.map((tag, index) => (
            <div
              key={index}
              className="py-1 px-2 group hover:bg-slate-100 cursor-pointer flex items-center rounded-md border border-gray-200"
            >
              <span className="text-xs text-extrabold">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
