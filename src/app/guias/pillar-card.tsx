import Link from "next/link";
import type { Pillar } from "./pilares";

// Tarjeta de una página guía propia (la que explica un tema completo).
export default function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <li className="card relative bg-base-100 shadow-xl rounded-none hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
      <div className="card-body">
        <h3 className="card-title">
          <Link href={pillar.href} className="after:absolute after:inset-0">
            {pillar.name}
          </Link>
        </h3>
        <p>{pillar.description}</p>
        <span
          aria-hidden="true"
          className="mt-auto pt-4 font-bold uppercase tracking-wider"
        >
          Leer la guía →
        </span>
      </div>
    </li>
  );
}
