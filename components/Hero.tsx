'use client'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Felipe Sergio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        Soluções inteligentes e escaláveis em infraestrutura e Cloud
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={`${basePath}/front.png`}
          alt="HeroImage"
          className={styles.heroImage}
        />
      </motion.div>
    </section>
  )
}
