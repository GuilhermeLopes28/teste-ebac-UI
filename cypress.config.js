const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vr2bne',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    video: true,
  },
});
