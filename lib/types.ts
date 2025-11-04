interface TasksProps extends CardProps {
    status: "pending" | "completed";
}

interface CardProps {
    taskId: string;
    taskName: string;
}