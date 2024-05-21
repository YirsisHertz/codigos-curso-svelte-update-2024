<header class="text-center py-10 bg-red-500">
  <h1 class="text-3xl font-bold text-white">Pomodoro App</h1>
</header>

<div class="grid md:grid-cols-3 m-10 gap-5">
  <div class=" bg-gray-100 col-span-2 rounded-sm p-10 shadow-xl">
    <slot></slot>
  </div>

  <div class=" bg-gray-100 rounded-sm p-10 shadow-xl">
    <slot name="latest-counts">
      <div class="flex justify-center items-center h-full">
        <h3 class="text-3xl font-bold text-red-500">Empty Slot</h3>
      </div>
    </slot>
  </div>
</div>
