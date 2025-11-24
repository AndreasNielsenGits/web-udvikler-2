import HomePageProject from "@/components/ui/homepageproject/homepageproject";
import SidebarNavigation from "@/components/ui/sidebar-navigation/sidebar-navigation";

export default function Home() {
  return (
      <>
            <section className="homepage-section">
            
                <SidebarNavigation />
                <article className="aboutme text-[var(--description-color)]" >
                    <h2>Om Mig</h2>
                    <p>
                        Jeg hedder Andreas Nielsen
                    </p>
                    <p>
                        Jeg går på hovedforløbet, som webudvikler og har
                        arbejdet med forskellige som Dynamisk Web med Jest,
                        Sass, Api og Frameworks hvor jeg har arbejdet
                        med React og installationen af det.
                    </p>
                </article>
                <h2 className="projectsTitle text-[var(--description-color)]">Projekter</h2>
                <HomePageProject
                    title="Moviez"
                    previewImage="/darkprojectpreview.png"
                    previewDescreption="Moviz is a mobile app used to view and favorite movies, tv-shows and actors"
                    renderUrl="https://projekt-moviez-bingbingdawg.onrender.com"
                    projectUrl="/projects"
                            
                />
                <HomePageProject 
                     title="PikaWiki"
                     previewImage="/pokedex.png"
                     imageAlign="right"
                     previewDescreption="Pikawiki is a pokedex that's used to look up pokemon and it's information"
                     renderUrl="https://projekt-moviez-bingbingdawg.onrender.com"
                     projectUrl="/projects"
                />
                 <HomePageProject
                    title="Newsify"
                    previewImage="/newsify.png"
                    previewDescreption="Newsify is a mobile app that is used to look up news"
                    renderUrl="https://newsify-bingbingdawg.onrender.com/"
                    projectUrl="/projects"
                />
                 <HomePageProject
                    title="Newsify"
                    previewImage="/newsify.png"
                    imageAlign="right"
                    previewDescreption="Newsify is a mobile app that is used to look up news"
                    renderUrl="https://newsify-bingbingdawg.onrender.com/"
                    projectUrl="/projects"
                />
            </section>
       </>
    );
}
