<script setup>
import { ref } from 'vue'
import PdfViewer from './PdfViewer.vue'

const base = import.meta.env.BASE_URL

const technologies = ['Vue.js', 'Tailwind CSS', 'TypeScript', 'C# / .NET', 'Node.js', 'NestJS', 'SQL Server', 'MySQL']
const showCv = ref(false)
const cvPdf = `${base}document/Curr%C3%ADculum_Vitae__Biaysel_Minyety_Mejia.pdf`
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-20 lg:pt-0">
    <div class="max-w-7xl mx-auto px-6 lg:px-24 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Left Content -->
        <div class="flex-1 space-y-8 text-center lg:text-left">
          <div class="space-y-3">
            <p class="text-(--neon-primary) font-['JetBrains_Mono'] text-sm tracking-[0.3em] uppercase animate-pulse">
              Desarrollador Full Stack
            </p>
            <h1 class="text-5xl lg:text-7xl font-['Space_Grotesk'] font-bold leading-tight">
              <span class="text-(--text-primary)">Biaysel</span>
              <br />
              <span class="text-(--neon-primary)">Minyety</span>
            </h1>
            <p class="text-(--text-secondary) text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Desarrollo aplicaciones web completas: interfaces con Vue.js y APIs con .NET y Node.js,
              combinando tecnología, creatividad y disciplina.
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects"
              class="px-6 py-3 rounded-lg bg-(--neon-primary) text-(--bg-primary) font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:shadow-(--shadow-glow-strong) hover:scale-105">
              Ver proyectos
            </a>
            <a href="#contact"
              class="px-6 py-3 rounded-lg border border-(--border-default) text-(--neon-primary) font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow) hover:scale-105">
              Contactarme
            </a>
            <button
              @click="showCv = true"
              class="px-6 py-3 rounded-lg border border-(--border-default) text-(--text-secondary) font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:border-(--border-hover) hover:text-(--neon-primary) hover:shadow-(--shadow-glow) hover:scale-105">
              Ver CV
            </button>
          </div>

          <!-- Tech Badges -->
          <div class="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
            <span v-for="tech in technologies" :key="tech"
              class="px-3 py-1.5 rounded-md border border-(--border-default) text-(--text-muted) text-xs font-['JetBrains_Mono'] transition-all duration-300 hover:border-(--border-hover) hover:text-(--neon-primary) hover:shadow-(--shadow-glow)">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Right Image -->
        <div class="shrink-0 relative">
          <div class="absolute inset-0 bg-(--neon-primary) opacity-5 blur-20 rounded-full scale-150" />
          <div class="relative hexagon-clip w-70 h-80 lg:w-90 lg:h-100">
            <div class="absolute inset-0 hexagon-clip border-2 border-(--neon-primary)/30 animate-pulse-glow" />
            <img :src="`${base}Images/imagen-personal.png`" alt="Biaysel Minyety"
              class="w-full h-auto object-cover hexagon-clip" />
            <div class="absolute inset-0 hexagon-clip bg-linear-to-t from-(--neon-primary)/10 via-transparent to-transparent" />
          </div>
          <div class="absolute -top-4 -right-4 w-2 h-2 rounded-full bg-(--neon-primary)/40 animate-ping" />
          <div class="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full bg-(--neon-tertiary)/40 animate-ping" style="animation-delay: 1s" />
          <div class="absolute top-1/2 -right-6 w-1 h-1 rounded-full bg-(--neon-secondary)/40 animate-ping" style="animation-delay: 2s" />
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-(--text-muted) text-xs font-['JetBrains_Mono']">Scroll</span>
      <div class="w-0.5 h-8 bg-linear-to-b from-(--neon-primary) to-transparent animate-float" />
    </div>

    <!-- CV Preview Modal -->
    <Teleport to="body">
      <div
        v-if="showCv"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="showCv = false"
      >
        <div class="relative w-full max-w-4xl h-[90vh] flex flex-col bg-(--bg-secondary) rounded-2xl border border-(--border-default) overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-(--border-default)">
            <h3 class="font-['Space_Grotesk'] font-semibold text-(--text-primary)">Currículum Vitae</h3>
            <div class="flex items-center gap-2">
              <a :href="cvPdf" download="Curriculum_Biaysel_Minyety_Mejia.pdf"
                class="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border-default) text-2.5 font-['JetBrains_Mono'] text-(--neon-primary) transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow)">
                <iconify-icon icon="ph:download-simple" width="14" />
                Descargar
              </a>
              <button
                @click="showCv = false"
                class="w-8 h-8 flex items-center justify-center rounded-lg border border-(--border-default) text-(--text-muted) hover:text-(--neon-primary) hover:border-(--border-hover) transition-all duration-300"
              >
                <iconify-icon icon="ph:x" width="18" />
              </button>
            </div>
          </div>

          <!-- Visor del mismo PDF que se descarga -->
          <div class="flex-1 overflow-y-auto p-4 sm:p-6 bg-(--bg-primary)/40">
            <PdfViewer :src="cvPdf" />
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
