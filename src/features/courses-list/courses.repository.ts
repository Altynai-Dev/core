import { dbClient } from "@/shared/lib/db"
import {cache} from 'react';

class CoursesRepository {
    getCourseList = cache(
        (): Promise<CourseListElement[]> => dbClient.course.findMany()
    );
    createCourseElement = (command: CreateCourseListElementCommand): Promise<CourseListElement> =>{
        return dbClient.course.create({
            data: command
        })
    };
    deleteCourseElement = (command: DeleteCourseListElementCommand) =>{
        return dbClient.course.delete({
            where: {id: command.id}
        })
    };
}

export const coursesRepository = new CoursesRepository();