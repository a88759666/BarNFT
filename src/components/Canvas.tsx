import { EarthCatImage } from "@/assets";
import { useEffect, useRef } from "react";

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
    class Vec2{
      public x: number;
      public y: number;
    
      constructor(x: number, y: number){
        this.x = x;
        this.y = y;
      }
    
      public set(x: number, y: number){
        this.x = x;
        this.y = y;
      }
    
      public move(x: number, y: number){
        this.x += x;
        this.y += y;
      }
    
      public add(v: Vec2){
        return new Vec2(this.x+v.x, this.y+v.y);
      }
    
      public sub(v: Vec2){
        return new Vec2(this.x-v.x, this.y-v.y);
      }
    
      public mul(s: number){
        return new Vec2(this.x*s, this.y*s);
      }
    
      public get length(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
      }
    
      public set length(nv: number){
        let temp = this.unit.mul(nv);
        this.set(temp.x, temp.y);
      }
    
      public clone(){
        return new Vec2(this.x, this.y);
      }
    
      public toString(){
        return `(${this.x}, ${this.y})`;
      }
    
      public equal(v: Vec2){
        return this.x == v.x && this.y == v.y;
      }
    
      public get angle(){
        return Math.atan2(this.y, this.x);
      }
    
      public get unit(){
        return this.mul(1/this.length);
      }
    }
    const a = new Vec2(3,4)
    
   
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current
      let time = 0 
      let degToPi = Math.PI/180
      // const mousePos = new Vec2(0,0)

      const ww = canvasRef.current.width
      const wh = canvasRef.current.height
      const bgColor = 'black'
      const updateFPS = 30
      
      
      class Circle {
        p: Vec2 = new Vec2(0, 0)
        r: number = 100
        color: string = 'white'
        lineTo: (obj: any, i: number) => boolean = (obj: any, i: number) => true
        getWidth: (obj: any, i: number) => number = (obj: any, i: number) => 1
        anglePan: (obj: any, i: number) => number = (obj: any, i: number) => 0
        vertical: boolean = false
        getVerticalWidth: (obj: any, i: number) => number = (obj: any, i: number) => 2
        ramp: number = 0

        constructor(args: {
          p?: Vec2;
          r?: number;
          color?: string;
          lineTo?: (obj: any, i: number) => boolean;
          getWidth?: (obj: any, i: number) => number;
          anglePan?: (obj: any, i: number) => number;
          vertical?: boolean;
          getVerticalWidth?: (obj: any, i: number) => number;
          ramp?: number;
        }) {
          let def = {
            p: new Vec2(0, 0),
            r: 100,
            color: "white",
            lineTo: (obj: any, i: number) => true ,
            getWidth: (obj: any, i: number) => 1,
            anglePan: (obj: any, i: number) => 0,
            vertical: false,
            getVerticalWidth: (obj: any, i: number) => 2,
            ramp: 0,
          };
          Object.assign(def, args);
          Object.assign(this, def);
        }
        
        draw() {
          ctx!.beginPath();
          for (let i = 1; i <= 360; i++) {
            let angle1 = i + this.anglePan(this, i);
            let angle2 = i - 1 + this.anglePan(this, i);
            let use_r = this.r + this.ramp * Math.sin(i / 10);
            let use_r2 = this.r + this.ramp * Math.sin((i - 1) / 10);
      
            let x1 = use_r * Math.cos(angle1 * degToPi);
            let y1 = use_r * Math.sin(angle1 * degToPi);
            let x2 = use_r2 * Math.cos(angle2 * degToPi);
            let y2 = use_r2 * Math.sin(angle2 * degToPi);
      
            if (this.lineTo(this, i)) {
              ctx!.beginPath();
              ctx!.moveTo(x1, y1);
              ctx!.lineTo(x2, y2);
              ctx!.strokeStyle = this.color;
              ctx!.lineWidth = this.getWidth(this, i);
              ctx!.stroke();
            }
      
            if (this.vertical) {
              let l = this.getVerticalWidth(this, i);
              let x3 = (use_r + l) * Math.cos(angle1 * degToPi);
              let y3 = (use_r + l) * Math.sin(angle1 * degToPi);
      
              ctx!.beginPath();
              ctx!.moveTo(x1, y1);
              ctx!.lineTo(x3, y3);
              ctx!.strokeStyle = this.color;
              ctx!.stroke();
            }
          }
        }
      }
      const cirs:Circle[] = [] 
      function init(){
        cirs.push(new Circle({
          r: 150,
          color: "rgba(255,255,255,0.4)"
        }))
        
        cirs.push(new Circle({
          r: 220,
          lineTo: function(obj,i){
            return (i%2==0)
          },
          color: "rgba(255,255,255,1)"
        }))
        
        cirs.push(new Circle({
          r: 80,
          lineTo: function(obj,i){
            return !(i%180<30)
          }
        }))
        
        cirs.push(new Circle({
          r: 320,
          ramp: 15,
          color: "rgba(255,255,255,0.8)"
        }))
        
        cirs.push(new Circle({
          r: 190,
          getWidth:function(obj,i){
            return i%150<50?5: 1
          },
          color: "rgba(255,255,255,0.8)",
          anglePan: function(obj,i){
            return -40*Math.sin(time/400)
          },
        }))
        
        cirs.push(new Circle({
          r: 300,
          lineTo(obj,i){
            return false
          },
          anglePan: function(obj,i){
            return 40*Math.sin(time/200)
          },
        vertical: true,
          getVerticalWidth(obj,i){
            
            if (i%10==0){
              return 10
            }
            if (i%5==0){
              return 5
            }
            return 2
          },
          color: "rgba(255,255,255,0.8)"
        }))
        
        cirs.push(new Circle({
          r: 280,
          lineTo: function(obj,i){
            return i%50==0
          },
          getWidth: function(obj,i){
            return 10
          },
          anglePan: function(obj,i){
            return (-time/20)%5
          },
          color: "rgba(255,255,255,0.8)",
          
        }))
        
      }
      function update(){
        time++
      }
      function draw(){
         //清空背景
        ctx!.fillStyle=bgColor
        ctx!.fillRect(0,0,ww,wh)
        
        //-------------------------
        //   在這裡繪製
        ctx!.save()
          ctx!.translate(ww/2 - 100,wh/2)
          cirs.forEach(cir=>{
            ctx!.save()
              let pan = mousePos.sub(new Vec2(ww/2,wh/2)).mul(2/cir.r)
              ctx!.translate(pan.x,pan.y)
              cir.draw()
            ctx!.restore()
          })

        let h = new Date().getHours()
        let m = new Date().getMinutes()
        let s = new Date().getSeconds()
        
        let angleHour = degToPi*360/12 *h- Math.PI/2
        ctx!.beginPath()
        ctx!.moveTo(0,0)
        ctx!.lineTo(50*Math.cos(angleHour),50*Math.sin(angleHour))
        ctx!.lineWidth=5
        ctx!.strokeStyle="red"
        ctx!.stroke()
        
        let angleMinute = degToPi*360/60 *m- Math.PI/2
        ctx!.beginPath()
        ctx!.moveTo(0,0)
        ctx!.lineTo(100*Math.cos(angleMinute),100*Math.sin(angleMinute))
        ctx!.lineWidth=2
        ctx!.strokeStyle="white"
        ctx!.stroke()
        
        let angleSecond = degToPi*360/60 *s- Math.PI/2
        ctx!.beginPath()
        ctx!.moveTo(0,0)
        ctx!.lineTo(140*Math.cos(angleSecond),140*Math.sin(angleSecond))
        ctx!.lineWidth=1
        ctx!.strokeStyle="white"
        ctx!.stroke()
        ctx!.restore()
        requestAnimationFrame(draw)
      }
      function loaded(){
        init()
        requestAnimationFrame(draw)
        setInterval(update,1000/updateFPS)
      }
      window.addEventListener("load",loaded)
      

      //滑鼠事件跟紀錄
      let mousePos = new Vec2(0,0)
      let mousePosDown = new Vec2(0,0)
      let mousePosUp = new Vec2(0,0)

      window.addEventListener("mousemove",mousemove)
      window.addEventListener("mouseup",mouseup)
      window.addEventListener("mousedown",mousedown)
      function mousemove(e:MouseEvent){
        mousePos.set(e.x,e.y)
        // console.log(mousePos)
      }
      function mouseup(e:MouseEvent){
        mousePos.set(e.x,e.y)
        mousePosUp = mousePos.clone()
        
      }
      function mousedown(e:MouseEvent){
        mousePos.set(e.x,e.y)
        mousePosDown = mousePos.clone()
      }
    }
    
    
    return <canvas ref={canvasRef} width="1500" height="700" ></canvas>;
  };

export default Canvas