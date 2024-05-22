'use client'
import { useRef, useEffect, useState, use } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial, Plane, useTexture } from '@react-three/drei'
import { div, overlay, positionGeometry } from 'three/examples/jsm/nodes/Nodes.js'

const ParallaxImage = ({srcImagePath, depthMapPath}) => {
  const [ref, isInView] = useInView()

  const styles = {
    parallaxCont: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    canvas: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      mixBlendMode: (isInView ? 'overlay' : 'normal')
    }
  }

  return (
    <div style={styles.parallaxCont} ref={ref}>
      <Canvas style={styles.canvas}>
        <Model srcImagePath={srcImagePath} depthMapPath={depthMapPath} isInView={isInView} />
      </Canvas>
      <img src="./texture.png" style={styles.overlay} />
    </div>
)}

function Model({srcImagePath, depthMapPath, isInView}) {
  const depthMaterial = useRef()
  const texture = useTexture(srcImagePath)
  const depthMap = useTexture(depthMapPath)
  const { viewport } = useThree()
  const [mousePos, setMousePos] = useState([0, 0])
  const [renderedPos, setRenderedPos] = useState([0, 0])
  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const handleMouseMove = (e) => {
    if (!isInView) return;
    setMousePos([-(e.clientX - windowSize.width / 2)/windowSize.width,
    (e.clientY - windowSize.height / 2)/windowSize.height])
  }

  useEffect(() => {
    document.onmousemove = (e) => {
      handleMouseMove(e)
    }
  }, [])

  const updateFrame = (state) => {
    if (!isInView) return;
    let differences = [mousePos[0] - renderedPos[0], mousePos[1] - renderedPos[1]]
    setRenderedPos([renderedPos[0] + differences[0] * 0.1, renderedPos[1] + differences[1] * 0.1])

    depthMaterial.current.uMouse = [renderedPos[0] * 0.02, renderedPos[1] * 0.02]
  }
  useFrame(updateFrame)

  return (
    <>
      <Plane args={[1, 1]} scale={[viewport.width, viewport.height, 1]}>
        <pseudo3DMaterial ref={depthMaterial} uImage={texture} uDepthMap={depthMap} />
      </Plane>
    </>
  )
}

extend({
  Pseudo3DMaterial: shaderMaterial(
    { uMouse: [0, 0], uImage: null, uDepthMap: null },
    `
    varying vec2 vUv;
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
      vUv = uv;
    }`,
    `
    precision mediump float;

    uniform vec2 uMouse;
    uniform sampler2D uImage;
    uniform sampler2D uDepthMap;

    varying vec2 vUv;
  
    vec4 linearTosRGB( in vec4 value ) {
      return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
    }
    
    
    void main() {
       vec4 depthDistortion = texture2D(uDepthMap, vUv);
       float parallaxMult = depthDistortion.r;

       vec2 parallax = (uMouse) * parallaxMult;

       vec4 original = texture2D(uImage, (vUv + parallax));
       gl_FragColor = linearTosRGB(original);
    }
    `,
  ),
})

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [ref, isInView];
}


export default ParallaxImage