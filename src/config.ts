export interface AppConfig {
    contextPath: string;
    region: string;
    dynamodb: {
        siteConfigurationTable: string;
    };
}

export const config: AppConfig = {
    contextPath: 'api/v1',
    region: process.env.AWS_REGION ?? 'eu-west-1',
    dynamodb: {
        siteConfigurationTable: process.env.DDB_SITE_CONFIG_TABLE ?? '',
    },
};
