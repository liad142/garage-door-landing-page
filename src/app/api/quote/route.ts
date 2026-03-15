import { NextRequest, NextResponse } from "next/server";
import { brands } from "@/data/brands";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, brand: brandSlug } = body;

    if (!name || !phone || !service || !brandSlug) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const brand = brands[brandSlug];
    if (!brand) {
      return NextResponse.json({ error: "Invalid brand" }, { status: 400 });
    }

    // Send via Web3Forms (free, no API key needed for formsubmit)
    const emailTo = brand.email;

    const response = await fetch("https://formsubmit.co/ajax/" + emailTo, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        service,
        _subject: `New Lead from ${brand.name} Website - ${service}`,
        _template: "table",
        brand: brand.name,
        area: brand.area,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
