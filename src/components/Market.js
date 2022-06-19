import {Box,Text,Button,Link,Image} from '@cmpsr/components';
import DesignSystem from '../assets/design-system.svg'
import ComponentCatalog from '../assets/ComponentCatalog.svg'


const Market = () => {
  return (
    <Box 
    p='100px'
    backgroundColor='background-page'>
     <Box mb='150px' >
        <Box textAlign='center'>
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
        <Box display="flex">
          <Box>
            <Image src={DesignSystem} alt='design system' />
            <Box mt='30px' ml='30px' w='90%'>
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
              color='text-secondary' 
              textStyle='text-body-display-X'
              >
                We have created the most flexible Design System tool to enable you to easily deploy your brand color scheme, fonts, images, and style into it to create your personalized Theme, or if you need it multi-brand themes!
                </Text>
            </Box>
          </Box>
          <Box >
            <Image src={ComponentCatalog} alt='component catalog' />
            <Box mt='30px' ml='30px' w='90%'>
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

export default Market