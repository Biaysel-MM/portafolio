<script setup>
import { ref, onMounted } from 'vue'

const technologies = [
  'Vue.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript',
  'Bootstrap', 'Node.js', 'Express', 'ASP.NET Web API', 'Swagger',
  'Git', 'GitHub', 'GitLab', 'Sourcetree', 'SQL Server', 'Figma'
]

const orbitRef = ref(null)
const radius = ref(120)

function updateRadius() {
  if (!orbitRef.value) return
  const w = orbitRef.value.offsetWidth
  radius.value = Math.floor(w * 0.38)
}

onMounted(() => {
  updateRadius()
  window.addEventListener('resize', updateRadius)
})
</script>

<template>
  <section id="tech" class="relative py-32 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--neon-primary)]/2 rounded-full blur-[120px]" />

    <div class="max-w-7xl mx-auto px-6 lg:px-24">
      <div class="text-center mb-20 space-y-4">
        <span class="text-[var(--neon-primary)] font-['JetBrains_Mono'] text-xs tracking-[0.3em] uppercase">
          Tecnologías
        </span>
        <h2 class="text-3xl lg:text-5xl font-['Space_Grotesk'] font-bold">
          Stack <span class="text-[var(--neon-primary)]">Tecnológico</span>
        </h2>
      </div>

      <div class="relative flex items-center justify-center">
        <div ref="orbitRef" class="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
          <!-- Orbit rings -->
          <div class="absolute inset-[15%] rounded-full border border-[var(--border-default)] animate-orbit-spin" />
          <div class="absolute inset-[30%] rounded-full border border-[var(--border-default)]/50 animate-orbit-spin" style="animation-direction: reverse; animation-duration: 30s" />
          <div class="absolute inset-[45%] rounded-full border border-[var(--border-default)]/30 animate-orbit-spin" style="animation-duration: 25s" />

          <!-- Center -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-[var(--neon-primary)]/30 flex flex-col items-center justify-center bg-[var(--bg-primary)]/80 backdrop-blur-sm shadow-[var(--shadow-glow)] animate-pulse-glow">
              <span class="text-[var(--neon-primary)] font-['JetBrains_Mono'] font-bold text-lg leading-none">&lt;/&gt;</span>
              <span class="text-[var(--text-muted)] text-[8px] font-['JetBrains_Mono'] mt-1">Tecnologías</span>
            </div>
          </div>

          <!-- Orbiting items group -->
          <div class="absolute inset-0 animate-orbit-spin">
            <div v-for="(tech, i) in technologies" :key="tech"
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              :style="{ transform: `rotate(${i * 22.5}deg) translateX(${radius}px)` }">
              <div class="animate-orbit-counter">
                <span class="inline-block px-3 py-1.5 rounded-md border border-[var(--border-default)] bg-[var(--bg-secondary)]/80 backdrop-blur-sm text-xs font-['JetBrains_Mono'] text-[var(--text-muted)] whitespace-nowrap transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--neon-primary)] hover:shadow-[var(--shadow-glow)]">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mt-16 lg:hidden">
        <span v-for="tech in technologies" :key="tech"
          class="px-3 py-1.5 rounded-md border border-[var(--border-default)] text-xs font-['JetBrains_Mono'] text-[var(--text-muted)]">
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>
