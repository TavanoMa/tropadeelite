'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, RotateCcw, Share2, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { quizQuestions } from '@/data/quiz'

export function QuizGame() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showResult, setShowResult] = useState(false)

  const question = quizQuestions[current]
  const total = quizQuestions.length
  const progress = ((current + (selected !== null ? 1 : 0)) / total) * 100
  const isCorrect = selected === question?.correctAnswer

  function handleSelect(index: number) {
    if (selected !== null) return
    setSelected(index)
    if (index === question.correctAnswer) {
      setScore((s) => s + 1)
    }
    setAnswers((a) => [...a, index])
  }

  function handleNext() {
    if (current + 1 >= total) {
      setShowResult(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  function restart() {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setAnswers([])
    setShowResult(false)
  }

  function getResultMessage() {
    const pct = (score / total) * 100
    if (pct === 100) return 'Perfeito! Você é um verdadeiro especialista em Tropa de Elite!'
    if (pct >= 80) return 'Excelente! Você conhece muito bem o filme!'
    if (pct >= 60) return 'Bom resultado! Você sabe bastante sobre Tropa de Elite.'
    if (pct >= 40) return 'Nada mal! Mas ainda tem muito a aprender sobre o filme.'
    return 'Precisa assistir o filme de novo! Pede pra sair e volta preparado.'
  }

  if (showResult) {
    const shareText = `Acertei ${score} de ${total} no Quiz Tropa de Elite! Teste seus conhecimentos:`
    return (
      <div className="pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 text-center"
        >
          <Trophy className="h-16 w-16 text-burnt-500 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">
            {score} / {total}
          </h2>
          <p className="mt-3 text-lg text-zinc-400">{getResultMessage()}</p>

          <div className="mt-6 w-full bg-zinc-800 rounded-full h-3">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-olive-600 to-burnt-500 transition-all"
              style={{ width: `${(score / total) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-zinc-500">{Math.round((score / total) * 100)}% de acerto</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-olive-700 text-white font-semibold text-sm uppercase tracking-wider hover:bg-olive-600 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Jogar Novamente
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${shareText} https://tropadeelite.com.br/quiz`)}`}
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
          <span>{score} acerto{score !== 1 ? 's' : ''}</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-olive-600 to-burnt-500"
            initial={{ width: 0 }}
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
              {question.options.map((option, i) => {
                const isThisCorrect = i === question.correctAnswer
                const isThisSelected = i === selected

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={selected !== null}
                    className={cn(
                      'w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3',
                      selected === null
                        ? 'border-white/5 hover:border-olive-700/30 hover:bg-white/[0.02]'
                        : isThisCorrect
                          ? 'border-olive-600/50 bg-olive-900/20'
                          : isThisSelected
                            ? 'border-red-600/50 bg-red-900/10'
                            : 'border-white/5 opacity-50'
                    )}
                  >
                    <span
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border',
                        selected === null
                          ? 'border-white/10 text-zinc-500'
                          : isThisCorrect
                            ? 'border-olive-500 bg-olive-600 text-white'
                            : isThisSelected
                              ? 'border-red-500 bg-red-600 text-white'
                              : 'border-white/5 text-zinc-600'
                      )}
                    >
                      {selected !== null && isThisCorrect ? (
                        <Check className="h-4 w-4" />
                      ) : selected !== null && isThisSelected ? (
                        <X className="h-4 w-4" />
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </span>
                    <span className="text-sm sm:text-base">{option}</span>
                  </button>
                )
              })}
            </div>

            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <div
                  className={cn(
                    'rounded-xl p-4 text-sm',
                    isCorrect
                      ? 'bg-olive-900/20 border border-olive-800/30 text-olive-300'
                      : 'bg-red-900/10 border border-red-900/30 text-red-300'
                  )}
                >
                  <p className="font-medium mb-1">
                    {isCorrect ? 'Correto!' : 'Incorreto!'}
                  </p>
                  <p className="text-zinc-400">{question.explanation}</p>
                </div>

                <button
                  onClick={handleNext}
                  className="mt-4 w-full px-6 py-3 rounded-lg bg-olive-700 text-white font-semibold text-sm uppercase tracking-wider hover:bg-olive-600 transition-colors"
                >
                  {current + 1 >= total ? 'Ver Resultado' : 'Próxima Pergunta'}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
