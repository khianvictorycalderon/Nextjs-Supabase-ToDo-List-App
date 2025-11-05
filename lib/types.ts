export interface TasksProps extends Omit<CardProps, "onActionComplete"> {
    status: "pending" | "completed";
}

export interface CardProps {
    taskId: string;
    taskName: string;
    onActionComplete: () => void;
}