# `/viva` — Technical Viva Examiner Skill Package

**Author:** Soubhagyya  
**Project:** Bharat Space Education Research Centre (BSERC) Internship — Week 2 (Project 16)  
**Category:** Section D: Video, Skills and Design  
**Skill Trigger:** `/viva [notes_file]`

---

## Overview

`/viva` is a specialized, production-ready agent skill that turns any AI into an interactive university oral examiner. Instead of dumping multiple questions at once, the skill enforces rigorous one-at-a-time turn pacing, evaluates nuances in student explanations, provides immediate pedagogical feedback, and concludes with an objective score and targeted revision references.

---

## What Was Built

1. **`SKILL.md`:**
   - Full agent skill specification with YAML frontmatter metadata.
   - Core behavioral rules: strict one-at-a-time pacing, 5 conceptual stages (definition $\to$ causality $\to$ edge-case $\to$ trade-off $\to$ intuition), point rubric (+1.0 full, +0.5 partial, 0.0 incorrect).
   - Targeted revision directives citing specific pages.

2. **3 Diverse Technical Input Subjects:**
   - `inputs/thermo_notes.md`: Engineering Thermodynamics (Clausius, Carnot theorem, throttling, Joule-Thomson).
   - `inputs/os_notes.md`: Operating Systems (Deadlocks, paging, TLB, thrashing, semaphores).
   - `inputs/dbms_notes.md`: Database Systems (ACID, WAL logging, B+ trees, isolation levels).

3. **3 Documented Viva Evaluation Transcripts:**
   - `evaluations/test1_thermo_run.md` (Score: 4.5/5.0, targeted revision: Page 14).
   - `evaluations/test2_os_run.md` (Score: 5.0/5.0, perfect score).
   - `evaluations/test3_dbms_run.md` (Score: 4.0/5.0, targeted revision: Page 12).

4. **Comparative Benchmark Study:**
   - `benchmark_comparison.md`: Detailed side-by-side analysis contrasting unguided baseline AI behavior against `/viva`, highlighting the elimination of question flooding and cognitive overload.

5. **Offline Interactive Demo Runners:**
   - `viva_runner.js`: Interactive terminal CLI simulator (`node viva_runner.js`).
   - `viva_web_demo.html`: Browser-based terminal simulator with real-time scoring.

---

## Quick Start & Verification

### Option A: Interactive Browser Terminal
Double-click `viva_web_demo.html` in any browser. Type your answers to each of the 5 viva questions to experience the adaptive scoring and final scorecard.

### Option B: Interactive Terminal (Node.js)
```bash
node viva_runner.js inputs/thermo_notes.md
```

---

## Acceptance Criteria Checklist

- [x] Starts correctly in a brand-new session.
- [x] Works across 3 distinct technical input subjects.
- [x] Tested against unguided baseline in `benchmark_comparison.md`, detailing measurable improvements.
- [x] 100% offline autonomy.
