import {Box,Text,Image} from '@cmpsr/components';
import Business from '../assets/Business.svg'

const StartupsBusiness = () => {
    return (
        <Box m='20% 10%'
            display="flex"
            flexDirection={{
                sm: 'column-reverse',
                base: 'column-reverse',
                md: 'column-reverse',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
            }}
            alignItems="center"
            justifyContent="space-around"
        >
            <Image
                w={{
                    sm: '100%',
                    base: '100%',
                    md: '100%',
                    lg: '35%',
                    xl: '40%',
                    '2xl': '40%',
                }}
                src={Business}
                alt='Business' />
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
                    For Startups & Business Owners
                </Text>
                <Text
                    mb='20px'
                    color='accent-default'
                    textStyle='text-header-2XL'
                >
                    We support the way you run your Business
                </Text>
                <Text
                    color='text-secondary'
                    textStyle='text-body-display-M'
                    lineHeight='40px'
                >With our drag-and-drop web editor and customizable professional templates that fit your brand, you'll be online in no time.
                </Text>

            </Box>
        </Box>
    )
}

export default StartupsBusiness