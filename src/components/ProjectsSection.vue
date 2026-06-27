<script setup>
const projects = [
  {
    title: 'Kesia',
    subtitle: 'Repostería Artesanal',
    desc: 'Página web de Kesia, repostería artesanal de Keren Arias. Desarrollada con Node.js, Express y MySQL en el backend. Desplegada en Railway para ofrecer una experiencia fluida al descubrir postres, realizar pedidos y disfrutar de dulzura hecha arte.',
    image: '/Images/imagen-kesia.png',
    tags: ['Node.js', 'Express', 'MySQL'],
    links: [
      { label: 'Preview', icon: 'ph:link', href: 'https://kesia-production.up.railway.app/' }
    ]
  },
  {
    title: 'EJAC',
    subtitle: 'Escuela José Altagracia Castillo',
    desc: 'Sitio web oficial de la Escuela José Altagracia Castillo. Desarrollado desde cero con HTML5, CSS3 y JavaScript, garantizando un diseño responsivo y accesible.',
    image: '/Images/imagen-ejac.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', icon: 'ph:github-logo', href: 'https://github.com/Biaysel-MM/ejac' },
      { label: 'Preview', icon: 'ph:link', href: 'https://biaysel-mm.github.io/ejac/' }
    ]
  },
  {
    title: 'Diagnostic Care',
    subtitle: 'Centro de Salud',
    desc: 'Sitio web profesional para Diagnostic Care, diseñado con tecnologías modernas. Ofrece una interfaz limpia y funcional, enfocada en brindar información médica accesible y presentar servicios de salud.',
    image: '/Images/imagen-diagnostic-care.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', icon: 'ph:github-logo', href: 'https://github.com/Biaysel-MM/Diagnostic-Care' },
      { label: 'Preview', icon: 'ph:link', href: 'https://biaysel-mm.github.io/Diagnostic-Care/' }
    ]
  }
]
</script>

<template>
  <section id="projects" class="relative py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-24">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <span class="text-[var(--neon-primary)] font-['JetBrains_Mono'] text-xs tracking-[0.3em] uppercase">
          Proyectos
        </span>
        <h2 class="text-3xl lg:text-5xl font-['Space_Grotesk'] font-bold">
          Trabajos <span class="text-[var(--neon-primary)]">Recientes</span>
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="(project, i) in projects" :key="project.title"
          class="group relative rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)]/30 overflow-hidden transition-all duration-500 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 reveal"
          :class="[`reveal-delay-${i + 1}`]">

          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-[var(--neon-primary)]/0 group-hover:bg-[var(--neon-primary)]/5 transition-colors duration-500" />
          </div>

          <!-- Content -->
          <div class="p-6 space-y-4">
            <div>
              <h3 class="text-xl font-['Space_Grotesk'] font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-primary)] transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-sm text-[var(--text-muted)] font-['JetBrains_Mono']">{{ project.subtitle }}</p>
            </div>

            <p class="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
              {{ project.desc }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag"
                class="px-2 py-1 rounded text-[10px] font-['JetBrains_Mono'] border border-[var(--border-default)] text-[var(--text-muted)]">
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-3 pt-2">
              <a v-for="link in project.links" :key="link.label"
                :href="link.href"
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-default)] text-xs font-['JetBrains_Mono'] text-[var(--neon-primary)] transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)]">
                <iconify-icon :icon="link.icon" width="14" />
                {{ link.label }}
              </a>
            </div>
          </div>

          <!-- Corner accent -->
          <div class="absolute top-0 right-0 w-12 h-12 border-t border-r border-[var(--neon-primary)]/0 group-hover:border-[var(--neon-primary)]/30 transition-all duration-500 rounded-tr-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>
