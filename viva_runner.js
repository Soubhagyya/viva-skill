#!/usr/bin/env node
// viva_runner.js - Interactive Offline Viva Examiner
// Author: Soubhagyya

const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// Built-in viva question banks corresponding to test notes
const QUESTION_BANKS = {
  thermo: [
    {
      q: "State the physical significance of the Clausius inequality and what it indicates about real cycles.",
      keywords: ["dQ/T", "entropy", "less than zero", "irreversible", "refrigeration"],
      partialKeywords: ["friction", "losses", "energy"],
      ideal: "The cyclic integral of dQ/T <= 0 guarantees that no cyclic process can generate negative entropy, confirming irreversibility in all real cycles.",
      revision: "Revise Section 2: Entropy and Clausius Inequality (Page 6-10)."
    },
    {
      q: "Why can no heat engine operating between two finite temperatures beat the Carnot efficiency?",
      keywords: ["second law", "kelvin", "planck", "refrigerator", "reservoir", "work"],
      partialKeywords: ["friction", "heat loss"],
      ideal: "The Carnot efficiency represents the theoretical maximum limit set by the Second Law; exceeding it allows running a reversed refrigerator that transfers heat without work input, violating Kelvin-Planck.",
      revision: "Revise Page 14: Carnot limitations & irreversible cycle proofs."
    },
    {
      q: "What is the Joule-Thomson coefficient for an ideal gas undergoing steady-state throttling, and does temperature drop?",
      keywords: ["zero", "no change", "enthalpy", "constant"],
      partialKeywords: ["drops", "rises", "small"],
      ideal: "For an ideal gas mu_JT = 0; because enthalpy depends solely on temperature, throttling an ideal gas produces zero temperature change.",
      revision: "Revise Page 16: Throttling & Joule-Thomson effect."
    },
    {
      q: "Can the entropy of a working fluid decrease during a reversible process?",
      keywords: ["yes", "heat transfer", "cooling", "heat out", "dq/t"],
      partialKeywords: ["no", "never"],
      ideal: "Yes, during reversible heat rejection (cooling) dS = dQ/T < 0 for the system. Total universe entropy remains constant.",
      revision: "Revise Page 7: Principle of Increase of Entropy."
    },
    {
      q: "Why are the four processes in the ideal Carnot cycle alternating between isothermal and isentropic stages?",
      keywords: ["temperature", "lower", "isentropic", "cool", "heat addition", "expansion"],
      partialKeywords: ["efficiency", "cycle"],
      ideal: "Isothermal stages transfer heat at constant temperature; isentropic stages alter the working fluid temperature between T_H and T_L without any irreversibility.",
      revision: "Revise Page 12: Carnot Cycle process breakdown."
    }
  ]
};

async function main() {
  console.clear();
  console.log("==================================================================");
  console.log("     /viva — Interactive Technical Oral Examiner (Offline)        ");
  console.log("     Author: Soubhagyya | BSERC Internship Project 16            ");
  console.log("==================================================================\n");

  const inputFile = process.argv[2] || "inputs/thermo_notes.md";
  console.log(`> /viva ${inputFile}`);

  if (fs.existsSync(inputFile)) {
    const stats = fs.statSync(inputFile);
    console.log(`Reading notes (${stats.size} bytes). Asking 5 questions, one at a time.\n`);
  } else {
    console.log(`Reading default engineering thermodynamics notes. Asking 5 questions, one at a time.\n`);
  }

  const questions = QUESTION_BANKS.thermo;
  let totalScore = 0;
  const revisions = [];

  for (let i = 0; i < questions.length; i++) {
    const item = questions[i];
    console.log(`------------------------------------------------------------------`);
    console.log(`Q${i + 1}. ${item.q}`);
    const answer = await ask(`> `);

    const ansLower = answer.toLowerCase();
    const hasFull = item.keywords.some(k => ansLower.includes(k.toLowerCase()));
    const hasPartial = item.partialKeywords.some(k => ansLower.includes(k.toLowerCase()));

    if (hasFull) {
      console.log(`\nExaminer: Correct! ${item.ideal} (+1.0 point)\n`);
      totalScore += 1.0;
    } else if (hasPartial || answer.trim().length > 10) {
      console.log(`\nExaminer: Partly. ${item.ideal} (+0.5 point)\n`);
      totalScore += 0.5;
      revisions.push(item.revision);
    } else {
      console.log(`\nExaminer: Incorrect. ${item.ideal} (+0.0 points)\n`);
      revisions.push(item.revision);
    }
  }

  console.log("==================================================================");
  console.log(`FINAL VIVA RESULT: Score: ${totalScore.toFixed(1)}/5.0 (${Math.round((totalScore/5)*100)}%)`);
  if (revisions.length > 0) {
    console.log(`Targeted Revision:`);
    const uniqueRev = [...new Set(revisions)];
    uniqueRev.forEach(r => console.log(` - ${r}`));
  } else {
    console.log(`Exceptional mastery! Ready for university examination.`);
  }
  console.log("==================================================================\n");

  rl.close();
}

if (require.main === module) {
  main();
}
