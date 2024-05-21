<script lang="ts">
  import LongBreakCounter from "../components/LongBreakCounter.svelte";
  import ShortBreakCounter from "../components/ShortBreakCounter.svelte";
  import WorkCounter from "../components/WorkCounter.svelte";

  type TabType = "work" | "long-break" | "short-break";

  let counterTab: TabType = "work";

  const selectTab = (tab: TabType) => {
    counterTab = tab;
  };
</script>

<div class="text-center">
  <h3 class="text-xl font-bold">Mode</h3>
  <div class="flex justify-around my-5">
    <button
      class="cursor-pointer bg-red-200 px-5 font-bold border-b-4 border-b-black"
      on:click={() => selectTab("work")}
    >
      Work
    </button>

    <button
      class="cursor-pointer bg-red-200 px-5 font-bold border-b-4 border-b-black"
      on:click={() => selectTab("short-break")}
    >
      Short Break
    </button>

    <button
      class="cursor-pointer bg-red-200 px-5 font-bold border-b-4 border-b-black"
      on:click={() => selectTab("long-break")}
    >
      Long Break
    </button>
  </div>

  <div class="flex justify-center items-center">
    {#if counterTab === "work"}
      <WorkCounter />
    {:else if counterTab === "short-break"}
      <ShortBreakCounter />
    {:else if counterTab === "long-break"}
      <LongBreakCounter />
    {/if}
  </div>
</div>
