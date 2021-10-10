let life: number

export function start(): void {
  life = setInterval(() => {}, 1000 * 60 * 60 * 24)
}

export function kill(): void {
  clearInterval(life)
}