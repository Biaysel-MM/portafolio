// Genera public/document/*.pdf a partir de cv/cv.html usando Edge en modo headless.
// Uso: npm run cv
import { execFileSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const html = pathToFileURL(join(root, 'cv', 'cv.html')).href
const out = join(root, 'public', 'document', 'Currículum_Vitae__Biaysel_Minyety_Mejia.pdf')
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'

execFileSync(edge, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${out}`, html], { stdio: 'inherit' })
console.log('CV generado en', out)
