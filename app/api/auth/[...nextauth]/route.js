import throwError from '@helpers/throwError';
import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

const authOptions = {
	// Configure one or more authentication providers
	providers: [
		AzureADProvider({
			clientId: process.env.AZURE_AD_CLIENT_ID ?? throwError('missing env var AZURE_AD_CLIENT_ID'),
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? throwError('missing env var AZURE_AD_CLIENT_SECRET'),
			tenantId: process.env.AZURE_AD_TENANT_ID ?? throwError('missing env var AZURE_AD_TENANT_ID'),
		}),
	],
	secret: process.env.NEXT_PUBLIC_SECRET ?? throwError('missing env var NEXT_PUBLIC_AUTH_SECRET'),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
