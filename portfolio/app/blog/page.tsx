"use client";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { WarpBackground } from "@/components/magicui/warp-background";

export default function Blog() {
  return (
    <div className=" mt-40">
      <WarpBackground className="flex justify-center">
        <LineShadowText className="italic flex justify-center">
          Work In Progress
        </LineShadowText>
      </WarpBackground>
    </div>
  );
}
