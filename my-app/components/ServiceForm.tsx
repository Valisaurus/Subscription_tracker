import Messages from "@/app/login/messages";
import { useState } from "react";
import TermsAndConditions from "./TermsAndConditions";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";



export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const price = Number(formData.get("price"));
  const supabase = createRouteHandlerClient({ cookies });



const ServiceForm = () => {
  return (
    <form method="post">
      <div className="flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6">
            <input
              className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@here.com"
              required
            />
            <input
              className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
          <button
            className={`bg-green-700 px-4 py-2 mb-2 w-[250px] text-white`}
          >
            Sign In
          </button>
          <button
            className="border border-gray-700 px-4 py-2 mb-2 w-[200px] text-black dark:text-white"
            onClick={(e: any) => {
              e.preventDefault();
              setRenderTerms(true);
              setRenderTopLogo(true);
            }}
          >
            Sign Up
          </button>
          <button
            formAction="/auth/reset"
            className="border border-gray-700 px-4 py-2 mb-2 w-[180px] text-black dark:text-white"
          >
            Forgot password?
          </button>
          <Messages />
        </div>
      </div>
    </form>
  );
};

export default ServiceForm;
