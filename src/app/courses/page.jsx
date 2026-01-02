import Link from "next/link";
import styles from "./page.module.css";
import { COURSE_CATALOG } from "@/components/Layers/data/courseCatalog";

const COURSE_DETAILS = {
  "1": {
    level: "Starter",
    duration: "6 weeks",
    cadence: "45 min live, 5x weekly",
    focus: ["Everyday speaking drills", "Pronunciation clean-up", "Quick grammar refresh"],
  },
  "2": {
    level: "Foundation",
    duration: "8 weeks",
    cadence: "60 min live, 5x weekly",
    focus: ["Conversation stamina", "Listening speed", "Accent confidence"],
  },
  "3": {
    level: "Kids",
    duration: "6 weeks",
    cadence: "40 min live, 4x weekly",
    focus: ["Story-based learning", "Speaking games", "Parent progress updates"],
  },
  "4": {
    level: "Workplace",
    duration: "5 weeks",
    cadence: "60 min live, 4x weekly",
    focus: ["Meetings and emails", "Presentation practice", "Role-played scenarios"],
  },
  "5": {
    level: "Advanced",
    duration: "6 weeks",
    cadence: "75 min live, 4x weekly",
    focus: ["Nuanced grammar", "Persuasive speaking", "Interview simulations"],
  },
};

const LIVE_HIGHLIGHTS = [
  { label: "Live-first", text: "Interactive batches guided by bilingual coaches." },
  { label: "Proof of progress", text: "Weekly speaking scorecards and clips." },
  { label: "Small pods", text: "6-10 learners per session to keep it personal." },
];

const CURRICULUM = [
  { title: "Sound & Clarity", items: ["Accent-neutral drills", "Pace and pause control", "Intonation for meaning"] },
  { title: "Confidence in Context", items: ["Role-plays for work and campus", "Rapid-fire Q&A", "On-the-spot summaries"] },
  { title: "Story & Structure", items: ["Building crisp narratives", "Email and report tone", "Persuasion frameworks"] },
];

const NAV_GROUPS = [
  {
    title: "Spoken English",
    links: [
      { label: "Basic Spoken English", href: "/spoken-english/basic" },
      { label: "Basic to Communicable", href: "/spoken-english/intermediate" },
      { label: "Kids English Mastery Program", href: "/spoken-english/advanced" },
      { label: "Business English", href: "/spoken-engliish/advjanced" },
      { label: "Accented English", href: "/spoken-engliiish/advankced" },
    ],
  },
  {
    title: "Regional Languages",
    links: [
      { label: "Hindi For Foreigners", href: "/regional/hindi" },
      { label: "Sanskrit", href: "/regional/sanskrit" },
    ],
  },
  {
    title: "Session Booking",
    links: [
      { label: "English Master Classes", href: "/sessions/book" },
      { label: "Corporate Bootcamp", href: "/sessions/pricing" },
      { label: "1-1 Session", href: "/sessions/contact" },
      { label: "Institutional Seminars", href: "/sessions/contact" },
    ],
  },
  {
    title: "Entrance Exams",
    links: [
      { label: "IELTS", href: "/exams/ielts" },
      { label: "TOEFL", href: "/exams/toefl" },
      { label: "GRE", href: "/exams/gre" },
      { label: "PTE", href: "/exams/pte" },
    ],
  },
];

const SPOKEN_TRACKS = [
  {
    title: "Basic Spoken English",
    href: "/spoken-english/basic",
    focus: "Kickstart everyday conversations with grammar refreshers and fluency drills.",
    details: [
      "6 weeks · 45 min live · 5x weekly",
      "Pronunciation clean-up and common patterns",
      "Daily speaking drills with quick feedback",
    ],
  },
  {
    title: "Basic to Communicable",
    href: "/spoken-english/intermediate",
    focus: "Move from short replies to confident small talk, meetings, and campus chats.",
    details: [
      "8 weeks · 60 min live · 5x weekly",
      "Conversation stamina and listening speed",
      "Role-plays for meetings and campus life",
    ],
  },
  {
    title: "Kids English Mastery Program",
    href: "/spoken-english/advanced",
    focus: "Story-led sessions, speaking games, and gentle corrections for young learners.",
    details: [
      "6 weeks · 40 min live · 4x weekly",
      "Story-based learning and speaking games",
      "Parent-friendly progress nudges",
    ],
  },
  {
    title: "Business English",
    href: "/spoken-engliish/advjanced",
    focus: "Role-played meetings, email tone, and presentation practice for the workplace.",
    details: [
      "5 weeks · 60 min live · 4x weekly",
      "Meetings, presentations, and email tone",
      "Industry-flavored role-plays and feedback",
    ],
  },
  {
    title: "Accented English",
    href: "/spoken-engliiish/advankced",
    focus: "Accent clarity, pacing, and intonation for global conversations.",
    details: [
      "6 weeks · 75 min live · 4x weekly",
      "Accent clarity, pacing, intonation",
      "Recorded drills with coach notes",
    ],
  },
];

const REGIONAL_TRACKS = [
  {
    title: "Hindi For Foreigners",
    href: "/regional/hindi",
    focus: "Conversational Hindi with cultural cues, greetings, and daily scenarios.",
    details: [
      "5 weeks · 50 min live · 4x weekly",
      "Scripts, greetings, travel and daily needs",
      "Cultural cues and polite forms",
    ],
  },
  {
    title: "Sanskrit",
    href: "/regional/sanskrit",
    focus: "Foundations of pronunciation, shlokas, and structured grammar basics.",
    details: [
      "6 weeks · 45 min live · 3x weekly",
      "Pronunciation, meter, and simple shlokas",
      "Grammar basics with guided practice",
    ],
  },
];

const SESSION_TRACKS = [
  {
    title: "English Master Classes",
    href: "/sessions/book",
    focus: "Deep-dive workshops on fluency, storytelling, and public speaking.",
    details: [
      "Live workshops · weekend batches",
      "Storytelling, pace, and delivery",
      "Hands-on practice with peer feedback",
    ],
  },
  {
    title: "Corporate Bootcamp",
    href: "/sessions/pricing",
    focus: "Team-focused speaking labs, presentations, and meeting simulations.",
    details: [
      "Short sprints · 2-3 weeks",
      "Meeting simulations and decks",
      "Manager-ready reports and updates",
    ],
  },
  {
    title: "1-1 Session",
    href: "/sessions/contact",
    focus: "Personalized coaching with tailored drills and immediate feedback.",
    details: [
      "Flexible slots · custom goals",
      "Recorded drills with precise notes",
      "Fast iteration on your scripts",
    ],
  },
  {
    title: "Institutional Seminars",
    href: "/sessions/contact",
    focus: "Campus or org-wide seminars with interactive practice blocks.",
    details: [
      "Seminar or bootcamp formats",
      "Interactive speaking blocks",
      "Works for colleges or teams",
    ],
  },
];

const EXAM_TRACKS = [
  {
    title: "IELTS",
    href: "/exams/ielts",
    focus: "Speaking mock tests, writing templates, and listening speed drills.",
    details: [
      "Mocks with band-aligned feedback",
      "Writing templates and speaking drills",
      "Listening speed and note-taking",
    ],
  },
  {
    title: "TOEFL",
    href: "/exams/toefl",
    focus: "Integrated tasks, note-taking rhythms, and timed responses.",
    details: [
      "Integrated task simulations",
      "Timed responses and cadence",
      "Note-taking rhythms and review",
    ],
  },
  {
    title: "GRE",
    href: "/exams/gre",
    focus: "AWA structures, argument drills, and concise speaking summaries.",
    details: [
      "AWA templates and drills",
      "Argument breakdown and summaries",
      "Fluency for concise delivery",
    ],
  },
  {
    title: "PTE",
    href: "/exams/pte",
    focus: "Speaking clarity, retell lectures, and repeat sentence stamina.",
    details: [
      "Speaking clarity and timing",
      "Retell lectures and repeat sentences",
      "Automation-friendly scoring cues",
    ],
  },
];

function CourseCard({ course }) {
  const detail = COURSE_DETAILS[course.code];
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.badge}>{detail.level}</span>
        <h3>{course.name}</h3>
        <p className={styles.duration}>{detail.duration} · {detail.cadence}</p>
      </div>
      <ul className={styles.focusList}>
        {detail.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className={styles.cardFooter}>
        <Link
          href="https://wa.me/919217239714"
          className={styles.primaryCta}
          aria-label={`Talk to Language Vidya about ${course.name}`}
        >
          Talk to a coach
        </Link>
        <span className={styles.metaNote}>Starts weekly · Custom timings</span>
      </div>
    </article>
  );
}

export default function CoursesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Guided speaking journeys</p>
          <h1>Choose a course that matches your fluency now—and where you want to be next.</h1>
          <p className={styles.subhead}>
            Live, small-group sessions with daily speaking practice, role-plays, and feedback you can reuse at work or campus.
          </p>
          <div className={styles.heroActions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
              Plan my course
            </Link>
            <Link href="tel:+919217239714" className={styles.secondaryCta}>
              Call now
            </Link>
          </div>
          <div className={styles.highlightRow}>
            {LIVE_HIGHLIGHTS.map((item) => (
              <div key={item.label} className={styles.highlight}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroCard}>
          <p className={styles.heroTag}>Live practice outcomes</p>
          <ul>
            <li>Daily fluency drills and pronunciation clean-ups.</li>
            <li>Recorded snippets with coach notes every week.</li>
            <li>Interview and presentation labs with peers.</li>
            <li>Templates for emails, meetings, and quick updates.</li>
          </ul>
        </div>
      </section>

      {/* <section className={styles.catalog} aria-labelledby="course-catalog-heading">
        <div className={styles.sectionHead}>
          <h2 id="course-catalog-heading">Courses built for different starting points</h2>
          <p>Pick the track that fits your current fluency. We tune the speed, role-plays, and examples to your daily life.</p>
        </div>
        <div className={styles.grid}>
          {COURSE_CATALOG.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      </section> */}

      <section className={styles.spoken} aria-labelledby="spoken-heading">
        <div className={styles.sectionHead}>
          <h2 id="spoken-heading">Spoken English tracks</h2>
          <p>Choose the live track that matches how you speak today—from basics to business-ready.</p>
        </div>
        <div className={styles.trackGrid}>
          {SPOKEN_TRACKS.map((track) => (
            <article key={track.href} className={styles.trackCard}>
              <div className={styles.trackCardHead}>
                <h3>{track.title}</h3>
                <Link href={track.href} className={styles.secondaryCta}>
                  View details
                </Link>
              </div>
              <p className={styles.trackCopy}>{track.focus}</p>
              <ul className={styles.trackMeta}>
                {track.details?.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className={styles.trackActions}>
                <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
                  Talk to a coach
                </Link>
                <Link href={track.href} className={styles.offeringLink}>
                  Go to track
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.trackSection} aria-labelledby="regional-heading">
        <div className={styles.sectionHead}>
          <h2 id="regional-heading">Regional Languages</h2>
          <p>Learn Hindi or Sanskrit with guided pronunciation, context, and cultural cues.</p>
        </div>
        <div className={styles.trackGrid}>
          {REGIONAL_TRACKS.map((track) => (
            <article key={track.href} className={styles.trackCard}>
              <div className={styles.trackCardHead}>
                <h3>{track.title}</h3>
                <Link href={track.href} className={styles.secondaryCta}>
                  View details
                </Link>
              </div>
              <p className={styles.trackCopy}>{track.focus}</p>
              <div className={styles.trackActions}>
                <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
                  Talk to a coach
                </Link>
                <Link href={track.href} className={styles.offeringLink}>
                  Go to track
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.trackSection} aria-labelledby="sessions-heading">
        <div className={styles.sectionHead}>
          <h2 id="sessions-heading">Session Booking</h2>
          <p>Pick the live format—masterclass, bootcamp, or 1-1—that fits your schedule.</p>
        </div>
        <div className={styles.trackGrid}>
          {SESSION_TRACKS.map((track) => (
            <article key={track.href} className={styles.trackCard}>
              <div className={styles.trackCardHead}>
                <h3>{track.title}</h3>
                <Link href={track.href} className={styles.secondaryCta}>
                  View details
                </Link>
              </div>
              <p className={styles.trackCopy}>{track.focus}</p>
              <div className={styles.trackActions}>
                <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
                  Talk to a coach
                </Link>
                <Link href={track.href} className={styles.offeringLink}>
                  Go to track
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.trackSection} aria-labelledby="exams-heading">
        <div className={styles.sectionHead}>
          <h2 id="exams-heading">Entrance Exams</h2>
          <p>Targeted practice for IELTS, TOEFL, GRE, and PTE with mocks and feedback.</p>
        </div>
        <div className={styles.trackGrid}>
          {EXAM_TRACKS.map((track) => (
            <article key={track.href} className={styles.trackCard}>
              <div className={styles.trackCardHead}>
                <h3>{track.title}</h3>
                <Link href={track.href} className={styles.secondaryCta}>
                  View details
                </Link>
              </div>
              <p className={styles.trackCopy}>{track.focus}</p>
              <div className={styles.trackActions}>
                <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
                  Talk to a coach
                </Link>
                <Link href={track.href} className={styles.offeringLink}>
                  Go to track
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.curriculum} aria-labelledby="curriculum-heading">
        <div className={styles.sectionHead}>
          <h2 id="curriculum-heading">What your weeks look like</h2>
          <p>Each week ships speaking deliverables you can share—voice notes, short presentations, and email drafts.</p>
        </div>
        <div className={styles.curriculumGrid}>
          {CURRICULUM.map((block) => (
            <article key={block.title} className={styles.curriculumCard}>
              <h3>{block.title}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <p className={styles.kicker}>Ready when you are</p>
          <h2>Get a quick placement call and a tailored plan.</h2>
          <p>Share your availability and goals; we will place you in a pod and schedule your first live session within 48 hours.</p>
          <div className={styles.heroActions}>
            <Link href="https://wa.me/919217239714" className={styles.primaryCta}>
              Book my slot
            </Link>
            <Link href="mailto:hello@languagevidya.com" className={styles.secondaryCta}>
              Email the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
