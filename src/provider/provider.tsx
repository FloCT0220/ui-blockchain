'use client';
import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
	const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

	if (!PRIVY_APP_ID) {
		throw new Error("NEXT_PUBLIC_PRIVY_APP_ID is not defined in the environment variables.");
	}
	return (
		<PrivyProvider
			appId={PRIVY_APP_ID}
			clientId="client-WY5i5VHqmH9NhbAT7cmvX8tre1G7edBrAGCGFaoHgfv77"
			config={{
				// Customize Privy's appearance in your app
				appearance: {
				theme: 'light',
				accentColor: '#676FFF',
				logo: 'https://auth.privy.io/logos/privy-logo-dark.png',
				walletChainType: 'ethereum-only',	
					walletList: [
						'detected_wallets', 
						'metamask', 
						'phantom'
					],
				},
				loginMethods: ['email', 'google', 'wallet'],
				fundingMethodConfig: {
					moonpay: {
						useSandbox: true,
					},
				},
				embeddedWallets: {
					requireUserPasswordOnCreate: false,
					showWalletUIs: true,
					ethereum: {
						createOnLogin: 'users-without-wallets',
					},
				},
				mfa: {
					noPromptOnMfaRequired: false,
				},
			
			}}
		>
			{children}
		</PrivyProvider>
	);
}