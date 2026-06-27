<script setup>
import { onMounted, onUnmounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechOrbit from './components/TechOrbit.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ParticlesBackground from './components/ParticlesBackground.vue'

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="relative min-h-screen">
    <ParticlesBackground />
    <Sidebar />

    <!-- Background grid overlay -->
    <div class="fixed inset-0 bg-grid pointer-events-none z-[1]" />

    <!-- Radial glow accents -->
    <div class="fixed top-1/4 -left-32 w-96 h-96 bg-[var(--neon-primary)]/2 rounded-full blur-[150px] pointer-events-none z-[1]" />
    <div class="fixed bottom-1/4 -right-32 w-96 h-96 bg-[var(--neon-tertiary)]/1.5 rounded-full blur-[150px] pointer-events-none z-[1]" />

    <!-- Main content -->
    <main class="relative z-10 lg:ml-[90px]">
      <HeroSection />
      <div class="border-t border-[var(--border-default)]/50">
        <AboutSection />
      </div>
      <div class="border-t border-[var(--border-default)]/50">
        <TechOrbit />
      </div>
      <div class="border-t border-[var(--border-default)]/50">
        <ProjectsSection />
      </div>
      <div class="border-t border-[var(--border-default)]/50">
        <ContactSection />
      </div>

      <!-- Footer -->
      <footer class="border-t border-[var(--border-default)]/50 py-8 px-6">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-[var(--text-muted)] text-sm font-['JetBrains_Mono']">
            &copy; 2024 Biaysel Minyety
          </p>
          <p class="text-[var(--text-muted)] text-xs font-['JetBrains_Mono']">
            Crafted with <span class="text-[var(--neon-primary)]">code</span> &bull; Powered by Vue 3 + Tailwind v4
          </p>
        </div>
      </footer>
    </main>
  </div>
</template>
