// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs

const KEY = '2775cf204d1e40ad4852c25f8ff506af'
const HOST = 'bestspacesim.com'

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/comparison`,
  `https://${HOST}/star-citizen`,
  `https://${HOST}/free-fly`,
]

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
})

if (res.ok) {
  console.log(`✅ IndexNow: submitted ${urls.length} URLs (HTTP ${res.status})`)
} else {
  const body = await res.text()
  console.error(`❌ IndexNow failed: HTTP ${res.status} — ${body}`)
  process.exit(1)
}
