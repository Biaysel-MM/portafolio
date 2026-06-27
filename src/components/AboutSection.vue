<script setup>
const cards = [
  { title: 'Cristiano', icon: 'ph:cross', desc: 'Mi fe guía cada paso que doy, en mi vida personal y profesional.' },
  { title: 'Calistenia', icon: 'ph:barbell', desc: 'Disciplina, fuerza y control. El cuerpo como templo, la mente como fortaleza.' },
  { title: 'Piano', icon: 'ph:music-note', desc: 'La música es mi refugio. Cada tecla es una nota de creatividad.' },
  { title: 'Desarrollador', icon: 'ph:code', desc: 'Convertir ideas en código. Crear soluciones que marquen la diferencia.' },
]
</script>

<template>
  <section id="about" class="relative py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-24">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <span class="text-[var(--neon-primary)] font-['JetBrains_Mono'] text-xs tracking-[0.3em] uppercase">
          Sobre mí
        </span>
        <h2 class="text-3xl lg:text-5xl font-['Space_Grotesk'] font-bold">
          Desarrollador por <span class="text-[var(--neon-primary)]">vocación</span>,
          <br />creyente por <span class="text-[var(--neon-primary)]">convicción</span>
        </h2>
        <p class="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          Estudiante de Desarrollo de Software en ITLA, combinando tecnología, música y disciplina
          para crear experiencias digitales únicas.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(card, i) in cards" :key="card.title"
          class="group relative p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)]/50 transition-all duration-500 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 reveal"
          :class="[`reveal-delay-${i + 1}`]">
          <!-- Glow on hover -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--neon-primary)]/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div class="relative z-10 space-y-4">
            <!-- Icon -->
            <div class="w-12 h-12 rounded-xl border border-[var(--border-default)] flex items-center justify-center group-hover:border-[var(--border-hover)] group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <iconify-icon :icon="card.icon" width="24" class="text-[var(--neon-primary)]" />
            </div>

            <!-- Content -->
            <h3 class="text-xl font-['Space_Grotesk'] font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-primary)] transition-colors duration-300">
              {{ card.title }}
            </h3>
            <p class="text-sm text-[var(--text-muted)] leading-relaxed">
              {{ card.desc }}
            </p>
          </div>

          <!-- Corner decoration -->
          <div class="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--neon-primary)]/0 group-hover:border-[var(--neon-primary)]/30 transition-all duration-500 rounded-tr-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>
