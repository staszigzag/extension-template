import process from 'node:process'

export const isDev = process.env.NODE_ENV !== 'production'
console.info('isDev', isDev)
