import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <main className="px-4 lg:px-0 max-w-[600px] mx-auto">
      <header className="mt-32 flex flex-col">
        {/* <div className="w-10 h-10 rounded-md bg-slate-200"></div> */}
        <h1 className="text-lg font-bold mt-5">Ivan Minutillo</h1>
        <h2 className="text-muted-foreground">Product manager and designer</h2>
      </header>

      <section className="mt-16">
        <h3 className="text-sm text-muted-foreground font-mono">Today</h3>
        <p className="text-foreground/80 mt-4">
        I am building <a className="underline font-medium" href="https://bonfirenetworks.org">Bonfire Networks</a>.<br/>
        I leverage technology to contribute to projects that foster cooperation, self-governance, and resilience within communities. Driven by a scientific and human-centered approach, I am particularly drawn to initiatives that explore novel ways of thriving on our planet. <br/>
        I firmly believe in the power of open source and the commons to drive positive change and create a more equitable and regenartive future.
        </p>
      </section>

      <section className="work mt-16 border-t border-foreground/20 pt-8">
        <h3 className="text-sm mb-4 text-muted-foreground font-mono">Work</h3>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <Image
                  src="/bonfire.png"
                  alt="bonfire Logo"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
                <p className="text-sm font-mono text-muted-foreground leading-none">Founder</p>
                <p className="text-sm font-semibold leading-none">Bonfire Networks</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Co-founded <a className="underline font-medium" href="https://bonfirenetworks.org">Bonfire</a>, a modular open-source framework for designing federated digital spaces.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
            <div className="flex items-center gap-4">
                <Image
                  src="/moodle.jpg"
                  alt="MoodleNet Logo"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
                <p className="text-sm font-mono text-muted-foreground leading-none">Product</p>
                <p className="text-sm font-semibold leading-none">MoodleNet</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Designed and developed the <a href="moodle.net" className="underline font-medium">MoodleNet</a> App, a social network for educators, as part of an R&D project at Moodle
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
            <div className="flex items-center gap-4">
                <Image
                  src="/cat.png"
                  alt="Catalyst Logo"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
                <p className="text-sm font-mono text-muted-foreground leading-none">Product</p>
                <p className="text-sm font-semibold leading-none">Catalyst: UK Universal Credits</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
                Prototyped, tested and identified a way to provide seamless remote support for online <a href="https://medium.com/sector-challenge-9-claiming-universal-credit/archive" className="font-medium underline">UK Universal Credit claims.</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
            <div className="flex items-center gap-4">
                <Image
                  src="/reflow.png"
                  alt="reflow Logo"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
                <p className="text-sm font-mono text-muted-foreground leading-none">Product</p>
                <p className="text-sm font-semibold leading-none">Reflow EU</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            Lead the <a href="reflowproject.eu" className="underline font-medium">Reflow Project</a> development team, developing the Reflow-os backend and GraphQL API for the Reflow platform.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
            <div className="flex items-center gap-4">
                <Image
                  src="/uniquid.png"
                  alt="uniquid Logo"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
                <p className="text-sm font-mono text-muted-foreground leading-none">Designer</p>
                <p className="text-sm font-semibold leading-none">Uniquid</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
             Designed and developed the dashboard for <a href="uniquid.co" className="underline font-medium">Uniquid</a>, a startup focused on developing secure IoT communication on top of the Bitcoin network.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-16 border-t border-foreground/20 pt-8">
        <h3 className="text-sm mb-8 text-muted-foreground font-mono">Projects</h3>

        <div className="flex flex-col gap-2">
          <a href="https://openscience.network" className="text-sm hover:underline font-semibold">Open Science Network</a>
          <p className="text-muted-foreground text-sm">We are a network of scientists, developers and organizations building the next generation of digital spaces for open science.</p>
        </div>
      </section>
      
      <section className="my-16 border-t border-foreground/20 pt-8">
        <h3 className="text-sm mb-8 text-muted-foreground font-mono">Say Hello</h3>

        <div className="flex flex-col gap-4">
          <div className="flex gap-6 items-center">
            <span className="font-semibold text-sm min-w-[100px]">Email</span>
            <span className="text-muted-foreground text-sm">minutilloivan@pm.me</span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="font-semibold text-sm min-w-[100px]">Fediverse</span>
            <a className="text-muted-foreground text-sm hover:underline" href="https://social.coop/@bernini">@bernini@social.coop</a>
          </div>
          <div className="flex gap-6 items-center">
            <span className="font-semibold text-sm min-w-[100px]">Github</span>
            <a className="text-muted-foreground text-sm hover:underline" href="https:/github.com/@ivanminutillo">@ivanminutillo</a>
          </div>
        </div>
      </section>
    </main>
  );
}
