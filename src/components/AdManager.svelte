<script>
  import { onMount } from 'svelte';
  import AdSlot from './AdSlot.svelte';

  let ads = null;
  let ww = 0;
  let showMobile = true;

  const onResize = () => (ww = window.innerWidth);

  onMount(() => {
    onResize();
    window.addEventListener('resize', onResize);

    let alive = true; // 언마운트 후 set state 방지

    (async () => {
      try {
        const res = await fetch('/ads.json');
        const data = await res.json();
        if (alive) ads = data;
      } catch (err) {
        console.error('ads.json 로드 실패:', err);
      }
    })();

    // ✅ cleanup은 동기 함수로 리턴
    return () => {
      alive = false;
      window.removeEventListener('resize', onResize);
    };
  });

  const shouldShowSide = (item) =>
    item.enabled !== false && ww >= (item.minWidth ?? 1280);

  const shouldShowMobile = () =>
    ads?.mobile?.enabled && ww <= (ads.mobile.maxWidth ?? 768) && showMobile;
</script>

{#if ads}
  <!-- 사이드 광고 -->
  {#each ads.side || [] as item (item.id)}
    {#if item.position === 'left' && shouldShowSide(item)}
      <div class="ad-side ad-left" style={`width:${item.width || 160}px`}>
        <AdSlot snippet={item.snippet} />
      </div>
    {/if}
    {#if item.position === 'right' && shouldShowSide(item)}
      <div class="ad-side ad-right" style={`width:${item.width || 160}px`}>
        <AdSlot snippet={item.snippet} />
      </div>
    {/if}
  {/each}

  <!-- 모바일 광고 -->
  {#if shouldShowMobile()}
    <div class="ad-mobile">
      {#if ads?.mobile?.closeable}
        <button class="ad-close" on:click={() => (showMobile = false)}>✕</button>
      {/if}
      <AdSlot snippet={ads.mobile.snippet} />
    </div>
  {/if}
{/if}

<style>
  .ad-side {
    position: fixed;
    top: 120px;
    z-index: 20;
    display: none;
  }
  .ad-left  { left: 20px; }
  .ad-right { right: 20px; }
  @media (min-width: 1280px) { .ad-side { display: block; } }

  .ad-mobile {
    position: fixed;
    left: 0; right: 0;
    bottom: env(safe-area-inset-bottom);
    padding: 8px 12px calc(8px + env(safe-area-inset-bottom));
    background: rgba(255,255,255,0.98);
    border-top: 1px solid #e9ecef;
    box-shadow: 0 -8px 24px rgba(0,0,0,0.08);
    z-index: 50;
  }
  .ad-mobile .ad-close {
    position: absolute;
    right: 8px;
    top: 8px;
    border: 0;
    background: #fff;
    width: 28px; height: 28px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .ad-side { display: none !important; }
    /* 컨텐츠가 광고에 가리지 않도록 */
    :global(.converter-content) { padding-bottom: 110px; }
  }
</style>
