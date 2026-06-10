import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovBarti implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Barti',
		name: 'N8nDevApisetuGovBarti',
		icon: { light: 'file:./apisetu-gov-barti.svg', dark: 'file:./apisetu-gov-barti.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'APIs by Dr. Babasaheb Ambedkar Research & Training Institute, Maharashtra',
		defaults: { name: 'Apisetu Gov Barti' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovBartiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
