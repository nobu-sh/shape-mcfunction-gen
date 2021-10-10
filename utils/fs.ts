export function existsSync(path: string): boolean {
  try {
    Deno.readTextFileSync(path)
    return true
  } catch (_) {
    return false
  }
}