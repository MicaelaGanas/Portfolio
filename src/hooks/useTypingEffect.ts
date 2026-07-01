import { useEffect, useState } from 'react'

export function useTypingEffect(words: string[], typeSpeed = 80, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      if (charIndex === current.length) {
        timeout = setTimeout(() => setDeleting(true), pause)
      } else {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), typeSpeed)
      }
    } else if (deleting && charIndex >= 0) {
      if (charIndex === 0) {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed)
      }
    }

    setText(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [words, wordIndex, charIndex, deleting, typeSpeed, deleteSpeed, pause])

  return text
}
