/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-100": "#F4EAFE",
                "primary-200": "#E9D6FD",
                "primary-300": "#DAC1FA",
                "primary-400": "#CCAFF6",
                "primary-500": "#B795F1",
                "primary-600": "#8D6CCF",
                "primary-700": "#684BAD",
                "primary-800": "#472F8B",
                "primary-900": "#2F1C73",
                "success-100": "#F3FBD1",
                "success-200": "#E5F7A5",
                "success-300": "#CCE975",
                "success-400": "#AED34F",
                "success-500": "#87B71F",
                "success-600": "#6E9D16",
                "success-700": "#57830F",
                "success-800": "#426A09",
                "success-900": "#335705",
                "info-100": "#DFECFE",
                "info-200": "#C0D8FE",
                "info-300": "#A0C2FE",
                "info-400": "#89AFFD",
                "info-500": "#6290FC",
                "info-600": "#476ED8",
                "info-700": "#3150B5",
                "info-800": "#1F3692",
                "info-900": "#122478",
                "warning-100": "#FEF5D1",
                "warning-200": "#FEE7A4",
                "warning-300": "#FDD676",
                "warning-400": "#FBC554",
                "warning-500": "#F9A91D",
                "warning-600": "#D68815",
                "warning-700": "#B36B0E",
                "warning-800": "#905009",
                "warning-900": "#773D05",
                "danger-100": "#FFEAE1",
                "danger-200": "#FFD0C3",
                "danger-300": "#FFB0A6",
                "danger-400": "#FF9390",
                "danger-500": "#FF6B74",
                "danger-600": "#DB4E63",
                "danger-700": "#B73555",
                "danger-800": "#932247",
                "danger-900": "#7A143F",
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                calendar: {
                    DEFAULT: 'hsl(var(--calendar))',
                    foreground: 'hsl(var(--calendar-foreground))',
                    muted: 'hsl(var(--calendar-muted))',
                    'muted-foreground': 'hsl(var(--calendar-muted-foreground))',
                    accent: 'hsl(var(--calendar-accent))',
                    'accent-foreground': 'hsl(var(--calendar-accent-foreground))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                twodo: {
                    purple: '#9b87f5',
                    'light-purple': '#E5DEFF',
                    'gradient-start': '#f0e7ff',
                    'gradient-end': '#c9a9ff',
                }
            },
        }
    }
}
