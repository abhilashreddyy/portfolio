import * as profile from "@/content/profile";

// Machine-readable version of the site, from the same source file.
// Runs as a Vercel Function.
export async function GET() {
  return Response.json(
    {
      identity: profile.identity,
      availability: profile.availability,
      thesis: profile.thesis,
      roles: profile.roles,
      projects: profile.projects,
      education: profile.education,
      skills: profile.skills,
      principles: profile.principles,
      generatedAt: new Date().toISOString(),
    },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
