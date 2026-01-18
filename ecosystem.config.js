module.exports = {
  apps: [
    {
      name: 'insurance-backend',

      script: 'dist/main.js',

      instances: 1,
      exec_mode: 'fork',

      // =========================
      // ENV SETTINGS
      // =========================

      env: {
        NODE_ENV: 'development',
        PORT: 3001,
      },

      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
      },

      // =========================
      // STABILITY
      // =========================

      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      kill_timeout: 5000,

      // =========================
      // LOGGING
      // =========================

      error_file: './logs/insurance-error.log',
      out_file: './logs/insurance-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
  ],
};
