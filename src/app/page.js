import Image from "next/image";
import bg from "../../public/background/home-background.jpg"
import RenderModel from "@/components/RenderModel";
import Baloon from "@/components/models/Baloon";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-50 -z-50"/>
    <div className="w-full h-screen">
      {/* Navigation and 3D model */}
      <Navigation />
      <RenderModel>
        <Baloon />
      </RenderModel>
    </div>
    </main>
  );
}
