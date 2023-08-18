import { EarthCatImage } from "@/assets";
import { useEffect, useRef } from "react";

const CanvasLogo: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
    
    
   
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current
      let time = 0 
      const ww = canvasRef.current.width
      const wh = canvasRef.current.height
      const bgColor = 'black'
      const updateFPS = 10000
      
      function update(){
        time++
      }
      function draw(){
        time += 1
        let stime = time % 300
        ctx!.clearRect(0, 0, 300, 40)

        ctx!.save()
          const lineargradient = ctx!.createLinearGradient(20 + stime, 40, 500, 150);
          lineargradient!.addColorStop(0  ,'hsla(209, 89%, 100%, 0.1)')
          lineargradient!.addColorStop(0.2  ,'hsl(209, 89%, 83%, 0.2)');
          lineargradient!.addColorStop(0.4 , 'hsla(217, 61%, 33%, 0.2)');
          lineargradient!.addColorStop(0.6 , 'hsla(217, 64%, 6%, 0.1)');
          lineargradient!.addColorStop(1 , 'transparent');
          ctx!.globalAlpha = 0.1
          ctx!.fillStyle = lineargradient as CanvasGradient
          ctx?.beginPath
          ctx!.fillRect(20 + stime, 60, 300, 40)
          ctx!.closePath
          ctx?.fill()
          
          requestAnimationFrame(draw)

      }
      
      function loaded(){
        requestAnimationFrame(draw)
        setInterval(update,1000/updateFPS)
      }
      window.addEventListener("load",loaded)
      
    }

    return <canvas ref={canvasRef} width="500" height="150" ></canvas>;
  };

export default CanvasLogo