interface TasksProps extends CardProps {
    status: "pending" | "done";
}

interface CardProps {
    taskId: string;
    taskName: string;
}