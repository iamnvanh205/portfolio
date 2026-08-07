/**
 * Viewport module
 * - Dynamic Hero + Transition height calculation (100vh)
 * - Motion (Framer Motion) entrance + loop animations for:
 *     • Hero content
 *     • Service Mesh SVG (nodes, paths, packets, auras)
 *     • Scroll cue (three sequential down-arrows)
 */

/* ─────────────────────────────────────────
   HEIGHT CALCULATION
───────────────────────────────────────── */

export function initViewportHeight() {
  const hero       = document.querySelector(".hero");
  const transition = document.querySelector(".gradient-transition");
  if (!hero || !transition) return;

  const calculateHeights = () => {
    const vp = window.innerHeight;

    // Measure hero content without height constraint
    hero.style.minHeight = "auto";
    const heroH = hero.querySelector(".hero__container")?.offsetHeight ?? 0;

    const minTransition =
      window.innerWidth <= 480  ? 180 :
      window.innerWidth <= 768  ? 220 :
      window.innerWidth <= 900  ? 260 : 320;

    const remaining = vp - heroH;

    if (remaining >= minTransition) {
      hero.style.minHeight       = `${heroH}px`;
      transition.style.minHeight = `${remaining}px`;
    } else {
      transition.style.minHeight = `${minTransition}px`;
      hero.style.minHeight       = `${Math.max(vp - minTransition, heroH)}px`;
    }
  };

  calculateHeights();

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(calculateHeights, 150);
  });
}

/* ─────────────────────────────────────────
   MOTION ANIMATIONS
   All entrance and loop animations use
   only transform + opacity (GPU composite).
───────────────────────────────────────── */

export function initMotionAnimations() {
  if (typeof Motion === "undefined") {
    console.warn("[viewport] Motion not loaded — skipping animations.");
    return;
  }

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Scroll hint (three-arrow cue) ── */
  const scrollHint = document.querySelector(".scroll-hint");
  if (scrollHint) {
    if (prefersReduced) {
      scrollHint.style.opacity = "1";
    } else {
      Motion.animate(scrollHint, { opacity: [0, 1] }, { duration: 1.0, delay: 1.4, easing: "ease-out" });
    }
  }

  if (prefersReduced) {
    _showStaticMesh();
    return;
  }

  /* ── Hero content fade-in ── */
  const heroContent = document.querySelector(".hero__content");
  if (heroContent) {
    Motion.animate(
      heroContent,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.7, easing: "ease-out" }
    );
  }

  /* ── Service Mesh entrance + loops ── */
  _initServiceMeshAnimation();
}

/* ─────────────────────────────────────────
   SERVICE MESH HEARTBEAT  (full animation)
───────────────────────────────────────── */

function _initServiceMeshAnimation() {
  const BASE_DELAY = 0.3; // seconds after hero entrance

  /* Nodes — staggered fade+scale in */
  const nodeOrder = [
    "#sm-node-gateway",
    "#sm-node-auth",
    "#sm-node-db",
    "#sm-node-cache",
    "#sm-node-queue",
    "#sm-node-monitor",
  ];

  nodeOrder.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    Motion.animate(
      el,
      { opacity: [0, 1], scale: [0.6, 1] },
      {
        duration: 0.55,
        delay: BASE_DELAY + i * 0.12,
        easing: [0.34, 1.56, 0.64, 1], // spring-ish overshoot
      }
    );
  });

  /* Auras — fade in slightly after their node */
  const auraSels = [
    ".sm-aura--gateway",
    ".sm-aura--auth",
    ".sm-aura--db",
    ".sm-aura--cache",
    ".sm-aura--queue",
    ".sm-aura--monitor",
  ];
  auraSels.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    Motion.animate(
      el,
      { opacity: [0, 0.6] },
      { duration: 0.8, delay: BASE_DELAY + 0.2 + i * 0.10, easing: "ease-out" }
    );
  });

  /* Paths — staggered draw-in via opacity */
  const pathSels = [
    "#sm-path-gw-auth",
    "#sm-path-gw-db",
    "#sm-path-gw-cache",
    "#sm-path-gw-queue",
    "#sm-path-gw-monitor",
    "#sm-path-auth-db",
    "#sm-path-cache-queue",
  ];

  pathSels.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    Motion.animate(
      el,
      { opacity: [0, 1] },
      {
        duration: 0.7,
        delay: BASE_DELAY + 0.5 + i * 0.08,
        easing: "ease-out",
      }
    );
  });

  /* Data packets — show after paths are drawn */
  const packetsGroup = document.querySelector(".sm-packets");
  if (packetsGroup) {
    Motion.animate(
      packetsGroup,
      { opacity: [0, 1] },
      { duration: 0.6, delay: BASE_DELAY + 1.2, easing: "ease-out" }
    );
  }

  /* Gateway node: continuous gentle float loop */
  const gateway = document.querySelector("#sm-node-gateway");
  if (gateway) {
    setTimeout(() => {
      Motion.animate(
        gateway,
        { y: [0, -3, 0] },
        { duration: 4.0, repeat: Infinity, easing: "ease-in-out" }
      );
    }, (BASE_DELAY + 0.55) * 1000);
  }

  /* Minor nodes: subtle float with different offsets */
  const floatNodes = [
    { sel: "#sm-node-auth",    amp: 2.5, dur: 3.6 },
    { sel: "#sm-node-db",      amp: 2.5, dur: 4.2 },
    { sel: "#sm-node-cache",   amp: 2.0, dur: 3.9 },
    { sel: "#sm-node-queue",   amp: 2.0, dur: 4.5 },
    { sel: "#sm-node-monitor", amp: 1.8, dur: 3.7 },
  ];

  floatNodes.forEach(({ sel, amp, dur }, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const entranceDelay = BASE_DELAY + 0.12 * (i + 1) + 0.55;
    setTimeout(() => {
      Motion.animate(
        el,
        { y: [0, -amp, 0] },
        {
          duration: dur,
          repeat: Infinity,
          easing: "ease-in-out",
          delay: i * 0.4,
        }
      );
    }, entranceDelay * 1000);
  });
}

/* ─────────────────────────────────────────
   REDUCED MOTION — STATIC MESH
───────────────────────────────────────── */

function _showStaticMesh() {
  document.querySelectorAll(".sm-node").forEach(n  => { n.style.opacity  = "0.80"; });
  document.querySelectorAll(".sm-aura").forEach(a  => { a.style.opacity  = "0.45"; });
  document.querySelectorAll(".sm-path").forEach(p  => { p.style.opacity  = "0.30"; });

  const packets = document.querySelector(".sm-packets");
  if (packets) packets.style.opacity = "0";
}

/* ─────────────────────────────────────────
   MAIN ENTRY POINT
───────────────────────────────────────── */

export function initViewport() {
  initViewportHeight();
  initMotionAnimations();
}
