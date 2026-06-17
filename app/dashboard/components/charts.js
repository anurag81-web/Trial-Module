import { useState, useEffect, useRef } from "react";

const labels = ["Q1", "Q2", "Q3", "Q4"];
const values = [42, 78, 55, 91];
const colors = ["#378ADD", "#1D9E75", "#D85A30", "#534AB7"];

const tabs = [
    { key: "bar", label: "Bar" },
    { key: "line", label: "Line" },
    { key: "doughnut", label: "Donut" },
];

export default function Chart() {
    const [activeType, setActiveType] = useState("bar");
    const canvasRef = useRef(null);
    const chartRef = useRef(null);
    const [ready, setReady] = useState(!!window.Chart);
    useEffect(() => {
        if (window.Chart) return;
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
        s.onload = () => setReady(true);
        document.head.appendChild(s);
    }, []);
    useEffect(() => {
        if (!ready || !canvasRef.current) return;
        if (chartRef.current) chartRef.current.destroy();

        const isDonut = activeType === "doughnut";
        const isLine = activeType === "line";
        const total = values.reduce((a, b) => a + b, 0);

        chartRef.current = new window.Chart(canvasRef.current, {
            type: activeType,
            data: {
                labels,
                datasets: [{data: values,
                    ...(isDonut ? { backgroundColor: colors, borderWidth: 3, borderColor: "transparent", hoverOffset: 8 } : isLine 
                        ? { borderColor: "#378ADD", backgroundColor: "rgba(55,138,221,0.1)", fill: true, tension: 0.4, pointBackgroundColor: "#378ADD", pointRadius: 5 } : { backgroundColor: colors, borderRadius: 6, borderSkipped: false }),
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => isDonut ? ` ${ctx.label}: ${ctx.parsed} (${Math.round((ctx.parsed / total) * 100)}%)` : ` ${ctx.parsed}`,
                        },
                    },
                },
                ...(isDonut ? { cutout: "68%" } : {
                        scales: {
                            x: { grid: { display: false }, ticks: { color: "#9ca3af" } },
                            y: { grid: { color: "rgba(156,163,175,0.2)" }, ticks: { color: "#9ca3af" }, beginAtZero: true },
                        },
                    }),
            },
        });
        return () => chartRef.current?.destroy();
    }, [activeType, ready]);

    return (
        <div className="bg-[#1B1B24] ml-2 mt-4 w-full p-6 rounded-3xl shadow-sm border border-white/8 transition-transform duration-200 hover:-translate-y-1 hover:border-white/20 cursor-defaults">

            <div className="mb-5">
                <h2 className="text-xl font-semibold text-white">Quarterly Sales</h2>
                <p className="text-sm text-gray-400 mt-0.5">Q1 – Q4 overview</p>
            </div>

            <div className="flex gap-2 mb-5">
                {tabs.map(({ key, label }) => {
                    const active = key === activeType;
                    return (
                        <button key={key} onClick={() => setActiveType(key)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer
                            ${active ? "bg-blue-500 text-white border-2 border-blue-500" : "bg-transparent text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
                {labels.map((l, i) => (
                    <span key={l} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ backgroundColor: colors[i] }} />
                        {l}: <span className="text-gray-700 font-medium">{values[i]}</span>
                    </span>
                ))}
            </div>

            <div className="relative w-full h-64">
                {!ready && (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-300">
                        Loading…
                    </div>
                )}
                <canvas ref={canvasRef} role="img" aria-label="Quarterly sales chart" />
            </div>
        </div>
    );
}