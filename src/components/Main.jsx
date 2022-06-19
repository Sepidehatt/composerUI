import {Box,Text,Button, Image} from '@cmpsr/components';
import Business from '../assets/Business.svg'
import Marketing from '../assets/Marketing.svg'
import DesignSystem from '../assets/design-system.png'
import ComponentCatalog from '../assets/ComponentCatalog.png'
import arrowV from '../assets/arrow.svg'
import Market from './Market'



const Main = () => {
  return (
    <Box >

      {/* first section */}

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

      {/* Second section */}

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

      {/* Third section */}
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
          mr={{lg: '20px'}}>
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

      {/* Forth section */}
      <Box 
      
      m={{
        sm: '4% 2%',
        base: '4% 2%',
        md: '10% 5%',
        lg: '10% 10%',
        xl: '10% 10%',
        '2xl': '10% 10%',
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
        <Box 
        p='50px 60px'
        backgroundColor='primary-default'
        borderRadius='10px'
        >
          <Text 
          mb='50px'
          color='accent-default' 
          textStyle='text-header-3XL'
           >
             Ready to deploy more and better products?
             </Text>
          <Button 
          p='12px 24px'
          _hover='none'
          _focus='none'
          _active='none'
          color='text-button-accent' 
          borderRadius='99px'
          backgroundColor='accent-default'
          >
            Request for free demo
            <Image  src={arrowV} /> 
            </Button>
        </Box>
      </Box>
      
    </Box>
  )
}

export default Main