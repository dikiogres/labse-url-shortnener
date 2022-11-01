import { NextFetchEven, NextRequest, NextApiResponse, NextFetchEvent } from "next/server";
import { nanoid } from "nanoid";

export function middleware(req: NextRequest, ev: NextFetchEvent){
    if(){
        const random = nanoid();

        const res = NextResponse.next();

        res.cookie("poll-token", random {
            sameSite: "strict"
        });

        return res;
    }
}
