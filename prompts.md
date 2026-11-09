# Engineering Prompts Log — Project 16: Your Own Skill (`/viva`)

This document records the step-by-step engineering prompts and design decisions used to develop the `/viva` agent skill package.

---

### Prompt 1: Skill Specification & Persona Definition
> "Design a custom agent skill package for an interactive technical viva examiner invoked via `/viva [notes.pdf]`. The examiner must evaluate student notes, ask exactly 5 conceptual questions strictly one at a time, provide adaptive follow-up critique, award numerical points, and provide targeted revision advice citing specific pages. Author: Soubhagyya."

*Outcome:*
- Created `SKILL.md` with complete YAML frontmatter, strict turn-by-turn operational constraints, and few-shot formatting schema.

---

### Prompt 2: Domain Test Fixtures
> "Generate 3 distinct realistic technical revision notes for university engineering subjects: Engineering Thermodynamics (`thermo_notes.md`), Operating Systems (`os_notes.md`), and Database Management Systems (`dbms_notes.md`). Structure each with clear page sections, core laws, mechanism formulas, and edge cases."

*Outcome:*
- Authored 3 thorough markdown note files in `inputs/` matching undergraduate university curricula.

---

### Prompt 3: Empirical Evaluation Across 3 Independent Inputs
> "Execute simulated viva examinations using `/viva` across all 3 test inputs. Generate complete evaluation logs recording candidate responses, examiner critique, point awards, and final scorecards with targeted revision pages."

*Outcome:*
- Recorded 3 comprehensive exam transcripts in `evaluations/` demonstrating adaptive feedback, nuance handling, and score computation (Thermodynamics: 4.5/5, OS: 5.0/5, DBMS: 4.0/5).

---

### Prompt 4: Baseline Benchmark & 'Without Skill' Contrast
> "Execute the same revision query on an unguided baseline agent without the skill. Document the exact failure modes (dumping 5 questions at once, superficial praise, zero page-level revision) and summarize the measurable improvements in a comparative report."

*Outcome:*
- Produced `benchmark_comparison.md` detailing qualitative and structural superiority of the skill.

---

### Prompt 5: Offline Terminal & Web Demo Runners
> "Build an offline interactive Node.js CLI runner (`viva_runner.js`) and a standalone browser terminal (`viva_web_demo.html`) so any evaluator can test `/viva` locally without needing external APIs or connectivity."

*Outcome:*
- Built terminal runner and interactive web console replicating the exact viva workflow.
