<script lang="ts">
  import LatestCounts from "./lib/pomodoro/presentation/components/LatestCounts.svelte";
  import AppLayout from "./lib/pomodoro/presentation/layouts/AppLayout.svelte";
  import HomePage from "./lib/pomodoro/presentation/pages/HomePage.svelte";
</script>

<main>
  <AppLayout>
    <HomePage />

    <svelte:fragment slot="latest-counts">
      <LatestCounts />
    </svelte:fragment>
  </AppLayout>
</main>
