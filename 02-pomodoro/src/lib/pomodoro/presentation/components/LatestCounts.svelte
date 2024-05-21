<script lang="ts">
  import { onMount } from "svelte";

  import { LatestCountsModel } from "../../datasources/models/LatestCounts.model";
  import { ReadLatestCountsUseCase } from "../../usecases/ReadLatestCounts.usecase";
  import { useLastCountsStore } from "../stores/LastCounts.store";

  onMount(() => {
    const latestCountsModel = new LatestCountsModel();
    const latestCounts = new ReadLatestCountsUseCase(
      latestCountsModel
    ).execute();

    useLastCountsStore.set(latestCounts);
  });

  const formatDate = (date: Date) =>
    `${date.toLocaleDateString()} - ${date.toTimeString().slice(0, 8)}`;
</script>

<div class="text-center">
  <h2 class="font-bold border-b-2 border-b-black pb-2">
    Latest Counts - {$useLastCountsStore.length} items
  </h2>

  <ol>
    {#each $useLastCountsStore as latestCounts}
      <li>
        {latestCounts.mode} - {latestCounts.time}
        <br />
        <small>{formatDate(new Date(latestCounts.createdAt))}</small>
      </li>
    {/each}
  </ol>
</div>
