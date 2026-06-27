<script setup>
import { ref, computed, onMounted } from 'vue'

const technologies = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
  { name: 'HTML', icon: 'simple-icons:html5' },
  { name: 'CSS', icon: 'simple-icons:css3' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'Bootstrap', icon: 'simple-icons:bootstrap' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Express', icon: 'simple-icons:express' },
  { name: 'ASP.NET', icon: 'simple-icons:dotnet' },
  { name: 'Swagger', icon: 'simple-icons:swagger' },
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'GitLab', icon: 'simple-icons:gitlab' },
  { name: 'Sourcetree', icon: 'simple-icons:sourcetree' },
  { name: 'SQL Server', icon: 'simple-icons:microsoftsqlserver' },
  { name: 'Figma', icon: 'simple-icons:figma' },
]

const viewMode = ref('orbit')
const orbitRef = ref(null)
const radius = ref(160)
const isPaused = ref(false)

const angleStep = computed(() => (2 * Math.PI) / technologies.length)

function updateRadius() {
  if (!orbitRef.value) return
  const w = orbitRef.value.offsetWidth
  radius.value = Math.floor(w * 0.36)
}

onMounted(() => {
  updateRadius()
  window.addEventListener('resize', updateRadius)
})

function itemPosition(i) {
  const angle = i * angleStep.value
  const x = Math.cos(angle) * radius.value
  const y = Math.sin(angle) * radius.value
  return { x, y }
}

const doubled = [...technologies, ...technologies]
</script>

<template>
  <section id="tech" class="relative py-32 overflow-hidden">
    <div class="absolute top-[57.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-(--neon-primary)/2 rounded-full blur-37.5" />

    <div class="max-w-7xl mx-auto px-6 lg:px-24 mb-8">
      <div class="text-center space-y-4">
        <span class="text-(--neon-primary) font-['JetBrains_Mono'] text-2.5 tracking-[0.3em] uppercase">
          Tecnologías
        </span>
        <h2 class="text-3xl lg:text-5xl font-['Space_Grotesk'] font-bold">
          Stack <span class="text-(--neon-primary)">Tecnológico</span>
        </h2>

        <div class="flex items-center justify-center gap-3 pt-2">
          <span class="text-2.5 font-['JetBrains_Mono'] text-(--text-muted)">Órbita</span>
          <button
            @click="viewMode = viewMode === 'orbit' ? 'marquee' : 'orbit'"
            class="relative w-12 h-6 rounded-full border border-(--border-default) transition-all duration-300"
            :class="{ 'bg-(--neon-primary)/20 border-(--neon-primary)': viewMode === 'marquee' }"
          >
            <div
              class="absolute top-0.5 w-4.5 h-4.5 rounded-full bg-(--neon-primary) transition-all duration-300"
              :class="viewMode === 'marquee' ? 'left-6.5' : 'left-0.5'"
            />
          </button>
          <span class="text-2.5 font-['JetBrains_Mono'] text-(--text-muted)">Carrusel</span>
        </div>
      </div>
    </div>

    <!-- Orbit View -->
    <div v-show="viewMode === 'orbit'">
      <div
        class="relative flex items-center justify-center"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <div
          ref="orbitRef"
          class="relative w-100 h-100 sm:w-125 sm:h-125 lg:w-150 lg:h-150"
        >
          <!-- Orbit rings (they pause too) -->
          <div class="absolute inset-[10%] rounded-full border border-(--border-default) animate-orbit-spin" :class="{ 'animate-paused': isPaused }" />
          <div class="absolute inset-[22%] rounded-full border border-(--border-default)/50 animate-orbit-spin" :class="{ 'animate-paused': isPaused }" style="animation-direction: reverse; animation-duration: 30s" />
          <div class="absolute inset-[34%] rounded-full border border-(--border-default)/30 animate-orbit-spin" :class="{ 'animate-paused': isPaused }" style="animation-duration: 25s" />

          <!-- Center -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-(--neon-primary)/30 flex flex-col items-center justify-center bg-(--bg-primary)/80 backdrop-blur-sm shadow-(--shadow-glow) animate-pulse-glow">
              <span class="text-(--neon-primary) font-['JetBrains_Mono'] font-bold text-lg leading-none">&lt;/&gt;</span>
              <span class="text-(--text-muted) text-[8px] font-['JetBrains_Mono'] mt-1">Tecnologías</span>
            </div>
          </div>

          <!-- Orbiting items: parent rotates, each item counter-rotates to stay upright -->
          <div class="absolute inset-0 animate-orbit-spin" :class="{ 'animate-paused': isPaused }">
            <div
              v-for="(tech, i) in technologies"
              :key="tech.name"
              class="absolute left-1/2 top-1/2"
              :style="{
                transform: `translate(calc(-50% + ${itemPosition(i).x}px), calc(-50% + ${itemPosition(i).y}px))`
              }"
            >
              <div class="animate-orbit-counter" :class="{ 'animate-paused': isPaused }">
                <div class="flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl border border-(--border-default) bg-(--bg-secondary)/80 backdrop-blur-sm transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow)">
                  <iconify-icon :icon="tech.icon" width="22" class="text-(--neon-primary)" />
                  <span class="text-2.5 font-['JetBrains_Mono'] text-(--text-muted) whitespace-nowrap">{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mt-16 lg:hidden max-w-7xl mx-auto px-6">
        <span
          v-for="tech in technologies"
          :key="tech.name"
          class="px-3 py-1.5 rounded-md border border-(--border-default) text-2.5 font-['JetBrains_Mono'] text-(--text-muted)"
        >
          {{ tech.name }}
        </span>
      </div>
    </div>

    <!-- Marquee View -->
    <div v-show="viewMode === 'marquee'">
      <div
        class="relative"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <div class="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-(--bg-primary) to-transparent z-10 pointer-events-none" />
        <div class="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-(--bg-primary) to-transparent z-10 pointer-events-none" />

        <div class="flex overflow-hidden py-4">
          <div
            class="flex gap-6 animate-marquee"
            :class="{ 'animate-paused': isPaused }"
          >
            <div
              v-for="(tech, i) in doubled"
              :key="'m1-' + i"
              class="shrink-0 w-32.5 flex flex-col items-center gap-3 p-5 rounded-xl border border-(--border-default) bg-(--bg-secondary)/40 backdrop-blur-sm transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow) hover:-translate-y-1"
            >
              <iconify-icon :icon="tech.icon" width="36" class="text-(--neon-primary)" />
              <span class="text-2.5 font-['JetBrains_Mono'] text-(--text-muted) text-center leading-tight">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <div class="flex overflow-hidden py-4">
          <div
            class="flex gap-6 animate-marquee-reverse"
            :class="{ 'animate-paused': isPaused }"
          >
            <div
              v-for="(tech, i) in [...technologies].reverse().concat([...technologies].reverse())"
              :key="'m2-' + i"
              class="shrink-0 w-32.5 flex flex-col items-center gap-3 p-5 rounded-xl border border-(--border-default) bg-(--bg-secondary)/40 backdrop-blur-sm transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow) hover:-translate-y-1"
            >
              <iconify-icon :icon="tech.icon" width="36" class="text-(--neon-primary)" />
              <span class="text-2.5 font-['JetBrains_Mono'] text-(--text-muted) text-center leading-tight">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mt-16 lg:hidden max-w-7xl mx-auto px-6">
        <span
          v-for="tech in technologies"
          :key="tech.name"
          class="px-3 py-1.5 rounded-md border border-(--border-default) text-2.5 font-['JetBrains_Mono'] text-(--text-muted)"
        >
          {{ tech.name }}
        </span>
      </div>
    </div>
  </section>
</template>
