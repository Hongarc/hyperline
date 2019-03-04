const hour = 3600
const day = 24 * hour;

export default function formatUptime(uptime) {
  const days = Math.floor(uptime / day)
  const mod = Math.floor(uptime % day)
  const hours = Math.floor(mod / hour)

  return `${days}d ${hours}h`
}
