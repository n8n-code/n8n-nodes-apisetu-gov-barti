import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovBartiApi implements ICredentialType {
        name = 'N8nDevApisetuGovBartiApi';

        displayName = 'Apisetu Gov Barti API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovBarti/apisetu-gov-barti.svg', dark: 'file:../nodes/ApisetuGovBarti/apisetu-gov-barti.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/barti/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/barti/v3',
                        description: 'The base URL of your Apisetu Gov Barti API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
