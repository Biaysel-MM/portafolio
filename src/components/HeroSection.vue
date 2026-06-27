<script setup>
import { ref } from 'vue'

const technologies = ['Vue.js', 'Tailwind CSS', 'Sql Server']
const showCv = ref(false)
const cvPdf = '/document/Curr%C3%ADculum_Vitae__Biaysel_Minyety_Mejia.pdf'
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-20 lg:pt-0">
    <div class="max-w-7xl mx-auto px-6 lg:px-24 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Left Content -->
        <div class="flex-1 space-y-8 text-center lg:text-left">
          <div class="space-y-3">
            <p class="text-(--neon-primary) font-['JetBrains_Mono'] text-sm tracking-[0.3em] uppercase animate-pulse">
              Frontend Developer
            </p>
            <h1 class="text-5xl lg:text-7xl font-['Space_Grotesk'] font-bold leading-tight">
              <span class="text-(--text-primary)">Biaysel</span>
              <br />
              <span class="text-(--neon-primary)">Minyety</span>
            </h1>
            <p class="text-(--text-secondary) text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Desarrollador frontend apasionado por crear experiencias web modernas,
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
            <img src="/Images/imagen-personal.png" alt="Biaysel Minyety"
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
        <div class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-(--bg-secondary) rounded-2xl border border-(--border-default)">
          <!-- Header -->
          <div class="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-(--border-default) bg-(--bg-secondary)/95 backdrop-blur-sm z-10">
            <h3 class="font-['Space_Grotesk'] font-semibold text-(--text-primary)">Currículum Vitae</h3>
            <div class="flex items-center gap-2">
              <a :href="cvPdf" target="_blank" download
                class="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border-default) text-2.5 font-['JetBrains_Mono'] text-(--neon-primary) transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow)">
                <iconify-icon icon="ph:download-simple" width="14" />
                PDF
              </a>
              <button
                @click="showCv = false"
                class="w-8 h-8 flex items-center justify-center rounded-lg border border-(--border-default) text-(--text-muted) hover:text-(--neon-primary) hover:border-(--border-hover) transition-all duration-300"
              >
                <iconify-icon icon="ph:x" width="18" />
              </button>
            </div>
          </div>

          <!-- CV Content -->
          <div class="px-6 py-8 space-y-8 text-(--text-primary)">
            <!-- Header -->
            <div class="text-center space-y-2 pb-6 border-b border-(--border-default)">
              <h1 class="text-2xl font-['Space_Grotesk'] font-bold">Biaysel Minyety Mejia</h1>
              <p class="text-sm text-(--text-muted) font-['JetBrains_Mono']">Ocoa, República Dominicana</p>
              <p class="text-sm text-(--text-muted) font-['JetBrains_Mono']">829-801-6578</p>
              <div class="flex items-center justify-center gap-4 text-2.5 text-(--neon-primary) font-['JetBrains_Mono']">
                <a href="https://www.linkedin.com/in/biaysel-minyety-21217a279/" target="_blank" class="hover:underline">LinkedIn</a>
                <a href="https://biaysel-mm.github.io/portafolio/" target="_blank" class="hover:underline">Portfolio</a>
                <a href="https://github.com/Biaysel-MM" target="_blank" class="hover:underline">GitHub</a>
              </div>
            </div>

            <!-- Title -->
            <div>
              <h2 class="text-lg font-['Space_Grotesk'] font-semibold text-(--neon-primary) mb-2">Desarrollador Web Frontend</h2>
              <p class="text-sm text-(--text-secondary) leading-relaxed">
                Estudiante de Tecnólogo en Desarrollo de Software (ITLA) con experiencia en creación de aplicaciones
                web escalables. Apasionado por el backend con Node.js y frontend responsive.
              </p>
            </div>

            <!-- Experience -->
            <div>
              <h2 class="text-lg font-['Space_Grotesk'] font-semibold text-(--neon-primary) mb-4">Experiencia</h2>
              <div class="space-y-4">
                <div class="p-4 rounded-xl border border-(--border-default) bg-(--bg-tertiary)/20">
                  <h3 class="font-['Space_Grotesk'] font-semibold">Desarrollador Web Frontend — Proyecto Kesia</h3>
                  <p class="text-2.5 text-(--text-muted) font-['JetBrains_Mono'] mb-2">2024</p>
                  <p class="text-sm text-(--text-secondary)">Aplicación web para repostería artesanal con sistema de pedidos.</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="t in ['Node.js','Express.js','MySQL','HTML5','CSS3','JavaScript']" :key="t" class="px-2 py-0.5 rounded text-2.5 font-['JetBrains_Mono'] border border-(--border-default) text-(--text-muted)">{{ t }}</span>
                  </div>
                </div>
                <div class="p-4 rounded-xl border border-(--border-default) bg-(--bg-tertiary)/20">
                  <h3 class="font-['Space_Grotesk'] font-semibold">Desarrollador Web Frontend — Proyecto EJAC</h3>
                  <p class="text-2.5 text-(--text-muted) font-['JetBrains_Mono'] mb-2">2023</p>
                  <p class="text-sm text-(--text-secondary)">Sitio web responsive para escuela primaria con gestión de contenido dinámico.</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="t in ['HTML5','CSS3','JavaScript']" :key="t" class="px-2 py-0.5 rounded text-2.5 font-['JetBrains_Mono'] border border-(--border-default) text-(--text-muted)">{{ t }}</span>
                  </div>
                </div>
                <div class="p-4 rounded-xl border border-(--border-default) bg-(--bg-tertiary)/20">
                  <h3 class="font-['Space_Grotesk'] font-semibold">Desarrollador Web Frontend — Diagnostic Care</h3>
                  <p class="text-2.5 text-(--text-muted) font-['JetBrains_Mono'] mb-2">2023</p>
                  <p class="text-sm text-(--text-secondary)">Plataforma médica con predicción de síntomas (proyecto académico).</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="t in ['HTML5','CSS3','JavaScript']" :key="t" class="px-2 py-0.5 rounded text-2.5 font-['JetBrains_Mono'] border border-(--border-default) text-(--text-muted)">{{ t }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Education -->
            <div>
              <h2 class="text-lg font-['Space_Grotesk'] font-semibold text-(--neon-primary) mb-4">Educación y certificación</h2>
              <ul class="space-y-3 text-sm text-(--text-secondary)">
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--neon-primary) shrink-0" />
                  <div><strong class="text-(--text-primary)">Tecnólogo en Desarrollo de Software</strong> — ITLA <span class="text-2.5 text-(--text-muted) font-['JetBrains_Mono']">[2023-2025]</span></div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--neon-primary) shrink-0" />
                  <div><strong class="text-(--text-primary)">Curso de Git y GitHub Profesional</strong> — YouTube (MoureDev) <span class="text-2.5 text-(--text-muted) font-['JetBrains_Mono']">[2023]</span></div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--neon-primary) shrink-0" />
                  <div><strong class="text-(--text-primary)">Bachiller Técnico en Informática</strong> — Liceo Técnico José Núñez de Cáceres <span class="text-2.5 text-(--text-muted) font-['JetBrains_Mono']">[2022]</span></div>
                </li>
              </ul>
            </div>

            <!-- Skills -->
            <div>
              <h2 class="text-lg font-['Space_Grotesk'] font-semibold text-(--neon-primary) mb-4">Habilidades Técnicas</h2>
              <div class="grid grid-cols-2 gap-2 text-sm text-(--text-secondary)">
                <div v-for="s in [
                  { name: 'HTML', level: 'Avanzado' },
                  { name: 'CSS / Tailwind CSS', level: 'Avanzado' },
                  { name: 'JavaScript / Vue.js', level: 'Intermedio' },
                  { name: 'Node.js / Express.js', level: 'Intermedio' },
                  { name: 'Bootstrap', level: 'Intermedio' },
                  { name: 'ASP.NET Web API', level: 'Básico' },
                  { name: 'Swagger', level: 'Básico' },
                  { name: 'MySQL / SQL Server', level: 'Intermedio' },
                  { name: 'Git / GitHub / GitLab', level: 'Intermedio' },
                  { name: 'Sourcetree', level: 'Intermedio' },
                  { name: 'Figma', level: 'Básico' },
                  { name: 'SQL', level: 'Intermedio' },
                ]" :key="s.name" class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-(--neon-primary)/50 shrink-0" />
                  <span class="text-(--text-muted)">{{ s.name }}</span>
                  <span class="text-2.5 font-['JetBrains_Mono'] text-(--neon-primary) ml-auto">{{ s.level }}</span>
                </div>
              </div>
            </div>

            <!-- Languages -->
            <div class="pb-4">
              <h2 class="text-lg font-['Space_Grotesk'] font-semibold text-(--neon-primary) mb-4">Idiomas</h2>
              <div class="flex gap-8 text-sm text-(--text-secondary)">
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-(--neon-primary) shrink-0" />
                  <span class="text-(--text-muted)">Español</span>
                  <span class="text-2.5 font-['JetBrains_Mono'] text-(--neon-primary)">Nativo</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-(--neon-primary)/50 shrink-0" />
                  <span class="text-(--text-muted)">Inglés</span>
                  <span class="text-2.5 font-['JetBrains_Mono'] text-(--neon-primary)">Básico (A2)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="sticky bottom-0 flex justify-center px-6 py-4 border-t border-(--border-default) bg-(--bg-secondary)/95 backdrop-blur-sm">
            <a :href="cvPdf" target="_blank" download
              class="flex items-center gap-2 px-6 py-3 rounded-lg bg-(--neon-primary) text-(--bg-primary) font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:shadow-(--shadow-glow-strong) hover:scale-105">
              <iconify-icon icon="ph:download-simple" width="16" />
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
