<script lang="ts">
  import { CounterPresentationAdapter } from "../../adapters/presentation/CounterPresentation.adapter";
  import { CounterModel } from "../../datasources/models/Counter.model";
  import { InitCountUseCase } from "../../usecases/InitCount.usecase";
  import { StopCountUseCase } from "../../usecases/StopCount.usecase";

  export let title: string;
  export let initialValue: number;

  let counter: number =
    CounterPresentationAdapter.minutesToSeconds(initialValue);
  let intervalId: number = 0;

  const counterModel = new CounterModel();

  const initCounter = () => {
    if (intervalId) return;

    intervalId = setInterval(() => {
      if (counter === 0) {
        stopCounter();
        return;
      }

      counter = new InitCountUseCase(counterModel).execute(counter);
    }, 1000);
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
