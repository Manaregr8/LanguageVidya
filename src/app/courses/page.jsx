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
      { label: "Basic to Communicate", href: "/spoken-english/intermediate" },
      { label: "Kids English Mastery Program", href: "/spoken-english/advanced" },
      { label: "Business English", href: "/spoken-engliish/advjanced" },
      { label: "Accent English", href: "/spoken-engliiish/advankced" },
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
    focus: "Zero to comfortable speaking with daily-use English, sentence formation, and confidence drills.",
    details: [
      "6 weeks · 45 min live · 5x weekly",
      "Live practice, guided activities, and AI-powered speaking",
      "Daily-use sentences, pronunciation basics, fearless speaking",
    ],
  },
  {
    title: "Basic to Communicate",
    href: "/spoken-english/intermediate",
    focus: "From knowing English to fluent, confident conversations without translating in your head.",
    details: [
      "8 weeks · 60 min live · 5x weekly",
      "Role-plays, speaking drills, and AI speaking partner",
      "Fluent sentence flow and thinking directly in English",
    ],
  },
  {
    title: "Kids English Mastery Program",
    href: "/spoken-english/advanced",
    focus: "Confidence, clarity, and communication for kids via stories, games, and positive feedback.",
    details: [
      "6 weeks · 40 min live · 4x weekly",
      "Storytelling, interactive games, pronunciation basics",
      "Public speaking basics and classroom communication",
    ],
  },
  {
    title: "Business English",
    href: "/spoken-engliish/advjanced",
    focus: "Professional communication for work with meetings, presentations, and polished tone.",
    details: [
      "5 weeks · 60 min live · 4x weekly",
      "Mock meetings, presentations, and office etiquette",
      "Email and meeting communication with 1-1 feedback",
    ],
  },
  {
    title: "Accent English",
    href: "/spoken-engliiish/advankced",
    focus: "Neutral, clear pronunciation with stress, intonation, and clarity for global contexts.",
    details: [
      "6 weeks · 75 min live · 4x weekly",
      "Audio drills, live correction, AI speech analysis",
      "Accent neutralization techniques and pacing",
    ],
  },
];

const REGIONAL_TRACKS = [
  {
    title: "Hindi For Foreigners",
    href: "/regional/hindi",
    focus: "Conversational Hindi with cultural cues, greetings, and daily-use scenarios.",
    details: [
      "5 weeks · 50 min live · 4x weekly",
      "Greetings, daily conversations, and pronunciation flow",
      "Cultural expressions and polite forms",
    ],
  },
  {
    title: "Sanskrit",
    href: "/regional/sanskrit",
    focus: "Foundational Sanskrit with correct pronunciation, shlokas, and structured grammar basics.",
    details: [
      "6 weeks · 45 min live · 3x weekly",
      "Pronunciation, phonetics, and basic shlokas",
      "Structured grammar foundations with guided practice",
    ],
  },
];

const SESSION_TRACKS = [
  {
    title: "English Master Classes",
    href: "/sessions/book",
    focus: "Deep-dive workshops for fast fluency, storytelling, and public speaking practice.",
    details: [
      "Live expert-led sessions with speaking challenges",
      "Weekend-friendly batches and activities",
      "Real-time feedback and confidence building",
    ],
  },
  {
    title: "Corporate Bootcamp",
    href: "/sessions/pricing",
    focus: "Team-focused communication labs with meeting simulations and presentations.",
    details: [
      "Short sprints (2-3 weeks) for teams",
      "Presentation labs and meeting simulations",
      "Team speaking exercises and client-ready updates",
    ],
  },
  {
    title: "1-1 Session",
    href: "/sessions/contact",
    focus: "Personalized coaching with custom drills, focused feedback, and flexible scheduling.",
    details: [
      "Flexible slots and custom goals",
      "One-to-one coaching with immediate correction",
      "Rapid iteration on your scripts",
    ],
  },
  {
    title: "Institutional Seminars",
    href: "/sessions/contact",
    focus: "Interactive seminars for colleges or organizations to level-up communication at scale.",
    details: [
      "Seminar or bootcamp formats",
      "Engaging speaking activities and group practice",
      "Confidence-building workshops for cohorts",
    ],
  },
];

const EXAM_TRACKS = [
  {
    title: "IELTS",
    href: "/exams/ielts",
    focus: "Practical strategies, exam patterns, and performance-based practice for target bands.",
    details: [
      "Speaking mocks with examiner-style feedback",
      "Writing task templates (Task 1 and 2)",
      "Listening speed, accuracy, and reading time management",
    ],
  },
  {
    title: "TOEFL",
    href: "/exams/toefl",
    focus: "Integrated tasks, structured responses, and time-bound accuracy for study abroad goals.",
    details: [
      "Integrated speaking and writing tasks",
      "Note-taking techniques with timed responses",
      "Academic vocabulary and listening-to-speaking flow",
    ],
  },
  {
    title: "GRE",
    href: "/exams/gre",
    focus: "AWA structures and concise articulation for clearer arguments and summaries.",
    details: [
      "AWA essay structures and templates",
      "Argument and issue analysis with summaries",
      "Clear articulation of complex ideas",
    ],
  },
  {
    title: "PTE",
    href: "/exams/pte",
    focus: "Clarity, fluency, and repetition-based tasks tuned for computer-scored testing.",
    details: [
      "Speaking clarity drills and timing",
      "Retell lecture practice and repeat sentence stamina",
      "Pronunciation accuracy for system evaluation",
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
            <Link href="https://wa.me/919217239714?text=I%20want%20a%20free%20English%20level%20test" className={styles.secondaryCta}>
              Start your free English level test
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
          <p>Learn Indian languages with correct pronunciation, cultural context, and real-life usage.</p>
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
          <p>Choose the learning format that fits your schedule, goals, and learning style—from group masterclasses to personalized coaching.</p>
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
          <p>Targeted preparation with expert guidance, structured practice, and regular feedback—built to improve performance, not just theory.</p>
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
            <Link href="https://wa.me/919217239714?text=I%20want%20to%20book%20a%20demo%20session" className={styles.secondaryCta}>
              Book a free demo session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
