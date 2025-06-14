import React from "react";  
import { Card, CardContent } from '@/components/ui/card'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const ProjectList = () => {
  return (
    <>
    <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-8'>
        <section className='filterSection'>
        <Card className='p-5 sticky top-10'>
            <div className='flex justify-between lg:w-[20rem]'>
                <p className='text-xl -tracking-wider'>Filters</p>
                <Button variant="ghost" size="icon">
                    <MixerHorizontalIcon/>
                </Button>
            </div>
            <CardContent className="mt-5">
                <ScrollArea className="space-y-7 h-[70vh] ">
                     <div>
                         <h1 className="pb-3 text-gray-400 border-b">
                            Category
                        </h1>
                        <div className="pt-5">
                            <RadioGroup>
                                 <div>
                                    {/* <RadioGroupItem value="all" id="r1"/> */}
                                    {/* <Label htmlFor="r1"> All</Label> */}
                                </div> 
                            </RadioGroup> 
                        </div> 
                    </div>  
                </ScrollArea>
            </CardContent>
        </Card>
        </section>
        <section className='projectSection w-full lg:w-[48rem]'>
        </section>
    </div> 
    </>
  )
}

export default ProjectList