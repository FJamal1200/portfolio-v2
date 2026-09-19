import { Link } from "react-router-dom";

const CareerCoach = () => {
  return (
    <div className="case-study-page">
      <header className="case-study-nav">
        <div className="case-study-nav-inner">
          <Link to="/" className="case-study-logo">
            <span>FJ</span>
            FARSHID JAMAL
          </Link>

          <Link to="/#ux" className="case-study-back">
            ← BACK TO PORTFOLIO
          </Link>
        </div>
      </header>

      <main>
        <section className="case-hero">
          <div className="case-container">
            <p className="case-label">
              UX / PRODUCT DESIGN · CASE STUDY 01
            </p>

            <h1>Deadbeat Remover</h1>

            <p className="case-subtitle">
              Practicing difficult workplace conversations before they happen.
            </p>

            <p className="case-intro">
              Difficult conversations are unavoidable at work, but most people
              get very little opportunity to practice them. Deadbeat Remover is
              a mobile experience that lets employees and managers rehearse
              challenging workplace conversations, receive structured feedback,
              and retry conversations until they feel more confident.
            </p>

            <div className="case-meta-grid">
              <div>
                <span>MY ROLE</span>
                <p>UX/UI Design · Product Strategy · Research</p>
              </div>

              <div>
                <span>DELIVERABLES</span>
                <p>
                  User Research · User Flows · Interaction Design ·
                  High-Fidelity Prototype
                </p>
              </div>

              <div>
                <span>PRODUCT</span>
                <p>Mobile Workplace Communication Coaching Experience</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-visual-section">
          <div className="case-container">
            <div className="case-visual case-visual-hero">
              <img
                src="/ux/career-coach/dashboard.png"
                alt="Deadbeat Remover dashboard"
              />
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>01</span>
              <p>THE PROBLEM</p>
            </div>

            <div className="case-copy">
              <h2>
                Knowing what to say is different from actually saying it.
              </h2>

              <p>
                People are often expected to know how to handle difficult
                workplace conversations without ever being taught how to
                navigate them.
              </p>

              <p>
                Advice articles and videos can explain what someone{" "}
                <em>should</em> say, but they do not allow users to actually
                practice responding.
              </p>

              <div className="case-question">
                <span>HOW MIGHT WE</span>

                <p>
                  How might we give employees and managers a safe way to
                  practice difficult conversations and understand exactly where
                  their communication could improve?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-section-alt">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>02</span>
              <p>EARLY EXPLORATION</p>
            </div>

            <div className="case-copy">
              <h2>
                Turning the idea into a focused practice experience.
              </h2>

              <p>
                I started by defining the shortest path between choosing a
                workplace situation, practicing a response, and receiving useful
                feedback.
              </p>

              <p>
                Rather than building a large training platform, I focused the
                experience around a repeatable interaction loop that could be
                completed quickly and revisited whenever the user wanted to
                practice.
              </p>

              <div className="experience-flow">
                <span>Choose a Scenario</span>
                <b>→</b>
                <span>Practice</span>
                <b>→</b>
                <span>Review Feedback</span>
                <b>→</b>
                <span>Retry</span>
              </div>

              <p>
                This gave Deadbeat Remover a clear foundation before moving into
                the detailed scenario, feedback, and progress-tracking screens.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>03</span>
              <p>RESEARCH & DISCOVERY</p>
            </div>

            <div className="case-copy">
              <h2>
                Users wanted practice and specific feedback—not another advice
                library.
              </h2>

              <p>
                To validate the idea, I spoke with three working professionals
                about how they approached difficult conversations and what they
                would want from a workplace communication coaching tool.
              </p>

              <p>
                A few themes consistently appeared. Participants wanted
                something that was quick and easy to use rather than a
                complicated training platform.
              </p>

              <p>
                They also wanted feedback that clearly identified what they did
                well, what needed improvement, and how they could respond
                differently next time.
              </p>

              <p>
                The professionals I spoke with also saw communication skills as
                directly connected to career progression. They described better
                workplace communication as something that could help them handle
                conflict, work more effectively with managers and coworkers,
                and position themselves for future opportunities.
              </p>

              <p>
                This shifted the product away from simply providing advice and
                toward{" "}
                <strong>
                  practice, evaluation, and repetition.
                </strong>
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="research-insights">
              <article>
                <span>01</span>

                <h3>Keep it quick.</h3>

                <p>
                  Users did not want workplace communication practice to feel
                  like a lengthy corporate training course.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Explain the feedback.</h3>

                <p>
                  A score alone was not useful. Users wanted to understand both
                  strengths and specific areas for improvement.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Let people practice.</h3>

                <p>
                  The value of the product came from responding, evaluating,
                  retrying, and seeing improvement.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-section case-section-alt">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>04</span>
              <p>DESIGNING THE EXPERIENCE</p>
            </div>

            <div className="case-copy">
              <h2>A short loop users can repeat.</h2>

              <p>
                The core experience was intentionally kept simple:
              </p>

              <div className="experience-flow">
                <span>Choose a scenario</span>
                <b>→</b>
                <span>Respond</span>
                <b>→</b>
                <span>Receive feedback</span>
                <b>→</b>
                <span>Retry</span>
                <b>→</b>
                <span>Compare attempts</span>
              </div>

              <p>
                Users can select situations such as salary negotiations, missed
                deadlines, promotions, or difficult feedback. They can then
                practice how they would respond rather than simply reading a
                recommended answer.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="case-screen-grid case-screen-grid-four">
              <figure>
                <img
                  src="/ux/career-coach/Sign%20In.png"
                  alt="Deadbeat Remover sign in screen"
                />

                <figcaption>
                  01 · Enter the experience
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/career-coach/Scenarios.png"
                  alt="Deadbeat Remover scenario selection screen"
                />

                <figcaption>
                  02 · Choose a scenario
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/career-coach/Activities.png"
                  alt="Deadbeat Remover activities screen"
                />

                <figcaption>
                  03 · Practice and revisit activities
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/career-coach/Feedback.png"
                  alt="Deadbeat Remover feedback screen"
                />

                <figcaption>
                  04 · Review feedback
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>05</span>
              <p>FEEDBACK SYSTEM</p>
            </div>

            <div className="case-copy">
              <h2>
                Feedback needed to be actionable, not judgmental.
              </h2>

              <p>
                After completing a scenario, the response is evaluated across
                several communication skills:
              </p>

              <div className="feedback-tags">
                <span>Clarity</span>
                <span>Empathy</span>
                <span>Directness</span>
                <span>Expectations</span>
                <span>Next Steps</span>
                <span>Professionalism</span>
              </div>

              <p>
                Rather than only displaying a score, the interface explains the
                user's strengths, identifies areas to improve, and provides an
                example of how the response could be rewritten.
              </p>

              <p>
                The goal is not to provide a single “perfect” response. It is
                to help users recognize communication patterns and become more
                intentional about how they respond.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="case-visual">
              <img
                src="/ux/career-coach/Results.png"
                alt="Deadbeat Remover results screen"
              />
            </div>
          </div>
        </section>

        <section className="case-section case-section-alt">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>06</span>
              <p>ENCOURAGING IMPROVEMENT</p>
            </div>

            <div className="case-copy">
              <h2>Make improvement visible.</h2>

              <p>
                Users can retry the same situation and compare attempts
                side-by-side. This makes improvement visible across individual
                skills instead of reducing the experience to a single number.
              </p>

              <p>
                Progress tracking also gives users a way to identify patterns
                over time. Someone might consistently demonstrate empathy, for
                example, while struggling to communicate expectations directly.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="case-split-visuals">
              <figure>
                <img
                  src="/ux/career-coach/Activities.png"
                  alt="Deadbeat Remover activity history"
                />

                <figcaption>
                  Revisit previous practice activities
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/career-coach/dashboard.png"
                  alt="Deadbeat Remover dashboard and progress overview"
                />

                <figcaption>
                  Review progress from the dashboard
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>07</span>
              <p>PRODUCT STRATEGY</p>
            </div>

            <div className="case-copy">
              <h2>
                Building around different levels of need.
              </h2>

              <p>
                I also explored how the product could support a freemium model.
              </p>

              <p>
                The free experience would include several introductory
                scenarios, basic feedback, and a limited number of practice
                sessions.
              </p>

              <p>
                A premium version could expand the experience with custom
                workplace scenarios, voice conversations, detailed feedback,
                progress tracking, industry-specific situations, and access to
                the complete scenario library.
              </p>

              <p>
                This keeps the core practice experience accessible while
                creating room for deeper coaching tools for users who want
                them.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="case-split-visuals product-visuals">
              <figure>
                <img
                  src="/ux/career-coach/Upgrade.png"
                  alt="Deadbeat Remover upgrade screen"
                />

                <figcaption>
                  Premium upgrade path
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/career-coach/Checkout.png"
                  alt="Deadbeat Remover checkout screen"
                />

                <figcaption>
                  Checkout experience
                </figcaption>
              </figure>
            </div>

            <div className="pricing-concept-grid">
              <article>
                <p>FREE</p>

                <h3>Practice the basics.</h3>

                <ul>
                  <li>Introductory scenarios</li>
                  <li>Basic feedback</li>
                  <li>Limited practice sessions</li>
                </ul>
              </article>

              <article>
                <p>PREMIUM</p>

                <h3>Go deeper.</h3>

                <ul>
                  <li>Complete scenario library</li>
                  <li>Voice conversations</li>
                  <li>Custom scenarios</li>
                  <li>Detailed feedback</li>
                  <li>Progress tracking</li>
                  <li>Industry-specific situations</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="case-reflection">
          <div className="case-container">
            <p className="case-label">
              08 / REFLECTION
            </p>

            <h2>
              Sometimes people do not need more information. They need a safe
              place to practice.
            </h2>

            <div className="reflection-copy">
              <p>
                The biggest lesson from this project was that communication
                coaching does not necessarily need to begin with more
                information. Sometimes people already know what they should
                do—they need a safe environment to practice doing it.
              </p>

              <p>
                If I continued developing Deadbeat Remover, my next step would
                be testing the interactive prototype with a larger group of
                users and studying whether the feedback categories are
                understandable, whether users actually improve across repeated
                attempts, and which scenarios provide the most value.
              </p>

              <p>
                This project helped me think beyond individual screens and
                focus on designing a feedback loop:
                <strong>
                  {" "}practice, understand, improve, and try again.
                </strong>
              </p>
            </div>

            <Link
              to="/#ux"
              className="button button-secondary case-end-button"
            >
              ← BACK TO PROJECTS
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareerCoach;