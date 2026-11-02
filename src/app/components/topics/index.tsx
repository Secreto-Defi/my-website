import Link from "next/link";
import React from "react";
import { GUIDE_GROUPS } from "../../guias/guides";
import { PILLARS } from "../../guias/pilares";

const rowClass =
  "flex flex-col small:flex-row flex-wrap gap-x-6 gap-y-2 items-center justify-center";

const Topics = () => {
  return (
    <div className="flex flex-col gap-5 small:gap-3 -mt-10 small:-mt-16 pb-14 small:pb-24">
      <nav aria-label="Guías por tema" className={rowClass}>
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
      <nav aria-label="Para empezar" className={rowClass}>
        <span className="opacity-70">¿Empiezas en DeFi?</span>
        {PILLARS.map((pillar) => (
          <Link
            key={pillar.href}
            href={pillar.href}
            className="link link-primary font-semibold"
          >
            {pillar.name}
          </Link>
        ))}
        <Link href="/glosario" className="link link-primary font-semibold">
          Glosario de DeFi en español
        </Link>
      </nav>
    </div>
  );
};

export default Topics;
