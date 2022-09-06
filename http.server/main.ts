import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Test Request One!!!");
}

console.log("Listening  127.0.0.1:8080");
serve(handler, {port: 8080});
