import Image from "next/image";
import bg from "../../../public/background/projects-background.jpg"
import ProjectList from "@/components/projects";
import { projectsData } from "../data";
import RenderModel from "@/components/RenderModel";
import Hut from "@/components/models/BuilderHut";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-25"/>
        
        <ProjectList projects={projectsData}/>
        <div className="flex items-center justify-center fixed top-20 right-0 h-screen">
          <RenderModel>
            <Hut />
          </RenderModel>
        </div>
    </main>
  );
}
