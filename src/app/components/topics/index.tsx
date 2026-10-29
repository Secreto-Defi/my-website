import Link from "next/link";
import React from "react";
import { GUIDE_GROUPS } from "../../guias/guides";

const Topics = () => {
  return (
    <nav
      aria-label="Guías por tema"
      className="flex flex-col small:flex-row flex-wrap gap-x-6 gap-y-2 items-center justify-center -mt-10 small:-mt-16 pb-14 small:pb-24"
    >
      <span className="opacity-70">Explora las guías por tema:</span>
      {GUIDE_GROUPS.map((group) => (
        <Link
          key={group.id}
          href={`/guias/${group.id}`}
          className="link link-primary font-semibold"
        >
          {group.title}
        </Link>
      ))}
    </nav>
  );
};

export default Topics;
