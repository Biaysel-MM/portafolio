<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)
const sending = ref(false)

async function handleSubmit() {
  sending.value = true
  try {
    const data = new URLSearchParams({
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      _captcha: 'false',
      _template: 'table'
    })
    await fetch('https://formsubmit.co/gamerbian001@gmail.com', {
      method: 'POST',
      body: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    sent.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
    setTimeout(() => { sent.value = false }, 5000)
  } catch (e) {
    console.error(e)
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="relative py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-24">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <span class="text-[var(--neon-primary)] font-['JetBrains_Mono'] text-xs tracking-[0.3em] uppercase">
          Contacto
        </span>
        <h2 class="text-3xl lg:text-5xl font-['Space_Grotesk'] font-bold">
          Hablemos de tu <span class="text-[var(--neon-primary)]">próximo proyecto</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left: Info -->
        <div class="space-y-8 reveal">
          <div class="space-y-6">
            <div class="flex items-start gap-4 group">
              <div class="w-12 h-12 rounded-xl border border-[var(--border-default)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--border-hover)] group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <iconify-icon icon="ph:envelope-simple" width="20" class="text-[var(--neon-primary)]" />
              </div>
              <div>
                <h4 class="text-sm font-['JetBrains_Mono'] text-[var(--text-muted)] mb-1">Email</h4>
                <a href="mailto:biayselminyety001@gmail.com" class="text-[var(--text-primary)] hover:text-[var(--neon-primary)] transition-colors duration-300">
                  biayselminyety001@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="w-12 h-12 rounded-xl border border-[var(--border-default)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--border-hover)] group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <iconify-icon icon="ph:map-pin" width="20" class="text-[var(--neon-primary)]" />
              </div>
              <div>
                <h4 class="text-sm font-['JetBrains_Mono'] text-[var(--text-muted)] mb-1">Ubicación</h4>
                <p class="text-[var(--text-primary)]">Santo Domingo, República Dominicana</p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="w-12 h-12 rounded-xl border border-[var(--border-default)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--border-hover)] group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <iconify-icon icon="ph:check-circle" width="20" class="text-[var(--neon-primary)]" />
              </div>
              <div>
                <h4 class="text-sm font-['JetBrains_Mono'] text-[var(--text-muted)] mb-1">Disponibilidad</h4>
                <p class="text-[var(--text-primary)]">Abierto a oportunidades laborales y colaboraciones</p>
              </div>
            </div>
          </div>

          <!-- Paper plane illustration -->
          <div class="relative h-40 flex items-center justify-center">
            <div class="relative animate-float">
              <iconify-icon icon="ph:paper-plane-right-fill" width="80"
                class="text-[var(--neon-primary)]/20" />
              <div class="absolute inset-0 flex items-center justify-center">
                <iconify-icon icon="ph:paper-plane-right" width="48"
                  class="text-[var(--neon-primary)]" />
              </div>
              <!-- Trail -->
              <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-[var(--neon-primary)]/50 to-transparent" />
              <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-[var(--neon-primary)]/30 to-transparent" />
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="reveal reveal-delay-2">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label class="text-xs font-['JetBrains_Mono'] text-[var(--text-muted)] uppercase tracking-wider">Nombre</label>
                <input v-model="form.name" type="text" required
                  class="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--border-hover)] focus:shadow-[var(--shadow-glow)] transition-all duration-300 font-['Inter']" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-['JetBrains_Mono'] text-[var(--text-muted)] uppercase tracking-wider">Correo</label>
                <input v-model="form.email" type="email" required
                  class="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--border-hover)] focus:shadow-[var(--shadow-glow)] transition-all duration-300 font-['Inter']" />
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-xs font-['JetBrains_Mono'] text-[var(--text-muted)] uppercase tracking-wider">Asunto</label>
              <input v-model="form.subject" type="text" required
                class="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--border-hover)] focus:shadow-[var(--shadow-glow)] transition-all duration-300 font-['Inter']" />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-['JetBrains_Mono'] text-[var(--text-muted)] uppercase tracking-wider">Mensaje</label>
              <textarea v-model="form.message" rows="5" required
                class="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--border-hover)] focus:shadow-[var(--shadow-glow)] transition-all duration-300 font-['Inter'] resize-none"></textarea>
            </div>
            <button type="submit" :disabled="sending"
              class="w-full py-3 rounded-lg bg-[var(--neon-primary)] text-[var(--bg-primary)] font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300 hover:shadow-[var(--shadow-glow-strong)] hover:scale-[1.02] disabled:opacity-50">
              {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
            </button>

            <!-- Success message -->
            <div v-if="sent"
              class="p-4 rounded-lg border border-[var(--neon-primary)] bg-[var(--neon-primary)]/5 text-[var(--neon-primary)] text-sm font-['JetBrains_Mono'] text-center animate-float">
              ¡Mensaje enviado con éxito!
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
