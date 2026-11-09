# Benchmark Comparison: Task Execution Without Skill vs With `/viva` Skill

**Project:** Project 16 — Your Own Skill (`/viva`)  
**Student:** Soubhagyya  
**Date:** November 2026

---

## 1. Experimental Setup
We tested the same revision task on the identical notes file (`inputs/thermo_notes.md`) under two conditions:
- **Baseline (Without Skill):** Plain unguided prompt: *"Please test me on these thermodynamics notes like a viva examiner."*
- **Trained Agent (With `/viva` Skill):** Invoked with `/viva inputs/thermo_notes.md`.

---

## 2. Side-by-Side Comparison Matrix

| Evaluation Dimension | Without Skill (Baseline AI Chat) | With `/viva` Skill (Engineered Skill) | Measurable Improvement |
| :--- | :--- | :--- | :--- |
| **Interaction Turn Pacing** | Dumps 5 to 10 questions simultaneously in one wall of text. Forces user to scroll and write long essays. | **Strictly asks 1 question at a time.** Waits for user reply before evaluating and advancing. | Eliminates cognitive overload; recreates true 1-on-1 viva experience. |
| **Adaptive Follow-up & Nuance Probing** | Evaluates superficially with generic praise ("Great job!") without correcting partial answers. | **Critiques nuanced mistakes.** Detects partial truths (e.g. friction vs second law reversible limit) and explains the distinction. | High pedagogical value; pinpoints exact conceptual gaps. |
| **Scoring Discipline** | Gives ambiguous praise with no standardized rubric or numerical score. | **Scores out of exactly 5.0 points** (+1.0 full, +0.5 partial, 0.0 incorrect) with transparent point accounting. | Clear objective calibration of candidate readiness. |
| **Actionable Revision Directives** | General suggestions ("Study more thermodynamics"). | **Cites exact note sections and page numbers:** *"Revise Page 14: Carnot theorem proofs & reverse refrigerator thought experiment."* | Actionable roadmap saving hours of revision time. |
| **Session Repeatability** | Variable behavior; each restart formats questions differently. | **Consistent 5-stage progression:** Definition $\to$ Causality $\to$ Edge case $\to$ Trade-off $\to$ Physical intuition. | Deterministic, standardized oral exam protocol. |

---

## 3. Qualitative Transcript Snippets

### Without Skill (Chaotic Wall of Text):
```
AI: Here are 5 questions to test your knowledge:
1. What is the Clausius statement?
2. What is the Carnot theorem and its efficiency formula?
3. Explain throttling and the Joule-Thomson coefficient.
4. What happens during an isentropic process?
5. State the principle of increase of entropy.
Please reply with your answers to all 5!
```
*(User is overwhelmed and abandons the test).*

### With `/viva` Skill (Structured Pacing):
```
> /viva thermo_notes.md
Reading notes. Asking 5 questions, one at a time.

Q1. State the physical significance of the Clausius inequality and what it indicates about real cycles.
> Student answers...
Examiner: Correct. The cyclic integral of dQ/T <= 0 guarantees that no cycle can destroy entropy... (+1.0)

Q2. Why can no engine beat Carnot efficiency?
> Student: Because of friction.
Examiner: Partly. Friction lowers real engines, but what about an ideal one? (+0.5)
```
*(Clear, engaging, educational viva).*
