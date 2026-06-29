'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
const values = [42, 78, 55, 91];
const colors = ['#378ADD', '#1D9E75', '#D85A30', '#534AB7'];

const tabs = [
    { key: 'line', label: 'Line' },
    { key: 'bar', label: 'Bar' },
    { key: 'doughnut', label: 'Donut' },
];

export default function Chart() {
    const [activeType, setActiveType] = useState('line');
    const canvasRef = useRef(null);
    const chartRef = useRef(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (!canvasRef.current) return;
        if (chartRef.current) chartRef.current.destroy();

        const isDark = resolvedTheme === 'dark';
        const isDonut = activeType === 'doughnut';
        const isLine = activeType === 'line';
        const total = values.reduce((a, b) => a + b, 0);

        const tickColor = isDark ? '#71717a' : '#6b7280';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,0.06)';
        const cardBgColor = isDark ? '#121214' : '#FFFFFF';

        const ctx = canvasRef.current.getContext('2d');
        let lineGradient = 'rgba(55,138,221,0.1)';
        if (ctx) {
            const gradient = ctx.createLinearGradient(0, 0, 0, 240);
            gradient.addColorStop(0, 'rgba(55, 138, 221, 0.35)');
            gradient.addColorStop(1, 'rgba(55, 138, 221, 0.0)');
            lineGradient = gradient;
        }

        chartRef.current = new ChartJS(canvasRef.current, {
            type: activeType,
            data: {
                labels,
                datasets: [{
                    data: values,
                    ...(isDonut 
                        ? { 
                            backgroundColor: colors, 
                            borderWidth: 2, 
                            borderColor: cardBgColor, 
                            hoverOffset: 6 
                          } 
                        : isLine
                            ? { 
                                borderColor: '#378ADD', 
                                borderWidth: 3,
                                backgroundColor: lineGradient, 
                                fill: true, 
                                tension: 0.4, 
                                pointBackgroundColor: '#378ADD', 
                                pointBorderColor: cardBgColor,
                                pointBorderWidth: 1.5,
                                pointRadius: 5, 
                                pointHoverRadius: 7,
                                pointHoverBorderWidth: 2
                              } 
                            : { 
                                backgroundColor: colors, 
                                borderRadius: 8, 
                                borderSkipped: false,
                                hoverBackgroundColor: colors.map(c => c + 'E6')
                              }
                    ),
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: isDark ? '#1E1F20' : '#FFFFFF',
                        titleColor: isDark ? '#FFFFFF' : '#18181b',
                        bodyColor: isDark ? '#a1a1aa' : '#4b5563',
                        borderColor: isDark ? '#3E4042' : '#E2E2E6',
                        borderWidth: 1,
                        padding: 10,
                        cornerRadius: 8,
                        displayColors: false,
                        titleFont: {
                            family: 'Inter, sans-serif',
                            weight: '600',
                            size: 12
                        },
                        bodyFont: {
                            family: 'Inter, sans-serif',
                            size: 12
                        },
                        callbacks: {
                            label: (ctx) => isDonut 
                                ? ` ${ctx.label}: ${ctx.parsed} (${Math.round((ctx.parsed / total) * 100)}%)` 
                                : ` ${ctx.label}: ${ctx.parsed}`,
                        },
                    },
                },
                ...(isDonut ? { cutout: '72%' } : {
                    scales: {
                        x: { 
                            grid: { display: false }, 
                            ticks: { color: tickColor, font: { family: 'Inter, sans-serif', size: 11 } } 
                        },
                        y: { 
                            grid: { 
                                color: gridColor,
                                borderDash: [5, 5],
                                drawTicks: false
                            }, 
                            ticks: { color: tickColor, font: { family: 'Inter, sans-serif', size: 11 } }, 
                            beginAtZero: true 
                        },
                    },
                }),
            },
        });
        return () => chartRef.current?.destroy();
    }, [activeType, resolvedTheme]);

    return (
        <div className="bg-card w-full p-6 rounded-3xl shadow-sm border border-border-color transition-all duration-200 hover:-translate-y-1 hover:border-border-color/80 dark:hover:border-white/20 cursor-default">
            <div className="mb-5">
                <h2 className="text-xl font-semibold text-foreground">Quarterly Sales</h2>
                <p className="text-sm text-muted mt-0.5">Q1 – Q4 overview</p>
            </div>

            <div className="flex gap-2 mb-5">
                {tabs.map(({ key, label }) => {
                    const active = key === activeType;
                    return (
                        <button 
                            key={key} 
                            onClick={() => setActiveType(key)} 
                            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer border ${
                                active 
                                    ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-600 hover:border-blue-500 shadow-sm" 
                                    : "bg-transparent text-muted border-border-color hover:text-foreground hover:bg-sidebar-hover"
                            }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
                {labels.map((l, i) => (
                    <span key={l} className="flex items-center gap-1.5 text-xs text-muted"> <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ backgroundColor: colors[i] }} />{l}: <span className="text-foreground font-medium">{values[i]}</span></span>
                ))}
            </div>

            <div className="relative w-full h-64">
                <canvas ref={canvasRef} role="img" aria-label="Quarterly sales chart" />
            </div>
        </div>
    );
}