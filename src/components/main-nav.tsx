import Link from "next/link"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                NextJSTemplate
            </Link>
            <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                About
            </Link>
        </nav>
    )
}
