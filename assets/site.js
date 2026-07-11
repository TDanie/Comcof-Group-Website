// ── NAV SCROLL ──
(function(){
  const nav=document.getElementById('nav');
  if(!nav)return;
  const update=()=>nav.classList.toggle('scrolled',window.scrollY>40);
  window.addEventListener('scroll',update);
  update();
})();

// ── SCROLL REVEAL ──
(function(){
  const els=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}});
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>io.observe(el));
})();

// ── HERO CANVAS (home page only) ──
(function(){
  const canvas=document.getElementById('heroCanvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let W,H,particles=[];

  function resize(){
    W=canvas.width=canvas.offsetWidth;
    H=canvas.height=canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize',()=>{resize();init()});

  class Particle{
    constructor(){this.reset()}
    reset(){
      this.x=Math.random()*W;
      this.y=Math.random()*H;
      this.r=Math.random()*1.5+.3;
      this.vx=(Math.random()-.5)*.18;
      this.vy=(Math.random()-.5)*.18;
      this.alpha=Math.random()*.4+.05;
      this.life=0;this.maxLife=Math.random()*400+200;
    }
    update(){
      this.x+=this.vx;this.y+=this.vy;
      this.life++;
      if(this.life>this.maxLife||this.x<0||this.x>W||this.y<0||this.y>H)this.reset();
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(184,147,62,${this.alpha})`;
      ctx.fill();
    }
  }

  function drawGrid(){
    ctx.strokeStyle='rgba(184,147,62,0.04)';
    ctx.lineWidth=.5;
    const step=80;
    for(let x=0;x<W;x+=step){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}
    for(let y=0;y<H;y+=step){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
  }

  function drawConnections(){
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<120){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(184,147,62,${.06*(1-d/120)})`;
          ctx.lineWidth=.5;
          ctx.stroke();
        }
      }
    }
  }

  function init(){
    particles=[];
    const count=Math.floor((W*H)/18000);
    for(let i=0;i<count;i++)particles.push(new Particle());
  }
  init();

  function loop(){
    ctx.clearRect(0,0,W,H);
    const grd=ctx.createLinearGradient(0,0,W,H);
    grd.addColorStop(0,'#0C0B0A');
    grd.addColorStop(.5,'#1A0A04');
    grd.addColorStop(1,'#0C1810');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    drawGrid();
    drawConnections();
    particles.forEach(p=>{p.update();p.draw()});
    requestAnimationFrame(loop);
  }
  loop();
})();

// ── WORLD MAP (global page only, real geography from Natural Earth data) ──
(function(){
  const canvas=document.getElementById('worldMap');
  if(!canvas||typeof WORLD_LAND==='undefined')return;
  const dpr=window.devicePixelRatio||1;
  const cssW=canvas.offsetWidth||1200;
  const cssH=Math.max(380,Math.round(cssW*0.46));
  canvas.width=Math.round(cssW*dpr);
  canvas.height=Math.round(cssH*dpr);
  canvas.style.height=cssH+'px';
  const ctx=canvas.getContext('2d');
  ctx.scale(dpr,dpr);

  // Equirectangular projection, cropped to inhabited latitudes
  const LAT_TOP=76,LAT_BOT=-56;
  function xy(lat,lon){
    return{
      x:(lon+180)/360*cssW,
      y:(LAT_TOP-lat)/(LAT_TOP-LAT_BOT)*cssH
    };
  }

  // Static base layer rendered once to an offscreen canvas
  const base=document.createElement('canvas');
  base.width=canvas.width;base.height=canvas.height;
  const b=base.getContext('2d');
  b.scale(dpr,dpr);

  // Background
  b.fillStyle='#0D1A12';
  b.fillRect(0,0,cssW,cssH);

  // Graticule
  b.strokeStyle='rgba(184,147,62,0.05)';
  b.lineWidth=.5;
  for(let lat=-40;lat<=60;lat+=20){
    const y=xy(lat,0).y;
    b.beginPath();b.moveTo(0,y);b.lineTo(cssW,y);b.stroke();
  }
  for(let lon=-150;lon<=180;lon+=30){
    const x=xy(0,lon).x;
    b.beginPath();b.moveTo(x,0);b.lineTo(x,cssH);b.stroke();
  }

  // Land polygons (Natural Earth 110m)
  b.beginPath();
  for(const ring of WORLD_LAND){
    const first=xy(ring[1],ring[0]);
    b.moveTo(first.x,first.y);
    for(let i=2;i<ring.length;i+=2){
      const p=xy(ring[i+1],ring[i]);
      b.lineTo(p.x,p.y);
    }
    b.closePath();
  }
  b.fillStyle='rgba(61,107,85,0.22)';
  b.fill();
  b.strokeStyle='rgba(93,148,120,0.4)';
  b.lineWidth=.6;
  b.stroke();

  // Cities
  const cities=[
    {lat:0.3,lon:32.6,label:'Kampala',type:'origin',size:6,dx:-8,dy:14,align:'right'},
    {lat:9.0,lon:38.7,label:'Addis Ababa',type:'origin',size:5,dx:9,dy:-4,align:'left'},
    {lat:-1.3,lon:36.8,label:'Nairobi',type:'origin',size:4.5,dx:9,dy:12,align:'left'},
    {lat:25.2,lon:55.3,label:'Dubai',type:'hub',size:5.5,dx:9,dy:4,align:'left'},
    {lat:52.4,lon:4.9,label:'Amsterdam',type:'market',size:5,dx:9,dy:-4,align:'left'},
    {lat:1.35,lon:103.8,label:'Singapore',type:'market',size:5,dx:9,dy:4,align:'left'},
    {lat:51.5,lon:-0.1,label:'London',type:'market',size:5,dx:-9,dy:8,align:'right'},
    {lat:40.7,lon:-74.0,label:'New York',type:'market',size:5,dx:-9,dy:4,align:'right'},
  ];
  const colors={origin:'#B8933E',hub:'#3D6B55',market:'#D4AF6A'};

  // Trade routes
  const routes=[
    ['Kampala','Dubai'],['Kampala','Amsterdam'],
    ['Addis Ababa','Dubai'],['Dubai','Singapore'],
    ['Amsterdam','London'],['Amsterdam','New York'],
    ['Nairobi','Dubai'],
  ];
  const cityMap={};
  cities.forEach(c=>{cityMap[c.label]=xy(c.lat,c.lon)});
  routes.forEach(([a2,b2])=>{
    const p1=cityMap[a2],p2=cityMap[b2];
    if(!p1||!p2)return;
    const mx=(p1.x+p2.x)/2;
    const my=(p1.y+p2.y)/2-Math.min(60,Math.abs(p1.x-p2.x)*.18);
    b.beginPath();
    b.moveTo(p1.x,p1.y);
    b.quadraticCurveTo(mx,my,p2.x,p2.y);
    b.strokeStyle='rgba(184,147,62,0.28)';
    b.lineWidth=.9;
    b.setLineDash([3,5]);
    b.stroke();
    b.setLineDash([]);
  });

  // City dots and labels
  cities.forEach(c=>{
    const {x,y}=xy(c.lat,c.lon);
    const col=colors[c.type];
    b.beginPath();b.arc(x,y,c.size+3,0,Math.PI*2);
    b.strokeStyle=col+'55';b.lineWidth=1;b.stroke();
    b.beginPath();b.arc(x,y,c.size*.55,0,Math.PI*2);
    b.fillStyle=col;b.fill();
    b.fillStyle='rgba(247,243,236,0.85)';
    b.font=`500 11px 'DM Sans', sans-serif`;
    b.textAlign=c.align==='right'?'right':'left';
    b.fillText(c.label,x+c.dx,y+c.dy);
  });
  b.textAlign='left';

  // Animation: redraw base each frame, then soft pulse rings (no accumulation)
  let frame=0;
  function animate(){
    frame++;
    ctx.clearRect(0,0,cssW,cssH);
    ctx.drawImage(base,0,0,cssW,cssH);
    cities.forEach((c,i)=>{
      const {x,y}=xy(c.lat,c.lon);
      const phase=(frame*0.025+i*1.1)%(Math.PI*2);
      const t=(Math.sin(phase)+1)/2;
      const r=c.size+3+t*9;
      const alpha=.28*(1-t);
      ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);
      ctx.strokeStyle=`rgba(212,175,106,${alpha.toFixed(3)})`;
      ctx.lineWidth=1;
      ctx.stroke();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();
