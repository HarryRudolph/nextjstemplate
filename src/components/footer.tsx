import Link from "next/link"

export function Footer({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", backgroundColor: "#f5f5f5", padding: "10px" }}>

            <p className='text-sm text-clr-black leading-7 max-w-sm'>
                Some kind of copyright
            </p>
        </div>
    )
}
