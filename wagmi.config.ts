import { defineConfig } from '@wagmi/cli';
import { foundry, react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: 'src/wagmi.generated.ts',
  contracts: [],
  plugins: [
    foundry({
      project: '.',
      include: ['MyToken.sol/*.json'],
      deployments: {
        MyToken: '0x27f00fcfd68abfdef701d65ca44e42c92e33d509'
      }
    }),
    react()
  ],
});
