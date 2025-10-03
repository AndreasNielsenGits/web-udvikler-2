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
    <article className={`home-page-project ${imageAlign !== "left" ? "home-page-project--right" : ""}`}>
      <div>
        <h3>{title}</h3>
        <p>{previewDescreption}</p>
        <div className="flex gap-[0.5rem]">
          <Link className="text-[var(--color-link)] active:text-[var(--color-activelink)]" href={renderUrl} target="_blank">
            See Project
          </Link>
          <p color=""> | </p>
          <Link className="text-[var(--color-link)]" href={projectUrl}>
            More Projects
          </Link>
        </div>
      </div>
      <img src={previewImage} alt={`Preview Image of project ${title}`} />
    </article>
  );
}