import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function QuestionBox({ question }) {
  if (!question) {
    return <Skeleton className="h-[80vh] w-full" />;
  }

  return (
    <div className="pl-4 pr-4 pt-3 flex flex-col gap-5 overflow-x-hidden h-[90vh] overflow-scroll pb-12">
      <div>
        <p className="font-bold text-3xl">{question.title}</p>
        {/* <p className={`${question.difficulty === "easy"? "text-green-500 bg-green-200":question.difficulty === "medium"? "text-yellow-500 bg-yellow-200": "text-red-500 bg-red-200"} font-semibold text-lg w-[80px] rounded-xl p-1 text-center mt-1 h-[35px]`}>{question.difficulty}</p> */}
      </div>
      <div>
        <p className="font-light">{question.description}</p>
      </div>

      <div className="flex flex-col gap-3 text-white">
        
        {question.problem.testCases.map((example, index) => (
          <div key={index} className="bg-subtleBackground p-3 rounded">
            <p className="font-semibold mb-2">Example {index + 1}</p>
            <div className="flex flex-col gap-1">
              <div>
                <p className="font-semibold mb-1">Input</p>
                <p className="font-light">{example.input}</p>
              </div>
              <div className="mb-3">
                <p className="font-semibold mb-1">Output</p>
                <p className="font-light">{example.expectedOutput}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator />
      <div className="text-white bg-subtleBackground p-3 rounded">
        <p className="font-semibold">Constraints</p>
        <div className="flex flex-col gap-2">
          {question.problem.constraints.map((constraint, index) => (
            <p key={index}>{constraint}</p>
          ))}
        </div>
      </div>

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-500">
              Topics
            </AccordionTrigger>
            <AccordionContent>
              {/* <div className='flex gap-2'>
                            {
                                question.tags.map((tag)=>(
                                    <span key={tag.id} className='text-gray-100 bg-gray-500 rounded-md p-1'>{tag.name}</span>
                                ))
                            }
                            </div> */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
