"use client";

import Link from "next/link";

export default function HomePageProject({
  title,
  previewImage,
  previewDescreption,
  imageAlign = "left",
  projectUrl,
  renderUrl,
  className = ""
}) {
  return (
    <article className={`home-page-project ${imageAlign !== "left" ? "home-page-project--right" : ""} text-[var(--description-color)]` }>
      <div>
        <h3>{title}</h3>
        <p>{previewDescreption}</p>
        <div className="flex gap-[0.5rem] ml-0">
          <Link className="text-[var(--link)] hover:text-[var(--active-hover)] active:text-[var(--active-link)] focus:text-[var(--active-link)]" href={renderUrl} target="_blank">
            See Project
          </Link>
          <p className="ml-0"> | </p>
          <Link className="text-[var(--link)] hover:text-[var(--active-hover)] active:text-[var(--active-link)] focus:text-[var(--active-link)]" href={projectUrl}>
            More Projects
          </Link>
        </div>
      </div>
      <img src={previewImage} alt={`Preview Image of project ${title}`} />
    </article>
  );
}