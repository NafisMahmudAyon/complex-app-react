import React, { useEffect } from 'react'
import Container from './Container'

function Page (props) {

  //  mongodb+srv://nafis_mahmud:abcd123abcd@cluster0.bygahww.mongodb.net/ReactCourse?retryWrites=true&w=majority
    useEffect(() => {
        document.title = `${props.title} | Complex App`
        window.scrollTo(0,0)
    }, [])

  return (
    <Container wide={props.wide}>
        {props.children}
    </Container>
  )
}

export default Page