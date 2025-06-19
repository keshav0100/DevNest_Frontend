import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProjectCard from "../Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, searchProjects } from "@/Redux/Project/Action";

export const tags = [
  "All",
  "ReactJS",
  "NextJS",
  "Spring Boot",
  "Natural Language Processing",
  "Speech Recognition",
  "MySQL",
  "MongoDB",
  "Python3",
  "Flask",
  "Django",
];

const ProjectList = () => {
  const [keyword, setKeyword] = useState("");
  const { project } = useSelector(store => store);
  const dispatch=useDispatch();
  
  const handleFilterCategory = (value) => {
    if(value=='all'){
      dispatch(fetchProjects({}))
    }
    dispatch(fetchProjects({category:value}))
  };
  const handleFilterTags = (value) => {
if(value=='All'){
      dispatch(fetchProjects({}))
    }
    dispatch(fetchProjects({tag:value}))
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchProjects(e.target.value))
  };


  console.log("Project Store", project);

  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-8">
        <section className="filterSection">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl -tracking-wider">Filters</p>
              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>
            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[70vh] ">
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-1 pt-2"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterCategory(value)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor="r1" className="font-extrabold">
                          {" "}
                          All
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="ai" id="r2" />
                        <Label htmlFor="r2" className="font-extrabold">
                          {" "}
                          Artifical Intelligence
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="fullstack" id="r3" />
                        <Label htmlFor="r3" className="font-extrabold">
                          {" "}
                          Full Stack
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="nlp" id="r6" />
                        <Label htmlFor="r6" className="font-extrabold">
                          {" "}
                          Natural Language Processing
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="speech" id="r7" />
                        <Label htmlFor="r7" className="font-extrabold">
                          {" "}
                          Speech Recognition
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="frontend" id="r8" />
                        <Label htmlFor="r8" className="font-extrabold">
                          {" "}
                          Frontend
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="backend" id="r9" />
                        <Label htmlFor="r9" className="font-extrabold">
                          {" "}
                          Backend
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="devops" id="r4" />
                        <Label htmlFor="r4" className="font-extrabold">
                          {" "}
                          DevOps
                        </Label>
                      </div>
                      
                    </RadioGroup>
                  </div>
                </div>

                <div className="pt-6">
                  <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
                  <div className="pt-3">
                    <RadioGroup
                      className="space-y-2 pt-1"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterTags(value)
                      }
                    >
                      {tags.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <RadioGroupItem value={item} id={`r-${item}`} />
                          <Label
                            htmlFor={`r-${item}`}
                            className="font-extrabold"
                          >
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
        <section className="projectSection w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center mb-5 justify-between">
            <div className="relative w-full">
              <Input
                onChange={handleSearchChange}
                placeholder="Search Project"
                className="w-full px-9 cursor-text font-extrabold"
              />
              <MagnifyingGlassIcon className="absolute top-3 left-3" />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-col space-y-5 min-h-[74vh]">
              {keyword
                ? project.searchProjects?.map((item) => (
                    <ProjectCard key={item.id} project={item} />
                  ))
                : project.projects?.map((item) => (
                    <ProjectCard key={item.id} project={item} />
                  ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectList;
