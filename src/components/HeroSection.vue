<script setup>
const technologies = ['Vue.js', 'Tailwind', 'JavaScript', 'HTML5', 'CSS3']
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-20 lg:pt-0">
    <div class="max-w-7xl mx-auto px-6 lg:px-24 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Left Content -->
        <div class="flex-1 space-y-8 text-center lg:text-left">
          <div class="space-y-3">
            <p class="text-[var(--neon-primary)] font-['JetBrains_Mono'] text-sm tracking-[0.3em] uppercase animate-pulse">
              Frontend Developer
            </p>
            <h1 class="text-5xl lg:text-7xl font-['Space_Grotesk'] font-bold leading-tight">
              <span class="text-[var(--text-primary)]">Biaysel</span>
              <br />
              <span class="text-[var(--neon-primary)]">Minyety</span>
            </h1>
            <p class="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Desarrollador frontend apasionado por crear experiencias web modernas,
              combinando tecnología, creatividad y disciplina.
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects"
              class="px-6 py-3 rounded-lg bg-[var(--neon-primary)] text-[var(--bg-primary)] font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:shadow-[var(--shadow-glow-strong)] hover:scale-105">
              Ver proyectos
            </a>
            <a href="#contact"
              class="px-6 py-3 rounded-lg border border-[var(--border-default)] text-[var(--neon-primary)] font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)] hover:scale-105">
              Contactarme
            </a>
            <a href="/document/Curr%C3%ADculum_Vitae__Biaysel_Minyety_Mejia.pdf" target="_blank"
              class="px-6 py-3 rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--neon-primary)] hover:shadow-[var(--shadow-glow)] hover:scale-105">
              Descargar CV
            </a>
          </div>

          <!-- Tech Badges -->
          <div class="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
            <span v-for="tech in technologies" :key="tech"
              class="px-3 py-1.5 rounded-md border border-[var(--border-default)] text-[var(--text-muted)] text-xs font-['JetBrains_Mono'] transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--neon-primary)] hover:shadow-[var(--shadow-glow)]">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Right Image -->
        <div class="flex-shrink-0 relative">
          <!-- Backlight glow -->
          <div class="absolute inset-0 bg-[var(--neon-primary)] opacity-5 blur-[80px] rounded-full scale-150" />

          <!-- Hexagon container -->
          <div class="relative hexagon-clip w-[280px] h-[320px] lg:w-[360px] lg:h-[400px]">
            <!-- Hexagon border glow -->
            <div class="absolute inset-0 hexagon-clip border-2 border-[var(--neon-primary)]/30 animate-pulse-glow" />

            <!-- Image -->
            <img src="/Images/imagen-del-main.png" alt="Biaysel Minyety"
              class="w-full h-full object-cover hexagon-clip" />

            <!-- Inner neon overlay -->
            <div class="absolute inset-0 hexagon-clip bg-gradient-to-t from-[var(--neon-primary)]/10 via-transparent to-transparent" />
          </div>

          <!-- Floating particles around image -->
          <div class="absolute -top-4 -right-4 w-2 h-2 rounded-full bg-[var(--neon-primary)]/40 animate-ping" />
          <div class="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full bg-[var(--neon-tertiary)]/40 animate-ping" style="animation-delay: 1s" />
          <div class="absolute top-1/2 -right-6 w-1 h-1 rounded-full bg-[var(--neon-secondary)]/40 animate-ping" style="animation-delay: 2s" />
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-[var(--text-muted)] text-xs font-['JetBrains_Mono']">Scroll</span>
      <div class="w-[2px] h-8 bg-gradient-to-b from-[var(--neon-primary)] to-transparent animate-float" />
    </div>
  </section>
</template>
