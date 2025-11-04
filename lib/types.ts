interface TasksProps extends Omit<CardProps, "onActionComplete"> {
    status: "pending" | "completed";
}

interface CardProps {
    taskId: string;
    taskName: string;
    onActionComplete: () => void;
}