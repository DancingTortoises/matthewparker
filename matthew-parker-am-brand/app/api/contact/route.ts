import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const inquiryType = String(formData.get("inquiryType") || "").trim();

  if (!name || !email || !inquiryType) {
    return NextResponse.json(
      { ok: false, message: "Name, email, and inquiry type are required." },
      { status: 400 }
    );
  }

  // Production handoff: connect this endpoint to an approved intake, email,
  // CRM, or scheduling workflow. Do not persist sensitive information here.
  return NextResponse.json({ ok: true });
}
