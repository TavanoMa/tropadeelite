'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, Share2, Skull } from 'lucide-react'
import { personalityQuestions, personalityResults } from '@/data/quiz'

export function PersonalityTest() {
  const [current, setCurrent] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)

  const question = personalityQuestions[current]
  const total = personalityQuestions.length
  const progress = (current / total) * 100

  function handleAnswer(optionScores: Record<string, number>) {
    const newScores = { ...scores }
    for (const [key, value] of Object.entries(optionScores)) {
      newScores[key] = (newScores[key] ?? 0) + value
    }
    setScores(newScores)

    if (current + 1 >= total) {
      setShowResult(true)
    } else {
      setCurrent((c) => c + 1)
    }
  }

  function getResult() {
    let maxScore = 0
    let resultId = 'nascimento'
    for (const [key, value] of Object.entries(scores)) {
      if (value > maxScore) {
        maxScore = value
        resultId = key
      }
    }
    return personalityResults.find((r) => r.id === resultId) ?? personalityResults[0]
  }

  function restart() {
    setCurrent(0)
    setScores({})
    setShowResult(false)
  }

  if (showResult) {
    const result = getResult()
    const shareText = `Fiz o teste de personalidade do Tropa de Elite e descobri que seria o ${result.character}! Faça o seu:`

    return (
      <div className="pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 text-center"
        >
          <Skull className="h-20 w-20 text-olive-500 mx-auto mb-6" />
          <p className="text-xs text-olive-400 uppercase tracking-widest font-medium mb-2">
            Seu resultado
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            {result.title}
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed max-w-lg mx-auto">
            {result.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {result.traits.map((trait) => (
              <span
                key={trait}
                className="px-3 py-1.5 text-xs rounded-full bg-olive-900/30 text-olive-300 border border-olive-800/30"
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-olive-700 text-white font-semibold text-sm uppercase tracking-wider hover:bg-olive-600 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Refazer Teste
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${shareText} https://tropadeelite.com.br/quem-voce-seria`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-zinc-300 font-semibold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Compartilhar
            </a>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pb-20">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 mb-2">
          <span>Pergunta {current + 1} de {total}</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-olive-600 to-burnt-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 sm:p-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold mb-6">
              {question.question}
            </h2>
            <div className="space-y-3">
              {question.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option.scores)}
                  className="w-full text-left p-4 rounded-xl border border-white/5 hover:border-olive-700/30 hover:bg-white/[0.02] transition-all duration-200"
                >
                  <span className="text-sm sm:text-base text-zinc-300">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
