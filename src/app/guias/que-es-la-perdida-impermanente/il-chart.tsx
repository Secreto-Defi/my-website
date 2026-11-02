// Gráfico de la pérdida impermanente en una pool de producto constante:
// pérdida frente a mantener los tokens según cuánto cambia su precio relativo.
// Se dibuja en el servidor (sin JavaScript en el navegador); la tabla de la
// página recoge los mismos datos para quien no pueda ver el dibujo.

const WIDTH = 480;
const HEIGHT = 290;
const MARGIN = { top: 16, right: 18, bottom: 44, left: 56 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;
const MAX_LOSS = 45; // % que cubre el eje vertical

const impermanentLoss = (ratio: number) =>
  (2 * Math.sqrt(ratio)) / (1 + ratio) - 1;

// Eje horizontal logarítmico de 0,1× a 10×; eje vertical de 0 % a -45 %.
const x = (ratio: number) =>
  MARGIN.left + ((Math.log10(ratio) + 1) / 2) * PLOT_W;
const y = (lossPercent: number) =>
  MARGIN.top + (-lossPercent / MAX_LOSS) * PLOT_H;

const curve = Array.from({ length: 81 }, (_, i) => 10 ** (-1 + (2 * i) / 80))
  .map(
    (ratio, i) =>
      `${i === 0 ? "M" : "L"}${x(ratio).toFixed(1)} ${y(
        impermanentLoss(ratio) * 100
      ).toFixed(1)}`
  )
  .join(" ");

const xTicks: [number, string][] = [
  [0.1, "0,1×"],
  [0.25, "0,25×"],
  [0.5, "0,5×"],
  [1, "1×"],
  [2, "2×"],
  [4, "4×"],
  [10, "10×"],
];
const yTicks = [0, -10, -20, -30, -40];

// Puntos señalados: cada uno aparece también en la tabla de la página.
const marks: { ratio: number; label?: string }[] = [
  { ratio: 0.5 },
  { ratio: 2, label: "−5,7 %" },
  { ratio: 0.25 },
  { ratio: 4, label: "−20 %" },
  { ratio: 0.1 },
  { ratio: 10, label: "−42,5 %" },
];

export default function IlChart() {
  return (
    <figure className="flex flex-col gap-2 max-w-2xl">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby="il-chart-title il-chart-desc"
        className="w-full h-auto bg-base-100"
      >
        <title id="il-chart-title">
          Pérdida impermanente según el cambio del precio relativo
        </title>
        <desc id="il-chart-desc">
          Curva simétrica: sin cambio de precio no hay pérdida; con un cambio de
          2 veces (o a la mitad) la pérdida es del 5,7 %, con 4 veces (o a la
          cuarta parte) del 20 % y con 10 veces (o a la décima parte) del 42,5 %.
        </desc>

        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={MARGIN.left}
              x2={WIDTH - MARGIN.right}
              y1={y(tick)}
              y2={y(tick)}
              className="stroke-base-content/20"
              strokeWidth={1}
            />
            <text
              x={MARGIN.left - 8}
              y={y(tick) + 4}
              textAnchor="end"
              fontSize={13}
              className="fill-base-content"
            >
              {tick === 0 ? "0 %" : `−${-tick} %`}
            </text>
          </g>
        ))}

        {xTicks.map(([ratio, label]) => (
          <g key={ratio}>
            <line
              x1={x(ratio)}
              x2={x(ratio)}
              y1={MARGIN.top}
              y2={HEIGHT - MARGIN.bottom}
              className="stroke-base-content/10"
              strokeWidth={1}
            />
            <text
              x={x(ratio)}
              y={HEIGHT - MARGIN.bottom + 18}
              textAnchor="middle"
              fontSize={13}
              className="fill-base-content"
            >
              {label}
            </text>
          </g>
        ))}

        <path
          d={curve}
          fill="none"
          className="stroke-primary"
          strokeWidth={3}
          strokeLinejoin="round"
        />

        {marks.map(({ ratio, label }) => (
          <g key={ratio}>
            <circle
              cx={x(ratio)}
              cy={y(impermanentLoss(ratio) * 100)}
              r={4.5}
              className="fill-primary"
            />
            {label && (
              <text
                x={x(ratio) - 8}
                y={y(impermanentLoss(ratio) * 100) + 4}
                textAnchor="end"
                fontSize={13}
                fontWeight={700}
                className="fill-base-content"
              >
                {label}
              </text>
            )}
          </g>
        ))}
      </svg>
      <figcaption className="text-sm opacity-70">
        Eje horizontal: cuántas veces cambia el precio de un token respecto al
        otro (escala logarítmica). Eje vertical: pérdida frente a mantener los
        tokens, antes de comisiones.
      </figcaption>
    </figure>
  );
}
