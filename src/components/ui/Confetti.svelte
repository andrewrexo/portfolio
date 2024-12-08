<script lang="ts">
  interface CanvasParticle {
    x: number;
    y: number;
    size: number;
    color: string;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
  }

  interface ConfettiOptions {
    particleCount?: number;
    speedX?: number;
    speedY?: number;
    size?: number;
  }

  type ConfettiProps = {
    options: ConfettiOptions;
    containerElement?: HTMLElement;
    children: any;
  };

  function createConfettiCanvas() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed; top:0; left:0; pointer-events:none; z-index:50';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    return canvas;
  }

  function applyParticleEffect(element: HTMLElement, options?: ConfettiOptions) {
    const canvas = createConfettiCanvas();
    const ctx = canvas.getContext('2d')!;

    const particles: CanvasParticle[] = [];
    const limit = options?.particleCount || 30;
    let isActive = false;
    let mouseX = 0;
    let mouseY = 0;

    function createParticle() {
      const size = options?.size || 15 + Math.random() * 30;
      const speedX = options?.speedX || (Math.random() - 0.5) * 10;
      const speedY = options?.speedY || -Math.random() * 25;

      return {
        x: mouseX,
        y: mouseY,
        size,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        speedX,
        speedY,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      };
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isActive && particles.length < limit) {
        particles.push(createParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += 0.5;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + p.size) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(-p.size / 2, -p.size / 2, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    }

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      handleMove(e);
      isActive = true;
    };

    const handleEnd = () => {
      isActive = false;
    };

    element.addEventListener('mousemove', handleMove);
    element.addEventListener('mousedown', handleStart);
    element.addEventListener('mouseup', handleEnd);
    element.addEventListener('touchmove', handleMove);
    element.addEventListener('touchstart', handleStart);
    element.addEventListener('touchend', handleEnd);

    animate();

    return () => {
      element.removeEventListener('mousemove', handleMove);
      element.removeEventListener('mousedown', handleStart);
      element.removeEventListener('mouseup', handleEnd);
      element.removeEventListener('touchmove', handleMove);
      element.removeEventListener('touchstart', handleStart);
      element.removeEventListener('touchend', handleEnd);
      canvas.remove();
    };
  }

  let { options, containerElement, children }: ConfettiProps = $props();

  $effect(() => {
    if (containerElement) {
      const cleanup = applyParticleEffect(containerElement, options);
      return cleanup;
    }
  });
</script>

<div bind:this={containerElement} class="z-5">
  {@render children()}
</div>
