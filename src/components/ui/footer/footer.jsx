import Link from "next/link";

export default function FooterComponent() {
    return (
        <>
        <footer className="sitefooter">
            <div className="flex flex-col">
                <h2>Kontakter</h2>
                <Link href="mailto:andreasnieslen@gmail.com">Andreasnieslen@gmail.com</Link>
                <Link href="https://www.linkedin.com/in/andreas-nielsen-2a8851260/" target="_blank">Linkdin</Link>
            </div>
        </footer>
        </>
    )
}