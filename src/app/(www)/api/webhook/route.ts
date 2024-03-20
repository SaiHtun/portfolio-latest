import { createHmac, timingSafeEqual } from "crypto";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";
import { sanityWebhookSecret } from "~/app-env";

export async function POST(request: NextRequest) {
  try {
    const searchParams = await request.nextUrl.searchParams;
    const validationTag = searchParams.get("validationTag");
    const untrustedSignature = request.headers.get("x-sanity-signature");

    if (!(validationTag && untrustedSignature)) {
      return new Response("No validationTag provided.", { status: 400 });
    }

    const signature = createHmac("sha256", sanityWebhookSecret)
      .update(validationTag)
      .digest("hex");

    const trusted = Buffer.from(`sha256=${signature}`, "ascii");
    const untrusted = Buffer.from(untrustedSignature, "ascii");

    if (!timingSafeEqual(trusted, untrusted)) {
      return new Response("Invalid signature.", { status: 400 });
    }

    console.log(`Revalidating, ${validationTag}`);
    validationTag.split(",").forEach((tag) => revalidateTag(tag));
  } catch (error) {
    return new Response(`webhook error: ${(error as Error).message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
