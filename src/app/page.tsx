import Image from "next/image";
import { Button } from "@/components/ui/button"
import { SignInButton, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div>This screen for auth</div>
        <div>
          <UserButton/>
        </div>
      </div>

    </>



  );
}
