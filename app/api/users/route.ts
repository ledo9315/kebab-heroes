import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { httpCodes } from "@/utils/http-codes";
import { handleError } from "../errorHandler";

// 🟢 GET
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: httpCodes.OK }); //200
  } catch (error) {
    return handleError(error);
  }
}

// 🔵 POST
export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: httpCodes.BAD_REQUEST }
      ); //400
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: httpCodes.BAD_REQUEST }
      ); //400
    }

    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password,
        verified: new Date(),
      },
    });

    return NextResponse.json(newUser, { status: httpCodes.CREATED }); //201
  } catch (error) {
    handleError(error);
  }
}

// 🟠 PUT

// 🔴 DELETE
