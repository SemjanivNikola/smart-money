"use client";

import { FormEvent, ReactElement } from "react";

export default function SimpleForm({
    children,
    action = "",
    onSubmit,
}: {
    children: ReactElement[];
    action?: string;
    onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}) {
    return (
        <form action={action} className="py-m" onSubmit={onSubmit}>
            {children}
        </form>
    );
}
