import Image from "next/image";
import styles from "./page.module.css";
import BannerCTA from "@/components/bannerCTA";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {

  await sleep(3500);

  // throw new Error("Erro simulado!!");

  return (
    <>
      <body>

        <div className="espaco">

          <div className="box_txt">
            <div>
            <h1>Convert More Leads</h1>
            </div>
            
            <p>Create custom Landing pages with Unbounce that convert more visitors than any website - no coding required.</p>

            <button className="bot">Start my Free Trial</button>
          </div>
         

          {/* <img className="imagem" src="/imagens/mulher.png" alt="" /> */}

        </div>

        <BannerCTA/>

      

      </body>

    </>
  );
}
