import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { chimney, type ChimneyService } from "@/data/chimney";
import FlueSweep from "@/components/chimney/FlueSweep";
import EstimateForm from "@/components/chimney/EstimateForm";
import {
  DryerVent,
  DuctRun,
  FlueTile,
  Mark,
  Skyline,
  StackCap,
  StackDetail,
} from "@/components/chimney/Drawings";
import "./chimney.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--dca-font",
  display: "swap",
});

const title = `${chimney.name} | Chimney Sweep & Air Duct Cleaning in ${chimney.area}`;
const description =
  "Chimney sweeps and inspections, chimney repair, air duct cleaning and dryer vent cleaning in DC, Maryland and Virginia. Licensed and insured. Same-day appointments, seven days a week. Free estimates.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0e1620" };

function Checklist({ service }: { service: ChimneyService }) {
  return (
    <ul className="dca-list">
      {service.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CallLink({ about }: { about: string }) {
  return (
    <a className="dca-link" href={`tel:${chimney.phone}`}>
      Call about {about}
    </a>
  );
}

function Level({ name }: { name: string }) {
  return (
    <div className="dca-slab" aria-hidden="true">
      <span>{name}</span>
    </div>
  );
}

export default function ChimneyPage() {
  const { repair, ducts, sweep, dryer } = chimney.services;

  return (
    <div className={`dca ${archivo.variable}`}>
      <a className="dca-skip" href="#main">
        Skip to content
      </a>

      <div className="dca-run">
        <div className="dca-flue" aria-hidden="true">
          <FlueSweep />
        </div>
        <div className="dca-firebox" aria-hidden="true" />

        <header className="dca-hero">
          <Skyline />
          <div className="dca-stack" aria-hidden="true">
            <StackCap />
          </div>
          <nav className="dca-nav" aria-label="Main">
            <a className="dca-wordmark" href="#top" id="top">
              <Mark />
              <span>{chimney.name}</span>
            </a>
            <a className="dca-nav-phone" href={`tel:${chimney.phone}`}>
              {chimney.phoneDisplay}
            </a>
          </nav>

          <div className="dca-hero-copy">
            <h1>
              Chimney sweeps and air duct cleaning across DC, Maryland and Virginia
            </h1>
            <p className="dca-lede">
              The flue, the ducts and the dryer vent are the parts of a house nobody looks at.
              Scroll down through this one to see what we clean and repair.
            </p>
            <div className="dca-actions">
              <a className="dca-btn dca-btn-primary" href={`tel:${chimney.phone}`}>
                Call {chimney.phoneDisplay}
              </a>
              <a className="dca-btn dca-btn-quiet" href="#estimate">
                Get a free estimate
              </a>
            </div>
            <ul className="dca-facts">
              {chimney.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </header>

        <main id="main" className="dca-house">
          <Level name={repair.level} />
          <section className="dca-room dca-room-split" id={repair.id}>
            <div className="dca-room-copy">
              <h2>{repair.title}</h2>
              <p>{repair.body}</p>
              <Checklist service={repair} />
              <CallLink about="a chimney repair" />
            </div>
            <StackDetail />
          </section>

          <Level name={ducts.level} />
          <section className="dca-room dca-room-ducts" id={ducts.id}>
            <DuctRun />
            <div className="dca-room-cols">
              <div className="dca-room-copy">
                <h2>{ducts.title}</h2>
                <p>{ducts.body}</p>
              </div>
              <div className="dca-room-copy">
                <Checklist service={ducts} />
                <CallLink about="air duct cleaning" />
              </div>
            </div>
          </section>

          <Level name={sweep.level} />
          <section className="dca-room dca-room-split dca-room-sweep" id={sweep.id}>
            <div className="dca-room-copy">
              <h2>{sweep.title}</h2>
              <p>{sweep.body}</p>
              <Checklist service={sweep} />
              <CallLink about="a chimney sweep" />
            </div>
            <figure className="dca-figure">
              <FlueTile />
              <figcaption>
                <span>Before the sweep</span>
                <span>After</span>
              </figcaption>
            </figure>
          </section>
        </main>
      </div>

      <div className="dca-house dca-house-below">
        <Level name={dryer.level} />
        <section className="dca-room dca-room-split dca-room-dryer" id={dryer.id}>
          <div className="dca-room-copy">
            <h2>{dryer.title}</h2>
            <p>{dryer.body}</p>
            <Checklist service={dryer} />
            <CallLink about="dryer vent cleaning" />
          </div>
          <DryerVent />
        </section>
        <div className="dca-footing" aria-hidden="true" />
      </div>

      <section className="dca-estimate" id="estimate">
        <div className="dca-estimate-copy">
          <h2>Get a free estimate</h2>
          <p>
            Tell us what needs doing and we will call you back. Or call now: we book same-day
            appointments, seven days a week.
          </p>
          <a className="dca-phone-big" href={`tel:${chimney.phone}`}>
            {chimney.phoneDisplay}
          </a>
        </div>
        <EstimateForm />
      </section>

      <section className="dca-faq" aria-labelledby="dca-faq-title">
        <h2 id="dca-faq-title">Questions before you call</h2>
        <div className="dca-faq-list">
          {chimney.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="dca-footer">
        <div className="dca-wordmark">
          <Mark />
          <span>{chimney.name}</span>
        </div>
        <ul>
          {Object.values(chimney.services).map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ul>
        <p>
          Serving {chimney.area}. {chimney.facts[0]}.
          <br />
          <a href={`tel:${chimney.phone}`}>{chimney.phoneDisplay}</a>
        </p>
        <p className="dca-copyright">
          &copy; {new Date().getFullYear()} {chimney.name}
        </p>
      </footer>

      <a className="dca-callbar" href={`tel:${chimney.phone}`}>
        Call {chimney.phoneDisplay}
      </a>
    </div>
  );
}
