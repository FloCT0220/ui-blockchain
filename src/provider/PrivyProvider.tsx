'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cm8ys5i7h019y1thnf00n4eer"
      clientId="client-WY5i5VHqmH9NhbAT7cmvX8tre1G7edBrAGCGFaoHgfv77"
      config={{
        
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://auth.privy.io/logos/privy-logo-dark.png',
          walletChainType: 'ethereum-and-solana',	
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
            solana: {
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