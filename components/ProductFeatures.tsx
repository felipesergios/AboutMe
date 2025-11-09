'use client'
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const features = [
  { 
    title: "Performance", 
    text: "Comprometimento constante com a segurança e a otimização de desempenho." 
  },
  { 
    title: "Inovação", 
    text: "Utilização das mais avançadas tecnologias e ferramentas do mercado." 
  },
  { 
    title: "Qualificação", 
    text: "Profissional com mais de 11 certificações reconhecidas nas áreas de TI e Cloud Computing." 
  },
];


export default function ProductFeatures() {
  return (
    <section className={styles.features}>
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </motion.div>
      ))}
    </section>
  );
}
