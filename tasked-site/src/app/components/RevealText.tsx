import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { div } from 'three/examples/jsm/nodes/Nodes.js';

interface Props {
    text: string,
    textSize?: number,
    className?: string,
    style?: any
}

const RevealText = ({ text, textSize = 28, className = "", style = {} }: Props) => {
    const controls = useAnimation();
    let ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const splitText = () => {
        return text.split(' ').map((word, index) => {
            return <motion.span
            key={index}
            animate={controls}
            initial='hidden'
            transition={{ duration: 0.5, delay: 0.4 + (index * 0.05)}}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}>
                {word + " "}
            </motion.span>
        })
    }

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView]);


    return (
        <div ref={ref} className={className} style={{position: "relative", overflow: "hidden", zIndex: -1}}>
            <h2 style={{fontSize: `${textSize}px`, ...style}}>{
                splitText()
            }</h2>
        </div>
    )
}

export default RevealText