<script lang="ts">
  import type { TabTypeEntity } from "../../domain/entities/TabType.entity";

  import { CounterPresentationAdapter } from "../../adapters/presentation/CounterPresentation.adapter";

  import { CounterModel } from "../../datasources/models/Counter.model";
  import { LatestCountsModel } from "../../datasources/models/LatestCounts.model";

  import { InitCountUseCase } from "../../usecases/InitCount.usecase";
  import { ReadLatestCountsUseCase } from "../../usecases/ReadLatestCounts.usecase";
  import { SaveLatestCountsUseCase } from "../../usecases/SaveLatestCounts.usecase";
  import { StopCountUseCase } from "../../usecases/StopCount.usecase";

  import { useLastCountsStore } from "../stores/LastCounts.store";

  export let title: string;
  export let mode: TabTypeEntity;
  export let initialValue: number;

  let counter: number =
    CounterPresentationAdapter.minutesToSeconds(initialValue);
  let intervalId: number = 0;

  const counterModel = new CounterModel();

  const initCounter = () => {
    if (intervalId) return;

    if (counter === 0) throw new Error("Counter is stoped");

    intervalId = setInterval(() => {
      if (counter === 0) {
        stopCounter();

        const latestCountsModel = new LatestCountsModel();

        new SaveLatestCountsUseCase(latestCountsModel).execute({
          mode,
          createdAt: new Date(),
          time: initialValue
        });

        useLastCountsStore.set(
          new ReadLatestCountsUseCase(latestCountsModel).execute()
        );

        return;
      }

      counter = new InitCountUseCase(counterModel).execute(counter);
    }, 10);
  };

  const stopCounter = () => {
    new StopCountUseCase(counterModel).execute(intervalId);
    intervalId = 0;
  };
</script>

<div>
  <h2 class="text-xl font-semibold">{title}</h2>

  <h3 class="text-3xl my-10 font-extrabold">
    {CounterPresentationAdapter.millisToMinutes(
      counter
    )}:{CounterPresentationAdapter.millisToSeconds(counter)}
  </h3>

  {#if !intervalId}
    <button
      on:click={initCounter}
      class="bg-blue-500 w-full font-bold rounded-md py-2 hover:bg-blue-700 active:bg-blue-600 text-white"
    >
      Init
    </button>
  {:else}
    <button
      on:click={stopCounter}
      class="bg-red-500 w-full font-bold rounded-md py-2 hover:bg-red-700 active:bg-red-600 text-white"
    >
      Stop
    </button>
  {/if}
</div>
