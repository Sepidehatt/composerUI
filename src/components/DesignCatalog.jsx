import {Box,Text,Image} from '@cmpsr/components';
import DesignSystem from '../assets/design-system.png'
import ComponentCatalog from '../assets/ComponentCatalog.png'


const DesignCatalog = () => {
  return (
    <Box
      p={{
        sm: '10px',
        base: '10px',
        md: '50px',
        lg: '100px',
        xl: '100px',
        '2xl': '100px',
      }}
      backgroundColor='background-page'
    >
      <Box mb='150px'>
        <Box
          textAlign='center'>
          <Text
            mb='15px'
            color='accent-default'
            textStyle='text-header-2XL'
          >
            We have got what you need
          </Text>
          <Text
            color='text-secondary'
            textStyle='text-body-display-X'
            mb='80px'
          >
            Learn more about the amazing features our team is developing.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection={{
            sm: 'column',
            base: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="start"
          justifyContent='space-between'
        >
          <Box
            w={{
              lg: '60%'
            }}
            mr={{ lg: '20px' }}>
            <Image
              src={DesignSystem}
              alt='design system' />
            <Box mt='30px' ml='30px' w='80%'>
              <Text
                color='accent-default'
                textStyle='text-header-XL'>
                Apply your Brand Identity into our
                <Text as='span'
                  ml='7px'
                  color='primary-default'
                  textStyle='text-header-XL'>
                  Design System tool
                </Text>
              </Text>

              <Text
                w='80%'
                mb='50px'
                color='text-secondary'
                textStyle='text-body-display-X'
              >
                We have created the most flexible Design System tool to enable you to easily deploy your brand color scheme, fonts, images, and style into it to create your personalized Theme, or if you need it multi-brand themes!
              </Text>
            </Box>
          </Box>
          <Box w={{
            lg: '60%'
          }}>
            <Image
              src={ComponentCatalog}
              alt='component catalog' />
            <Box mt='30px' ml='30px' w='80%'>
              <Text

                color='accent-default'
                textStyle='text-header-XL'
              >Get your perfect branded and coded

                <Text as='span'
                  ml='7px'
                  color='primary-default'
                  textStyle='text-header-XL'>
                  Component Catalog
                </Text>
              </Text>
              <Text
                color='text-secondary'
                mb='50px'
                textStyle='text-body-display-X'
              >
                Once your brand theming is applied you can rapidly launch modern experiences with a space grade React component catalog based on the ubiquitous open-source Chakra UI library.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DesignCatalog