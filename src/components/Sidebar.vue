<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)
const isOpen = ref(false)

const navItems = [
  { icon: 'ph:house', label: 'Inicio', href: '#hero' },
  { icon: 'ph:user', label: 'Sobre mi', href: '#about' },
  { icon: 'ph:briefcase', label: 'Proyectos', href: '#projects' },
  { icon: 'ph:code', label: 'Tecnologías', href: '#tech' },
  { icon: 'ph:envelope', label: 'Contacto', href: '#contact' },
]

const socialItems = [
  { icon: 'simple-icons:github', label: 'GitHub', href: 'https://github.com/Biaysel-MM' },
  { icon: 'simple-icons:linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/biaysel-minyety-21217a279/' },
  { icon: 'simple-icons:gitlab', label: 'GitLab', href: '#' },
]

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

function scrollTo(href) {
  isOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- Mobile menu button -->
  <button @click="isOpen = !isOpen"
    class="fixed top-4 right-4 z-50 lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass border border-[var(--border-default)] text-[var(--neon-primary)]">
    <iconify-icon :icon="isOpen ? 'ph:x' : 'ph:list'" width="24" />
  </button>

  <!-- Sidebar overlay for mobile -->
  <div v-if="isOpen" @click="isOpen = false"
    class="fixed inset-0 bg-black/50 z-30 lg:hidden" />

  <!-- Sidebar -->
  <aside :class="[
    'fixed left-0 top-0 h-screen z-40 flex flex-col items-center py-8 transition-all duration-300 glass border-r border-[var(--border-default)]',
    isOpen ? 'translate-x-0' : '-translate-x-full',
    'lg:translate-x-0 w-[90px]'
  ]">
    <!-- Logo -->
    <a href="#hero" @click.prevent="scrollTo('#hero')"
      class="w-12 h-12 rounded-xl border border-[var(--border-default)] flex items-center justify-center mb-10 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 group">
      <span class="text-[var(--neon-primary)] font-['Space_Grotesk'] font-bold text-lg group-hover:animate-pulse">BM</span>
    </a>

    <!-- Navigation -->
    <nav class="flex-1 flex flex-col items-center gap-6">
      <a v-for="item in navItems" :key="item.label"
        :href="item.href"
        @click.prevent="scrollTo(item.href)"
        class="group relative flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--neon-primary)]/5">
        <iconify-icon :icon="item.icon" width="20"
          class="text-[var(--text-muted)] group-hover:text-[var(--neon-primary)] transition-colors duration-300" />
        <span class="text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors duration-300 font-['JetBrains_Mono']">{{ item.label }}</span>
        <span class="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--neon-primary)] rounded-full transition-all duration-300 group-hover:h-8 opacity-0 group-hover:opacity-100" />
      </a>
    </nav>

    <!-- Social -->
    <div class="flex flex-col items-center gap-4 mb-6">
      <a v-for="item in socialItems" :key="item.label"
        :href="item.href"
        target="_blank"
        class="group relative">
        <iconify-icon :icon="item.icon" width="18"
          class="text-[var(--text-muted)] group-hover:text-[var(--neon-primary)] transition-colors duration-300" />
      </a>
    </div>

    <!-- Theme Toggle -->
    <button @click="toggleTheme"
      class="w-8 h-14 rounded-full border border-[var(--border-default)] flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)] group">
      <iconify-icon icon="ph:sun" width="14"
        class="text-[var(--text-muted)] transition-all duration-300"
        :class="isDark ? 'opacity-40' : 'opacity-100 text-[var(--neon-primary)]'" />
      <div class="w-4 h-[2px] rounded-full bg-[var(--border-default)]" />
      <iconify-icon icon="ph:moon" width="14"
        class="text-[var(--text-muted)] transition-all duration-300"
        :class="isDark ? 'opacity-100 text-[var(--neon-primary)]' : 'opacity-40'" />
    </button>
  </aside>
</template>
