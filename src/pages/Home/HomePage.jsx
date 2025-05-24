import { useEffect } from 'react'
import { motion } from 'framer-motion'
import TopOffersSection from '../../components/sections/TopOffersSection'
import { MainLayout } from '../../components/layouts/MainLayout'
import Nav from '../../components/layouts/Nav'
import HeroSection from '../../components/sections/HeroSection'
import Hero2 from '../../components/sections/Hero2'
import ViewSection from '../../components/sections/View'
import Hero3 from '../../components/sections/Hero3'
import SearchBar from '../../components/search/SearchBar'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const HomePage = () => {
  return (
    <MainLayout>
      <Nav />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        <TopOffersSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={1}>
        <HeroSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={2}>
        <Hero2 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={3}>
        <SearchBar />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={4}>
        <ViewSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={5}>
        <Hero3 />
      </motion.div>
    </MainLayout>
  )
}

export default HomePage
