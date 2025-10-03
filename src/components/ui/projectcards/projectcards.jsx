import Link from "next/link";

export default function ProjectCards({title, projectThumbnail, siteLink, description}){
    
    return(
        <Link href={siteLink} target="_blank" className="project-card">
            <div className="project-container">
                <div className="project-card__image-text-container">
                    <h2 className="project-card__title">{title}</h2>
                    <img src={projectThumbnail} className="project-card__image" />
                    <p className="project-card__description">{description}</p>
                </div>
            </div>
        
        </Link>
    )
}