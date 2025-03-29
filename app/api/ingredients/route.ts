import { prisma } from "@/prisma/prisma-client";
import { httpCodes } from "@/utils/http-codes";
import { NextResponse } from "next/server";
import { handleError } from "../errorHandler";

export async function GET() {
  try {
    const ingredients = await prisma.ingredient.findMany();
    return NextResponse.json(ingredients, { status: httpCodes.OK });
  } catch (error) {
    return handleError(error);
  }
}
