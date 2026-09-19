import { Link } from "react-router-dom";

const AppTally = () => {
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
        {/* Hero */}
        <section className="case-hero">
          <div className="case-container">
            <p className="case-label">
              UX / UI DESIGN · CASE STUDY 02
            </p>

            <h1>AppTally</h1>

            <p className="case-subtitle">
              Helping users understand where their screen time goes—and turn
              those insights into achievable productivity goals.
            </p>

            <p className="case-intro">
              Digital tools make it easier to work, communicate, and stay
              organized, but they can also become a major source of distraction.
              I designed AppTally, a mobile productivity app that helps users
              understand how they spend their time across different apps,
              identify distracting habits, and create personalized goals for
              improving their digital routine.
            </p>

            <div className="case-meta-grid">
              <div>
                <span>MY ROLE</span>
                <p>UX/UI Designer</p>
              </div>

              <div>
                <span>RESPONSIBILITIES</span>
                <p>
                  User Research · Competitive Analysis · Journey Mapping ·
                  Information Architecture · UI Design
                </p>
              </div>

              <div>
                <span>PROJECT</span>
                <p>Mobile Productivity App</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="case-visual-section">
          <div className="case-container">
            <div className="case-visual case-visual-hero">
              <img
                src="/ux/Apptally/Home.png"
                alt="AppTally home dashboard"
              />
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>01</span>
              <p>THE CHALLENGE</p>
            </div>

            <div className="case-copy">
              <h2>
                Screen-time data is only useful when people know what to do
                with it.
              </h2>

              <p>
                Many productivity apps approach time management from one of two
                extremes.
              </p>

              <p>
                Simple tools show users how long they spend on their devices but
                provide little guidance on what to do with that information.
                More advanced platforms offer extensive analytics but can
                require significant setup and present users with dashboards
                that are difficult to interpret.
              </p>

              <p>
                I wanted AppTally to sit between those approaches while
                prioritizing clarity, customization, and actionable feedback.
              </p>

              <div className="case-question">
                <span>HOW MIGHT I</span>

                <p>
                  How might I help users understand their digital habits, set
                  meaningful goals, and act on their data without making
                  productivity tracking feel like another task?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="case-section case-section-alt">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>02</span>
              <p>RESEARCH & DISCOVERY</p>
            </div>

            <div className="case-copy">
              <h2>
                Users wanted useful summaries—not more information to manage.
              </h2>

              <p>
                I conducted interviews with professionals and entrepreneurs to
                understand how they managed productivity, where digital
                distractions occurred, and what they expected from a
                time-management tool.
              </p>

              <p>
                I also created a user journey and reviewed products including
                RescueTime, Forest, and Apple's Screen Time to understand common
                approaches to tracking, goal setting, and data visualization.
              </p>

              <p>
                Two primary user groups became the focus of the design:
                professionals balancing multiple responsibilities and
                entrepreneurs trying to protect focused work time from digital
                distractions.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="research-insights">
              <article>
                <span>01</span>
                <h3>Tracking is inconsistent.</h3>

                <p>
                  Users struggled to consistently monitor their productivity
                  across changing schedules and responsibilities.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Productivity is personal.</h3>

                <p>
                  Different lifestyles required different definitions of what
                  should count as productive.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Make data actionable.</h3>

                <p>
                  Users preferred clear visual summaries and wanted insights
                  that could lead to a concrete change in behaviour.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Design principles */}
        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>03</span>
              <p>TURNING RESEARCH INTO A PRODUCT</p>
            </div>

            <div className="case-copy">
              <h2>Four principles shaped the experience.</h2>

              <p>
                Research showed that AppTally needed to do more than display
                screen-time statistics. The product needed to help users
                understand what those numbers meant and decide what to do next.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="research-insights app-principles">
              <article>
                <span>01</span>
                <h3>Clarity</h3>

                <p>
                  Important information should be understandable at a glance.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Customization</h3>

                <p>
                  Users should decide which apps, categories, and goals matter
                  to them.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Motivation</h3>

                <p>
                  Progress should feel visible without productivity becoming
                  another source of pressure.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Actionability</h3>

                <p>
                  Data should help users decide what to change next.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Information architecture */}
        <section className="case-section case-section-alt">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>04</span>
              <p>INFORMATION ARCHITECTURE</p>
            </div>

            <div className="case-copy">
              <h2>
                Organizing the product around user decisions.
              </h2>

              <p>
                These principles shaped the application's information
                architecture around four primary areas:
              </p>

              <div className="experience-flow">
                <span>Dashboard</span>
                <b>→</b>
                <span>App Usage</span>
                <b>→</b>
                <span>Goals & Progress</span>
                <b>→</b>
                <span>Insights</span>
              </div>

              <p>
                The dashboard provides a quick overview of screen time and goal
                progress, while deeper screens allow users to investigate
                individual apps and categories.
              </p>

              <p>
                Goals transform passive tracking into something users can
                actively work toward, while insights highlight patterns that
                may otherwise be difficult to notice.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="case-screen-grid">
              <figure>
                <img
                  src="/ux/Apptally/Home.png"
                  alt="AppTally dashboard"
                />

                <figcaption>
                  01 · Dashboard overview
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/Apptally/ActivitiesCategory.png"
                  alt="AppTally activity categories"
                />

                <figcaption>
                  02 · App usage and categories
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/Apptally/DetailedStats.png"
                  alt="AppTally detailed statistics"
                />

                <figcaption>
                  03 · Detailed usage insights
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Design direction */}
        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>05</span>
              <p>DESIGN DIRECTION</p>
            </div>

            <div className="case-copy">
              <h2>
                Turning usage data into something users can act on.
              </h2>

              <p>
                Once the core structure was defined, I focused on how each part
                of the product could support a clear decision: understand
                current behaviour, identify a problem, set a goal, and track
                progress over time.
              </p>

              <p>
                The dashboard was designed to surface the most important
                information first, while deeper screens gave users more detail
                when they wanted to explore specific apps, categories, or
                trends.
              </p>

              <div className="experience-flow">
                <span>Understand Usage</span>
                <b>→</b>
                <span>Identify Patterns</span>
                <b>→</b>
                <span>Set Goals</span>
                <b>→</b>
                <span>Track Progress</span>
              </div>

              <p>
                This helped keep AppTally focused on behaviour change rather
                than simply becoming another screen-time dashboard filled with
                statistics.
              </p>
            </div>
          </div>
        </section>

        {/* Visual design */}
        <section className="case-section case-section-alt">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>06</span>
              <p>VISUAL DESIGN</p>
            </div>

            <div className="case-copy">
              <h2>
                Productivity without making the interface feel clinical.
              </h2>

              <p>
                A blue-focused visual system creates consistency throughout the
                application, while contrasting colours highlight progress,
                categories, and important information.
              </p>

              <p>
                Cards and modular layouts separate information into smaller
                sections, allowing users to quickly scan the interface rather
                than interpret dense analytics.
              </p>

              <p>
                Typography, spacing, and navigation were kept consistent across
                screens to make moving between high-level summaries and
                detailed information predictable.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="case-split-visuals">
              <figure>
                <img
                  src="/ux/Apptally/Goals.png"
                  alt="AppTally goals interface"
                />

                <figcaption>
                  Goal creation and progress
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/Apptally/GoalsApps.png"
                  alt="AppTally app-specific goal configuration"
                />

                <figcaption>
                  Customizing goals around specific apps
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Final experience */}
        <section className="case-section">
          <div className="case-container case-two-column">
            <div className="case-section-heading">
              <span>07</span>
              <p>THE FINAL EXPERIENCE</p>
            </div>

            <div className="case-copy">
              <h2>
                From understanding behaviour to actively changing it.
              </h2>

              <p>
                The completed design allows users to see their overall screen
                time, identify which applications consume the most time, create
                personalized productivity goals, examine trends, and receive
                suggestions based on their activity.
              </p>

              <p>
                Rather than presenting tracking as an end goal, AppTally uses
                tracking as the starting point for reflection and behaviour
                change.
              </p>
            </div>
          </div>

          <div className="case-container">
            <div className="case-screen-grid app-final-grid">
              <figure>
                <img
                  src="/ux/Apptally/Home.png"
                  alt="AppTally dashboard"
                />

                <figcaption>
                  Dashboard
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/Apptally/Goals.png"
                  alt="AppTally goals"
                />

                <figcaption>
                  Goals
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/Apptally/ActivitiesCategory.png"
                  alt="AppTally activity categories"
                />

                <figcaption>
                  App Usage
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/ux/Apptally/Calender.png"
                  alt="AppTally calendar"
                />

                <figcaption>
                  Calendar
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="case-reflection">
          <div className="case-container">
            <p className="case-label">
              08 / RESULTS & REFLECTION
            </p>

            <h2>
              More information does not automatically create a better
              experience.
            </h2>

            <div className="reflection-copy">
              <p>
                Early feedback suggested that users particularly valued the
                ability to customize goals and quickly visualize their digital
                habits.
              </p>

              <p>
                The project also reinforced an important lesson for me:
                providing more information does not automatically create a
                better experience. The greater design challenge was deciding
                which information deserved the user's attention and how it
                could lead to an action.
              </p>

              <p>
                If I continued developing AppTally, I would conduct additional
                usability testing around goal creation and analytics, test
                different ways of presenting recommendations, and evaluate
                whether users actually changed their screen-time habits over
                longer periods.
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

export default AppTally;