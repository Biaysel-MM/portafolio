<script setup>
import { ref } from 'vue'

const base = import.meta.env.BASE_URL

const projects = [
  {
    title: 'Kesia',
    subtitle: 'Repostería Artesanal',
    desc: 'Página web de Kesia, repostería artesanal de Keren Arias. Desarrollada con Node.js, Express y MySQL en el backend. Desplegada en Railway para ofrecer una experiencia fluida al descubrir postres, realizar pedidos y disfrutar de dulzura hecha arte.',
    image: `${base}Images/imagen-kesia.png`,
    tags: ['Node.js', 'Express', 'MySQL'],
    links: [
      // { label: 'Preview', icon: 'ph:link', href: 'https://kesia-production.up.railway.app/' }
    ],
    images: [
      `${base}Images/imagen-kesia.png`,
      '',
      '',
    ]
  },
  {
    title: 'EJAC',
    subtitle: 'Escuela José Altagracia Castillo',
    desc: 'Sitio web oficial de la Escuela José Altagracia Castillo. Desarrollado desde cero con HTML5, CSS3 y JavaScript, garantizando un diseño responsivo y accesible.',
    image: `${base}Images/imagen-ejac.png`,
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', icon: 'ph:github-logo', href: 'https://github.com/Biaysel-MM/ejac' },
      { label: 'Preview', icon: 'ph:link', href: 'https://biaysel-mm.github.io/ejac/' }
    ],
    images: [
      `${base}Images/imagen-ejac.png`,
      '',
      '',
    ]
  },
  {
    title: 'Diagnostic Care',
    subtitle: 'Centro de Salud',
    desc: 'Sitio web profesional para Diagnostic Care, diseñado con tecnologías modernas. Ofrece una interfaz limpia y funcional, enfocada en brindar información médica accesible y presentar servicios de salud.',
    image: `${base}Images/imagen-diagnostic-care.png`,
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', icon: 'ph:github-logo', href: 'https://github.com/Biaysel-MM/Diagnostic-Care' },
      { label: 'Preview', icon: 'ph:link', href: 'https://biaysel-mm.github.io/Diagnostic-Care/' }
    ],
    images: [
      `${base}Images/imagen-diagnostic-care.png`,
      '',
      '',
    ]
  }
]

const gallery = ref(null)
const currentIndex = ref(0)

function openGallery(project) {
  gallery.value = project
  currentIndex.value = 0
}

function closeGallery() {
  gallery.value = null
}

function prevImage() {
  if (!gallery.value) return
  const imgs = gallery.value.images
  currentIndex.value = (currentIndex.value - 1 + imgs.length) % imgs.length
}

function nextImage() {
  if (!gallery.value) return
  const imgs = gallery.value.images
  currentIndex.value = (currentIndex.value + 1) % imgs.length
}
</script>

<template>
  <section id="projects" class="relative py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-24">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <span class="text-(--neon-primary) font-['JetBrains_Mono'] text-xs tracking-[0.3em] uppercase">
          Proyectos
        </span>
        <h2 class="text-3xl lg:text-5xl font-['Space_Grotesk'] font-bold">
          Trabajos <span class="text-(--neon-primary)">Recientes</span>
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="(project, i) in projects" :key="project.title"
          class="group relative rounded-2xl border border-(--border-default) bg-(--bg-secondary)/30 overflow-hidden transition-all duration-500 hover:border-(--border-hover) hover:shadow-(--shadow-glow) hover:-translate-y-2 reveal"
          :class="[`reveal-delay-${i + 1}`]">

          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-(--bg-secondary) to-transparent" />

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-(--neon-primary)/0 group-hover:bg-(--neon-primary)/5 transition-colors duration-500" />
          </div>

          <!-- Content -->
          <div class="p-6 space-y-4">
            <div>
              <h3 class="text-xl font-['Space_Grotesk'] font-semibold text-(--text-primary) group-hover:text-(--neon-primary) transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-sm text-(--text-muted) font-['JetBrains_Mono']">{{ project.subtitle }}</p>
            </div>

            <p class="text-sm text-(--text-secondary) leading-relaxed line-clamp-3">
              {{ project.desc }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag"
                class="px-2 py-1 rounded text-2.5 font-['JetBrains_Mono'] border border-(--border-default) text-(--text-muted)">
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-3 pt-2 flex-wrap">
              <a v-for="link in project.links" :key="link.label"
                :href="link.href"
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border-default) text-xs font-['JetBrains_Mono'] text-(--neon-primary) transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow) w-auto">
                <iconify-icon :icon="link.icon" width="14" />
                {{ link.label }}
              </a>
              <button
                @click="openGallery(project)"
                class="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border-default) text-xs font-['JetBrains_Mono'] text-(--neon-primary) transition-all duration-300 hover:border-(--border-hover) hover:shadow-(--shadow-glow) w-auto">
                <iconify-icon icon="ph:images" width="14" />
                Galería
              </button>
            </div>
          </div>

          <!-- Corner accent -->
          <div class="absolute top-0 right-0 w-12 h-12 border-t border-r border-(--neon-primary)/0 group-hover:border-(--neon-primary)/30 transition-all duration-500 rounded-tr-2xl" />
        </div>
      </div>
    </div>

    <!-- Gallery Modal -->
    <Teleport to="body">
      <div
        v-if="gallery"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="closeGallery"
      >
        <div class="relative max-w-4xl w-full bg-(--bg-secondary) rounded-2xl border border-(--border-default) overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-(--border-default)">
            <h3 class="font-['Space_Grotesk'] font-semibold text-(--text-primary)">{{ gallery.title }} — Galería</h3>
            <button
              @click="closeGallery"
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-(--border-default) text-(--text-muted) hover:text-(--neon-primary) hover:border-(--border-hover) transition-all duration-300"
            >
              <iconify-icon icon="ph:x" width="18" />
            </button>
          </div>

          <!-- Content -->
          <div
            v-if="gallery.images && gallery.images.some(src => src)"
            class="relative flex items-center justify-center p-6 min-h-75"
          >
            <!-- Prev -->
            <button
              @click="prevImage"
              class="absolute left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-(--border-default) bg-(--bg-secondary)/80 text-(--neon-primary) hover:border-(--border-hover) hover:shadow-(--shadow-glow) transition-all duration-300"
            >
              <iconify-icon icon="ph:caret-left" width="20" />
            </button>

            <!-- Image or placeholder -->
            <img
              v-if="gallery.images[currentIndex]"
              :src="gallery.images[currentIndex]"
              :alt="`${gallery.title} - ${currentIndex + 1}`"
              class="max-h-[65vh] w-auto rounded-lg object-contain"
            />
            <div
              v-else
              class="flex flex-col items-center justify-center gap-4 py-16"
            >
              <iconify-icon icon="ph:image" width="64" class="text-(--text-muted)/30" />
              <p class="text-(--text-muted)/50 font-['JetBrains_Mono'] text-sm">Sin imagen</p>
            </div>

            <!-- Next -->
            <button
              @click="nextImage"
              class="absolute right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-(--border-default) bg-(--bg-secondary)/80 text-(--neon-primary) hover:border-(--border-hover) hover:shadow-(--shadow-glow) transition-all duration-300"
            >
              <iconify-icon icon="ph:caret-right" width="20" />
            </button>
          </div>

          <div
            v-else
            class="flex flex-col items-center justify-center py-20 gap-4"
          >
            <iconify-icon icon="ph:image-square" width="48" class="text-(--text-muted)/50" />
            <p class="text-(--text-muted) font-['JetBrains_Mono'] text-sm">Sin imágenes</p>
          </div>

          <!-- Footer / Counter -->
          <div
            v-if="gallery.images && gallery.images.length > 0"
            class="flex items-center justify-between px-6 py-4 border-t border-(--border-default)"
          >
            <div class="flex gap-2">
              <button
                v-for="(_, idx) in gallery.images"
                :key="idx"
                @click="currentIndex = idx"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="idx === currentIndex ? 'bg-(--neon-primary) w-6' : 'bg-(--border-default) hover:bg-(--border-hover)'"
              />
            </div>
            <span class="text-2.5 font-['JetBrains_Mono'] text-(--text-muted)">
              {{ currentIndex + 1 }} / {{ gallery.images.length }}
            </span>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
