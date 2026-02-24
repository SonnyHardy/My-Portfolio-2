import type {ReactNode} from "react";


type ButtonSize = "sm" | "default" | "lg";

type ButtonProps = {
    className?: string,
    size?: ButtonSize,
    children?: ReactNode,
    onClick?: () => void
}

export function Button({className = "", size = "default", children, onClick}: ButtonProps) {
    const baseClasses: string = "relative overflow-hidden rounded-full font-medium focus:outline-none" +
        " focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 " +
        "shadow-lg shadow-primary/25 hover:cursor-pointer";

    const sizeClasses: Record<ButtonSize, string> = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }

    const classes: string = `${baseClasses} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes} onClick={onClick}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}