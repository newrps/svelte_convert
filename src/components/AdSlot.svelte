<script>
  import { onMount } from 'svelte';
  export let snippet = '';

  onMount(() => {
    // 쿠팡 광고 스크립트(g.js)가 없으면 한 번만 삽입
    if (!document.querySelector('script[src*="ads-partners.coupang.com/g.js"]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://ads-partners.coupang.com/g.js';
      document.head.appendChild(s);
    }
  });
</script>

<div class="ad-slot">{@html snippet}</div>

<style>
  .ad-slot { display: block; width: 100%; line-height: 0; }
</style>
