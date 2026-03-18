import './App.css'

function App() {
  const frameworkRows = [
    {
      criterion: 'Learning curve',
      react: 'Moderate; JSX + ecosystem choices',
      angular: 'Steep; TypeScript, RxJS, decorators, DI',
      vue: 'Easy to moderate; approachable template syntax',
    },
    {
      criterion: 'Architecture style',
      react: 'Library-first; choose router/state libs',
      angular: 'Full framework; opinionated enterprise structure',
      vue: 'Progressive framework; optional complexity',
    },
    {
      criterion: 'Performance',
      react: 'Excellent with memoization and code splitting',
      angular: 'Good; improved with Ivy and signal-based updates',
      vue: 'Excellent; fine-grained reactivity',
    },
    {
      criterion: 'Best fit',
      react: 'Flexible SPAs and large product ecosystems',
      angular: 'Large enterprise apps with strict conventions',
      vue: 'Fast delivery and teams preferring simplicity',
    },
  ]

  return (
    <main className="page">
      <header className="hero">
        <p className="badge">AWT Single Page Application Assignment</p>
        <h1>Conceptual Design: Online Task Management SPA</h1>
        <p className="subtitle">
          A modern single-page application blueprint for creating, tracking, and
          collaborating on tasks using component-driven UI, client-side routing,
          and scalable state management.
        </p>
      </header>

      <section className="panel" aria-labelledby="architecture-title">
        <h2 id="architecture-title">1. SPA Architecture</h2>
        <div className="chip-row">
          <span>Presentation Layer</span>
          <span>Application Layer</span>
          <span>Data Layer</span>
        </div>
        <p>
          The SPA uses a three-layer architecture. The presentation layer renders
          reusable UI components such as dashboard cards, task lists, and task
          forms. The application layer manages routing, authentication guards,
          validation, and business rules. The data layer communicates with REST
          APIs, caches responses, and synchronizes server state with local UI
          state.
        </p>
        <div className="flow" role="img" aria-label="SPA request-response flow">
          <span>Browser UI</span>
          <span>Router + Components</span>
          <span>State Store</span>
          <span>API Services</span>
          <span>Database</span>
        </div>
      </section>

      <section className="panel" aria-labelledby="comparison-title">
        <h2 id="comparison-title">2. React vs Angular vs Vue</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>React</th>
                <th>Angular</th>
                <th>Vue</th>
              </tr>
            </thead>
            <tbody>
              {frameworkRows.map((row) => (
                <tr key={row.criterion}>
                  <td>{row.criterion}</td>
                  <td>{row.react}</td>
                  <td>{row.angular}</td>
                  <td>{row.vue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel split" aria-labelledby="routing-title">
        <div>
          <h2 id="routing-title">3. Routing Strategy</h2>
          <p>
            Client-side routing avoids full page reloads and keeps navigation
            smooth. A route-centric layout can lazy-load heavy screens and apply
            authentication checks.
          </p>
          <ul>
            <li>/login: user authentication</li>
            <li>/dashboard: task overview, KPIs, and quick actions</li>
            <li>/tasks: filterable and searchable task board</li>
            <li>/tasks/:id: task details, comments, and edit workflow</li>
            <li>/settings: profile and notification preferences</li>
          </ul>
        </div>
        <div>
          <h2>State Management Strategy</h2>
          <p>
            Use layered state management to keep the architecture scalable and
            maintainable:
          </p>
          <ul>
            <li>Local component state for temporary UI interactions</li>
            <li>Context or Redux Toolkit for cross-module app state</li>
            <li>Server-state cache for API data and synchronization</li>
          </ul>
        </div>
      </section>

      <section className="panel" aria-labelledby="component-title">
        <h2 id="component-title">4. Component-Based Architecture</h2>
        <p>
          The system is built as isolated, reusable components to improve
          maintainability and testability.
        </p>
        <div className="component-grid">
          <article>
            <h3>Layout Components</h3>
            <p>App shell, top bar, side navigation, and responsive container.</p>
          </article>
          <article>
            <h3>Feature Components</h3>
            <p>Task board, task card, task details, comments, and activity log.</p>
          </article>
          <article>
            <h3>Shared Components</h3>
            <p>Buttons, modal, input controls, chips, avatars, and loaders.</p>
          </article>
          <article>
            <h3>Service Layer</h3>
            <p>API client, auth handler, and data transformation utilities.</p>
          </article>
        </div>
      </section>

      <section className="panel" aria-labelledby="proposal-title">
        <h2 id="proposal-title">5. Recommended Framework</h2>
        <p>
          <strong>Recommended choice: React.</strong> React is the best fit for
          this task-management SPA because it offers strong ecosystem support,
          reusable component composition, and flexible integration with routing
          and state libraries. It balances development speed with long-term
          scalability, making it ideal for both academic projects and production
          expansion.
        </p>
      </section>
    </main>
  )
}

export default App
