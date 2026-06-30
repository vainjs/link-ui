<template>
  <main class="playground">
    <aside class="playground__nav" aria-label="Component navigation">
      <strong>Link UI</strong>
      <a href="#architecture">Architecture</a>
    </aside>

    <section class="playground__phone" aria-label="Mobile preview">
      <article id="architecture" class="architecture-view">
        <header>
          <h1>Link UI</h1>
          <p>Vue 3 + WeUI mobile component library playground.</p>
        </header>

        <section>
          <h2>Workspace</h2>
          <ul>
            <li>packages/web</li>
            <li>playground</li>
            <li>docs</li>
          </ul>
        </section>

        <section>
          <h2>Next</h2>
          <p>Use this surface to debug components after each component spec is added.</p>
        </section>
      </article>
    </section>
  </main>
</template>

<style>
:root {
  color: rgba(0, 0, 0, 0.9);
  background: #eef0f3;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.architecture-view {
  min-height: 100%;
  padding: 24px 16px 40px;
  background: var(--link-bg-page, #f7f7f7);
}

.architecture-view h1 {
  margin: 0 0 8px;
  font-size: 26px;
  line-height: 1.25;
}

.architecture-view h2 {
  margin: 28px 0 8px;
  color: var(--link-text-secondary, rgba(0, 0, 0, 0.55));
  font-size: 14px;
  font-weight: 500;
}

.architecture-view p,
.architecture-view li {
  color: var(--link-text-secondary, rgba(0, 0, 0, 0.55));
}

.architecture-view ul {
  margin: 0;
  padding-left: 20px;
}

body {
  margin: 0;
}

.playground {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 32px;
  padding: 32px;
}

.playground__nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: start;
}

.playground__nav a {
  color: inherit;
  text-decoration: none;
}

.playground__phone {
  width: min(100%, 390px);
  min-height: 720px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 28px;
  background: #f7f7f7;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.14);
}

@media (max-width: 720px) {
  .playground {
    display: block;
    padding: 0;
  }

  .playground__nav {
    display: none;
  }

  .playground__phone {
    width: 100%;
    min-height: 100dvh;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }
}
</style>
