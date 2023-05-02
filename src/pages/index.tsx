import Image from "next/image";
import { Inter } from "next/font/google";
import { LoginContainer } from "@/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LoginContainer>
      <h1>Hi</h1>
    </LoginContainer>
  );
}
