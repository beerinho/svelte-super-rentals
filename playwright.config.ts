import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000,
		// this is useful to allow port 3000 to be reused even if the port was accidentally left open when closing another terminal window
		reuseExistingServer: true
	}
};

export default config;
