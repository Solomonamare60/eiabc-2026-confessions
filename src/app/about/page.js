import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/reveal";
import { Arrow, Diamond, Sprig } from "@/components/marks";
import { PETALS } from "@/lib/letters";

export const metadata = {
  title: "About",
  description:
    "What the EiABC Confessions 2026 wall is, how it works, and the house rules.",
};

/** The Instagram account people message to ask for a note to come down. */
const HANDLE = "@eiabc2026";

/** Things that were deliberately never built. Struck through, on purpose. */
const ABSENT = [
  "likes",
  "replies",
  "followers",
  "a feed",
  "an algorithm",
  "notifications",
  "an account",
  "any way to know who read it",
];

const RULES = [
  "Write about your own experience and feelings.",
  "Leave out names, phone numbers, ID numbers, addresses, or anything else that could identify you or another person.",
  "No threats, harassment, or accusations about named people.",
  "Every note is read before it goes up. We may decline or remove a note, but we never edit one.",
  "This wall is not a support service. If you are struggling, please talk to someone you trust or to a professional.",
];

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span />
      <Diamond />
      <span />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="scroll-surface about">
      {/* pressed flowers, kept out in the margins where there is room */}
      <Image
        src={PETALS[2].src}
        alt=""
        width={220}
        height={218}
        aria-hidden="true"
        className="about-petal about-petal-a"
      />
      <Image
        src={PETALS[4].src}
        alt=""
        width={200}
        height={198}
        aria-hidden="true"
        className="about-petal about-petal-b"
      />

      <div className="mx-auto w-full max-w-[42rem] px-6 pb-32 pt-32 sm:px-8 sm:pt-44">
        {/* ---------------------------------------------------------- hero */}
        <Reveal as="header">
          <Sprig size={34} className="text-[var(--rose)] opacity-45" />
          <p className="eyebrow mt-8">about</p>
          <h1 className="display mt-5 text-[clamp(2.1rem,1.5rem+3vw,3.5rem)]">
            Everyone is carrying a sentence
            <br />
            they never said out loud.
          </h1>
          <p className="mt-7 max-w-[30rem] text-[1.05rem] leading-[1.8] text-[var(--ink-2)]">
            This is somewhere to put it down. An anonymous wall for the EiABC
            community.
          </p>
        </Reveal>

        <Divider />

        {/* ----------------------------------------------------------- why */}
        <Reveal as="section">
          <p className="lede">
            Most of what we feel never gets said. Not because it does not
            matter, but because saying it costs something. It would embarrass
            somebody, or reopen something, or arrive years too late to be any
            use at all.
          </p>

          <blockquote className="pull">
            So it stays in. And it keeps its weight.
          </blockquote>

          <p className="mt-8 text-[1.02rem] leading-[1.85]">
            This site does not fix that. It just gives the sentence somewhere to
            go. You write it once, without your name on it, and it stops being
            only yours. That is a smaller thing than closure and a bigger thing
            than nothing.
          </p>
        </Reveal>

        <Divider />

        {/* ------------------------------------------------- what isn't here */}
        <Reveal as="section">
          <p className="eyebrow">what this place doesn&apos;t have</p>
          <ul className="struck mt-9">
            {ABSENT.map((thing, index) => (
              <li key={thing} style={{ "--i": index }}>
                {thing}
              </li>
            ))}
          </ul>
          <p className="mt-9 text-[1.02rem] leading-[1.85] text-[var(--ink-2)]">
            Every one of those was left out on purpose. What is left is a quiet
            room with other people&apos;s handwriting on the walls, and no way
            to be rewarded for being in it.
          </p>
          <p className="mt-5 text-[0.95rem] leading-[1.8] text-[var(--ink-3)]">
            Be gentle in here. Every note is real, and somebody is still living
            inside the situation they wrote about.
          </p>
        </Reveal>

        <Divider />

        {/* ------------------------------------------------------ how it works */}
        <Reveal as="section">
          <p className="eyebrow">how it works</p>
          <h2 className="display mt-4 text-[clamp(1.9rem,1.4rem+2vw,2.9rem)]">
            Every note is read first.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-[var(--ink-2)]">
            Nothing goes up on its own. When you send a note, it waits out of
            sight until a moderator has read it. Only then does it appear on the
            wall.
          </p>
        </Reveal>

        <Divider />

        {/* ------------------------------------------------------ house rules */}
        <Reveal as="section">
          <p className="eyebrow">house rules</p>
          <ul className="mt-8 list-disc space-y-3 pl-5 text-[1.02rem] leading-[1.8] text-[var(--ink-2)] marker:text-[var(--rose)]">
            {RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className="mt-8 text-[1.02rem] leading-[1.85] text-[var(--ink-2)]">
            Want a note taken down? Message us on Instagram at{" "}
            <strong>{HANDLE}</strong>, tell us which note it is, and we will
            remove it as soon as we can.
          </p>
        </Reveal>

        <Divider />

        {/* ---------------------------------------------------------- privacy */}
        <Reveal as="section">
          <p className="eyebrow">privacy</p>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-[var(--ink-2)]">
            We do not ask for your name, your email, or an account. We store what
            you write (the text, title, signature and mood) and the time you
            sent it.
          </p>
          <p className="mt-5 text-[1.02rem] leading-[1.85] text-[var(--ink-2)]">
            To stop one person flooding the wall, the site briefly keeps a
            scrambled, one-way version of your network address, never the
            address itself. Scrambled addresses older than an hour are wiped
            whenever a new note arrives.
          </p>
          <p className="mt-5 text-[0.95rem] leading-[1.8] text-[var(--ink-3)]">
            We cannot promise perfect anonymity. The moderator reads every note
            before it is published, and the services that host this site and its
            database (Vercel and Neon) may keep their own technical logs. Please
            do not put anything in a note that identifies you or someone else.
          </p>
        </Reveal>

        <Divider />

        {/* ------------------------------------------------------------- close */}
        <Reveal as="section" className="text-center">
          <h2 className="display text-[clamp(1.7rem,1.3rem+1.8vw,2.5rem)]">
            There is space on the wall.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/write" className="btn">
              Write something
              <Arrow />
            </Link>
            <Link href="/read" className="btn btn-ghost">
              Walk the wall
            </Link>
          </div>
          <p className="mt-16 text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Adapted from{" "}
            <a
              href="https://github.com/farixdev/ThingsINeverSaid"
              className="underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--rose)]"
              target="_blank"
              rel="noreferrer"
            >
              Things I Never Said
            </a>{" "}
            by farixdev
          </p>
        </Reveal>
      </div>
    </main>
  );
}