module.exports = {
  apps: [
    {
      name: 'yzjoycare_nuxtjs',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
