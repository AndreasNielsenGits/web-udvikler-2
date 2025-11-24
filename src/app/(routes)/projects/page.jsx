import HeaderComponent from "@/components/ui/header/header"
import ProjectCards from "@/components/ui/projectcards/projectcards"
import FooterComponent from "@/components/ui/footer/footer"


export default function Projects(){
    return (
        <>
        

        <h1 className="projects-heading">Projects</h1>
        <div className="wrapper">
        <ProjectCards
            title="Moviez"
            projectThumbnail="/darkprojectpreview.png"
            description="Moviz is a mobile app used to view and favorite movies, tv-shows and actors"
            siteLink="https://projekt-moviez-bingbingdawg.onrender.com"
        />
        <ProjectCards 
            title="PikaWiki"
            projectThumbnail="/pokedex.png"
            description="Moviz is a mobile app used to view and favorite movies, tv-shows and actors"
            siteLink="https://pokedex-bingbingdawg.onrender.com"
        />
        <ProjectCards 
            title="Newsify"
            projectThumbnail="/newsify.png"
            description="Newsify is a mobile app that is used to look up news"
            siteLink="https://newsify-bingbingdawg.onrender.com"
        />
        <ProjectCards 
            title="Boernelejren på Langeland"
            projectThumbnail="/boernelejre-thumbnail.png"
            description="Moviz is a mobile app used to view and favorite movies, tv-shows and actors"
            siteLink="https://bornelejren-pa-langeland-bingbingdawg.onrender.com/"
            />
        </div>
        </>

    )
}