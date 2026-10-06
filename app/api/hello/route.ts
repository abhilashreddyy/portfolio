// A Vercel Function. On Vercel this runs on Fluid compute, not on the CDN.
// Locally it runs inside `next dev`.
export async function GET() {
  return Response.json({
    message: "Hello from a Vercel Function",
    time: new Date().toISOString(),
    region: process.env.VERCEL_REGION ?? "local",
    runtime: `node ${process.version}`,
  });
}
