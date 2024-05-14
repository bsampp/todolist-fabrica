
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Task {
    id: string;
    title: string;
    description?: string | null;
    status: "A fazer" | "Em andamento" | "Concluída";
    user_id: string;
    created_at: string;
    updated_at: string;
}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };

    
};
