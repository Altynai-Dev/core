'use client';
import { Button } from "@/shared/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { useTransition } from "react";

export function CourseItem({
    course,
    onDelete
}:{
    course: CourseListElement, 
    onDelete: ()=> Promise<void>;
}){
    //следить за состоянием серверного action
    const [isLoadingDelete, startDeleteTransition] = useTransition();
    const handleDelete = () =>{
        startDeleteTransition(async () => {
            await onDelete();
        })
    }
    return(
    <Card>
        <CardHeader>
            <CardTitle>{course.name}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardFooter>
            <Button disabled={isLoadingDelete} onClick={handleDelete}>Delete</Button>
        </CardFooter>
    </Card>
    )
}