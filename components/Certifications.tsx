'use client'
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const certifications = [
  "Nutanix Certified Professional - Unified Storage 6",
  "Nutanix Certified Professional - Multicloud Infrastructure 6",
  "Nutanix Certified Associate 6",
  "Nutanix Certified Professional (NCP)",
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified Cloud Practitioner",
  "Oracle Cloud Data Management 2023 Certified Foundations Associate",
  "Oracle Cloud Infrastructure Certified Foundations Associate",
  "ICSI | CNSS Certified Network Security Specialist",
];

export default function Certifications() {
  return (
    <section className={styles.certifications}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Qualificações Técnicas
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className={styles.certText}
      >
        Certificações em TI são reconhecimentos oficiais que comprovam o domínio
        de tecnologias e boas práticas. Elas validam a experiência do
        profissional em áreas críticas como computação em nuvem, segurança,
        redes e infraestrutura. Exemplos incluem a certificação{" "}
        <strong>AWS Solutions Architect – Associate (SAA)</strong>, que valida
        conhecimento em arquitetura de sistemas na nuvem, e{" "}
        <strong>Nutanix NCP / NCM-MCI</strong>, que demonstra expertise em
        soluções de infraestrutura multicloud.
      </motion.p>

       <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className={styles.certText}
      >
       Estas são as certificações que compõem o hall de conquistas.
      </motion.p>

      <ul className={styles.certList}>
        {certifications.map((cert, i) => (
          <motion.li
            key={cert}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {cert}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
