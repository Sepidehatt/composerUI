import {Box,Text,Button, Image} from '@cmpsr/components';
import logo from '../assets/ComposerLogo.svg'
import arrowV from '../assets/arrow.png'


const Banner = () => {
  return (
    <>
      {/* Navbar */}
      <Box display="flex"
        alignItems="center"
        justifyContent="space-between"
        >
        <Box mt='32px' display="flex" alignItems="center">
          <Image boxSize='80px' src={logo} alt='logo' />
          <Text 
            display={{
              sm: 'none',
              base: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              '2xl': 'block',
            }} 
          color='accent-default' 
          textStyle='text-header-XL'
          >Composer
          </Text>
        </Box>

        <Box  >
          <Button mt='32px' borderRadius='99px' ><Text padding='8px 16px' color='accent-default' textStyle='text-body-medium' >Request for free demo </Text><Image src={arrowV} /></Button>
        </Box>
      </Box>

      {/* Banner */}

      <Box mt='15%' display="flex"
        alignItems="center"
        flexDirection='column'
        justifyContent="center"
        textAlign='center' >
        <Text m={{
              sm: '0',
              base: '0',
              md: '0 15%',
              lg: '0 15%',
              xl: '0 15%',
              '2xl': '0 15%',
            }}   
            color='accent-default' 
            textStyle='text-header-4XL'
            >
          Deploy modern web experiences with the smartest web builder
        </Text>
        <Text 
        m={{
          sm: '4% 3%',
          base: '4% 3%',
          md: '4% 22%',
          lg: '4% 22%',
          xl: '4% 22%',
          '2xl': '4% 22%',
        }} 
          color='text-secondary'
          textStyle='text-body-display-M'
          >
          Introducing Composer - the most advanced web and landing page builder for non-programmers that helps you to speed up your digital production processes
        </Text>
        <Button borderRadius='99px' ><Text padding='8px 16px' color='accent-default' textStyle='text-body-large-medium' >Request for free demo </Text><Image src={arrowV} /></Button>
      </Box>

    </>
  )
}

export default Banner