import {Box,Text,Image} from '@cmpsr/components';
import Marketing from '../assets/Marketing.svg'

const MarketingExpert = () => {
    return (
        <Box m='20% 10%'
            display="flex"
            flexDirection={{
                sm: 'column',
                base: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
            }}
            alignItems="center"
            justifyContent="space-around"
        >

            <Box
                w={{
                    sm: '100%',
                    base: '100%',
                    md: '100%',
                    lg: '55%',
                    xl: '40%',
                    '2xl': '40%',
                }}
                textAlign={{
                    sm: 'center',
                    base: 'center',
                    md: 'center',
                    lg: 'start',
                    xl: 'start',
                    '2xl': 'start',
                }}
            >
                <Text
                    mb='20px'
                    color='primary-default'
                    textStyle='text-header-L'
                >
                    For Marketing Experts
                </Text>
                <Text
                    mb='20px'
                    color='accent-default'
                    textStyle='text-header-2XL'
                >
                    Get better conversion rates
                </Text>
                <Text
                    color='text-secondary'
                    textStyle='text-body-display-M'
                    lineHeight='40px'
                >
                    We help you create high-converting landing pages, engaging popups, integrated SEO, and social media integrations to reach a wider audience and optimize conversion rates using precise and customized A/B testing, and analytical insights.
                </Text>

            </Box>
            <Image
                w={{
                    sm: '100%',
                    base: '100%',
                    md: '100%',
                    lg: '35%',
                    xl: '40%',
                    '2xl': '40%',
                }}
                src={Marketing}
                alt='Marketing' />
        </Box>
    )
}

export default MarketingExpert