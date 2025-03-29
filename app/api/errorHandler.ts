import { httpCodes } from "@/utils/http-codes";
import { NextResponse } from "next/server";

export const handleError = (error: unknown) => {
  console.error(error);
  return NextResponse.json(
    { error: "Something went wrong" },
    { status: httpCodes.INTERNAL_SERVER_ERROR }
  ); //500
};