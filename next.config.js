module.exports = {
reactStrictMode: true,
swcMinify: true
}

D) vercel.json
{
"version": 2,
"builds": [
{ "src": "apps/dashboard/pages/**/.{ts,tsx,js,jsx}", "use": "@vercel/next" }
],
"routes": [
{ "src": "/(.)", "dest": "/apps/dashboard/pages/index.tsx" }
]
}
