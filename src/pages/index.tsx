import Image from "next/image";
import { Inter } from "next/font/google";
import { DashBoardLayout } from "@/layout";
import { OrderCard } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DashBoardLayout>
      <section>
        <div>
          <h1 className="text-[45px] font-bold">Welcome Promise</h1>
          <p className="capitalize text-gray-100 text-[16px] mt-1">
            Where do you want to start today
          </p>
        </div>
        <div>
          <OrderCard value="0" title="jhgf" />
        </div>
      </section>
    </DashBoardLayout>
  );
}
