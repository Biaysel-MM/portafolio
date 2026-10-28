<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({ src: { type: String, required: true } })

const container = ref(null)
const loading = ref(true)
const failed = ref(false)

// pdf.js se carga solo al abrir el visor para no pesar en la carga inicial
onMounted(async () => {
  try {
    const pdfjs = await import('pdfjs-dist')
    const { default: workerUrl } = await import('pdfjs-dist/build/pdf.worker.min.mjs?url')
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

    const pdf = await pdfjs.getDocument(props.src).promise
    const width = container.value.clientWidth
    const ratio = Math.min(window.devicePixelRatio || 1, 2) * 1.5

    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n)
      const viewport = page.getViewport({ scale: (width / page.getViewport({ scale: 1 }).width) * ratio })
      const canvas = document.createElement('canvas')
      canvas.width = viewport.width
      canvas.height = viewport.height
      canvas.className = 'w-full h-auto rounded-lg shadow-lg bg-white'
      await page.render({ canvas, viewport }).promise
      container.value.appendChild(canvas)
    }
  } catch {
    failed.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="relative">
    <div ref="container" class="flex flex-col gap-4" />
    <div v-if="loading" class="flex flex-col items-center justify-center gap-3 py-24 text-(--text-muted)">
      <iconify-icon icon="ph:spinner-gap" width="32" class="animate-spin text-(--neon-primary)" />
      <span class="text-sm font-['JetBrains_Mono']">Cargando CV...</span>
    </div>
    <div v-if="failed" class="flex flex-col items-center justify-center gap-3 py-24 text-center">
      <iconify-icon icon="ph:file-pdf" width="48" class="text-(--neon-primary)" />
      <p class="text-sm text-(--text-secondary)">No se pudo mostrar la vista previa.</p>
      <a :href="src" target="_blank" class="text-sm font-['JetBrains_Mono'] text-(--neon-primary) hover:underline">Abrir PDF</a>
    </div>
  </div>
</template>
